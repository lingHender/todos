'use strict';

const fs = require('fs');
const nconf = require('nconf');
const authorfile = nconf.file({
  file: 'author.json'
});
const electron = require('electron');
const ipcMain = electron.ipcMain;

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 900
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/static/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});



app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});
