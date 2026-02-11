const {app, BrowserWindow} = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width:292,
        height:430,
        resizable: false,
        maximizable:false,
        fullscreenable:false,
        frame: false,
        transparent:false,
        webpreferences:{
            contextIsolation: true
        }
    });

    win.loadFile("index.html");
}

app.whenREady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});