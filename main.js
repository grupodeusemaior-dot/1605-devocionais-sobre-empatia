const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow(){const win=new BrowserWindow({width:1000,height:850,minWidth:650,minHeight:600,backgroundColor:'#17263c',webPreferences:{}});win.loadFile(path.join(__dirname,'index.html'));}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
