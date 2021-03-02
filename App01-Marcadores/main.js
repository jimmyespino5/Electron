const {app, BrowserWindow} = require('electron');

function crearVentanaPrincipal(){
    let ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true //permite usar NodeJS
        }
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