const {app, BrowserWindow} = require('electron');
const path = require('path');

function crearVentanaPrincipal(){
    let ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        } //Cargar el JS cuando se cree la ventana
    });

    ventanaPrincipal.loadFile('index.html');
}

app.whenReady().then(crearVentanaPrincipal);

app.on('window-all-closed', function(){ //Para MacOs
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', function(){
    if(BrowserWindow.getAllWindows().length===0){ //Para MacOs
        crearVentanaPrincipal();
    }
});