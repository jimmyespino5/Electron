const baseDatos = require('./js/base-datos');

class GestorPersonas{
    constructor(){
        this.frmNuevoRegistro = document.getElementById('frmNuevoRegistro');
        this.registros = document.getElementById('registros');

        this.cargarRegistrosPersona();
        this.agregarEventListeners();
    }

    agregarEventListeners(){
        this.frmNuevoRegistro.addEventListener('submit', this.crearRegistroPersona.bind(this))
    }

    crearRegistroPersona(){

    }

    generarHtmlRegistroPersona(persona){
        return `<tr> 
                <td>${persona.nombres}</td>
                <td>${persona.apellidos}</td>
                <td>${persona.nombres}</td>
                <td> <input type="button" class="btn btn-danger" onClick="${this.eliminarRegistroPersona(persona._id)}">
                </td>            
                </tr>`;
    }

    cargarRegistrosPersona(){
        baseDatos.obtenerPersonas((personas) => {
            let html = personas.map(this.generarHtmlRegistroPersona).join('');

            this.registros.innerHTML = html;
        });
    }

    eliminarRegistroPersona(id){
        baseDatos.eliminarPersona(id);

        this.cargarRegistrosPersona();
    }
}