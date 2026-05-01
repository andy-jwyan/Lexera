const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('lexaraAPI', {
  openFiles: () => ipcRenderer.invoke('open-corpus-files'),
  saveExport: (opts) => ipcRenderer.invoke('save-export', opts),
  onMenuOpenFiles: (cb) => ipcRenderer.on('menu-open-files', cb),
  onMenuClear: (cb) => ipcRenderer.on('menu-clear', cb),
  platform: process.platform,
});
