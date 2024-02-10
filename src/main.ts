import { app, BrowserWindow, dialog, ipcMain } from "electron";
import * as path from "path";

// only once instance of the app
const gotTheLock = app.requestSingleInstanceLock();
let mainWindow: BrowserWindow = null;

const appSession = {
    language: "en",
};


function createWindow() {

    let iconPath = path.join(__dirname, "../src/assets/icon.png");
    if (process.env.NODE_ENV !== "development") {
        iconPath = path.join(path.resolve(__dirname), "../../assets/icon.png");
    }

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        minWidth: 1024,
        minHeight: 768,
        icon: iconPath,
        backgroundColor: "#fff",
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "./preload.js"),
        },
    });


    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, "../src/index.html"));

    if (process.env.NODE_ENV !== "development") {
        mainWindow.removeMenu();
    }

    if (process.env.NODE_ENV === "development") {
        // Open the DevTools.
        // mainWindow.webContents.openDevTools();
    }
}

// doar o singura instanta a aplicatiei
if (!gotTheLock) {
    app.quit();
} else {
    app.on("second-instance", () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) {
                mainWindow.restore();
                mainWindow.focus();
            }
        }
    });
    app.whenReady().then(() => {
        createWindow();
    });
}
// Quit when all windows are closed.
app.on("window-all-closed", () => {
    app.quit();
});
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('showDialogMessage', (event, args) => {
    dialog.showMessageBox(mainWindow, {
        type: args.type,
        message: args.message,
    })
});

ipcMain.on('login', (event, args) => {
    // check if user is authenticated
    if(args.username !== 'admin' && args.password !== 'admin') {
        dialog.showMessageBox(mainWindow, {
            type: 'error',
            message: 'Invalid username or password',
        })
        return
    }
    // TODO load institution data
    // set appSession
    console.log(args);
    
    appSession.language = args.language;
    // go to next page
    mainWindow.loadURL("file://" + path.join(__dirname, "../src/pages/01_menu_screen.html"));
});

// change window - check if authenticated
ipcMain.on("changeWindow", (event, args) => {
    const newPage = path.join(__dirname, "../src/pages/" + args.name + ".html");
    switch (args.name) {
        case "index":
            // go to login? -- reset session
            mainWindow.loadURL("file://" + path.join(__dirname, "../src/index.html"));
            break;
        case "01_login":
            goToLogin(newPage, args.lang);
            break;
        default:
            mainWindow.loadURL("file://" + newPage);
    }
});

const goToLogin = (page: string, lang: string) => {
    
    mainWindow.loadURL("file://" + page);
}
// const goTo = () => {
//     const newPage = path.join(__dirname, "../src/pages/login.html");
//     mainWindow.loadURL("file://" + newPage);
//     mainWindow.webContents.once("did-finish-load", () => {
//         database.getRezidentiDeclaratiCR12().then(() => {

//         });
//     });
// }
