const { BrowserWindow, app, ipcMain } = require('electron')
const path = require("path");
const fs = require("fs");

// function declared on ipcMain have access to PC (e.g. filesystem)
// they can be triggered from renderer process (= React frontend in this case)
// triggering is done by injecting functions in preload script, which forward /  
// invoke the calls on the main process
ipcMain.handle("db:update", async (_, args) => {
  console.log("Jayyyyyy...", args);
  fs.writeFileSync("./data/db.json", JSON.stringify(args));
  console.log("Updated DB file");
});
ipcMain.handle("ping", () => "pong")

const createWindow = () => {

  // create UI window where our React app will get displayed
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,    
    webPreferences: {
      // before loading the webpage => inject this script
      // script variables and functions will then be USABLE
      // within the webpage, by window globals
      preload: path.join(__dirname, "preload.js"),
      // devTools: false // do not show dev tools in UI
    },
  });

  // attach our window to the running React server
  win.loadURL("http://localhost:3000")
}

app.on("ready", createWindow)