const { contextBridge, ipcRenderer } = require("electron");

// in this preload script, we can provide variables and functions
// to the renderer process (so our React App)
// the React App this way can use those to indirectly access NODE features
// these functions are TRIGGERED in the rendering process,
// and are DELEGATED / propagated up to the MAIN process where they can get executed
// this way we can use the hybrid of a BROWSER UI with SYSTEM CALLS 
contextBridge.exposeInMainWorld("main", {
  versions: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
  },
  // function dbUpdate can be called in render process
  // call will get delegated up to main process => db:update handler
  dbUpdate: async (data) => ipcRenderer.invoke('db:update', data),
  ping: () => ipcRenderer.invoke("ping"),
  // currentDir: __dirname,
  count: {
    default: 7
  }
  // we can also expose variables, not just functions
});
