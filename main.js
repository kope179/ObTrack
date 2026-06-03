const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 600,
    title: 'OBTrack',
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false
    }
  })
  win.loadFile(path.join(__dirname, 'index.html'))
  win.setMenuBarVisibility(false)
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())
