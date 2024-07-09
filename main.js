const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const os = require('node:os');

console.log("1", os.platform());
console.log("2", os.arch());
console.log("3", os.totalmem());
console.log("4", os.freemem());
console.log("5", os.hostname());
console.log("6", os.userInfo().username);

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'img', 'icon.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false, 
            enableRemoteModule: false,
            worldSafeExecuteJavaScript: true,
            allowRunningInsecureContent: false,
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    });

    // win.webContents.openDevTools(); // Automatically open DevTools
}

// app.on('ready', createWindow);
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});