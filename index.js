const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

var mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    maximizeable: true
  })

  mainWindow.loadURL('file:///' + __dirname + '/renderer/index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  mainWindow.maximize()
}

app.on('ready', function () {
  createWindow()
})

app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () {
    createWindow()
})
