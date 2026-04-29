const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronBridge', {
  saveTheme: (themeName) => ipcRenderer.send('save-theme', themeName),
  // Legacy canvas-based screenshot save (browser fallback)
  saveScreenshot: (payload) => ipcRenderer.invoke('save-screenshot', payload),
  // Native Electron screenshot via hidden BrowserWindow + capturePage
  takeScreenshot: (payload) => ipcRenderer.invoke('take-screenshot', payload),
});
