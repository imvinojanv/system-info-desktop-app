const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getNodeVersion: () => process.versions.node,
    getChromeVersion: () => process.versions.chrome,
    getElectronVersion: () => process.versions.electron,
    getProcessIdentifier: () => process.pid,
    getPlatformInformation: () => process.platform,
});
