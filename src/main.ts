process.env.NODE_ENV = "development";
// Set env mode
// process.env.NODE_ENV = 'production';

import { app, BrowserWindow, dialog, ipcMain } from "electron";
import * as path from "path";
import { database } from "./database/database";
import * as DI from "../src/interfaces/database";

// translate pages
// import { Eta } from "eta"
// import * as en from "./locales/en.json";

// only once instance of the app
const gotTheLock = app.requestSingleInstanceLock();
let mainWindow: BrowserWindow = null;

const appSession = {
    language: "en",
    userName: "",
    userType: "",
    userInstitution: 0,
    institutionName: "",
    institutionDetails: {}
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
    database.checkUser(args.username, args.password).then((result: Array<DI.User>) => {
        if (result.length === 0) {
            dialog.showMessageBox(mainWindow, {
                type: 'error',
                message: 'Invalid username or password',
            })
            return
        }
        // TODO load institution data
        appSession.userName = result[0].username;
        appSession.userType = result[0].userType;
        appSession.userInstitution = result[0].institutionId;
        appSession.language = args.language;
        // go to next page
        goToDashboard();
    });
});

// change window - check if authenticated
ipcMain.on("changeWindow", (event, args) => {
    const newPage = path.join(__dirname, "../src/pages/" + args.name + ".html");
    switch (args.name) {
        case "index":
            // go to login? -- reset session
            mainWindow.loadURL("file://" + path.join(__dirname, "../src/index.html"));
            break;
        case "dashboard":
            goToDashboard();
            break;
        case "localCoordinator/02_institution_details":
            institutionDetails();
            break;
        case "01_login":
            goToLogin(newPage);
            break;
        default:
            mainWindow.loadURL("file://" + newPage);
    }
});

const goToLogin = (page: string) => {
    mainWindow.loadURL("file://" + page);
}

const goToDashboard = () => {

    let page = '';
    if (appSession.userType === "localCollector") {
        page = path.join(__dirname, "../src/pages/localCollector/01_dashboard.html");
    } else if (appSession.userType === "localCoordinator") {
        page = path.join(__dirname, "../src/pages/localCoordinator/01_dashboard.html");
    } else if (appSession.userType === "cityCollector") {
        page = path.join(__dirname, "../src/pages/cityCollector/01_dashboard.html");
    } else if (appSession.userType === "evaluator") {
        page = path.join(__dirname, "../src/pages/evaluator/01_dashboard.html");
    } else if (appSession.userType === "regionalCoordinator") {
        page = path.join(__dirname, "../src/pages/regionalCoordinator/01_dashboard.html");
    } else if (appSession.userType === "main") {
        page = path.join(__dirname, "../src/pages/main/01_dashboard.html");
    } else {
        dialog.showMessageBox(mainWindow, {
            type: 'error',
            message: 'User error. Please login again.',
        })
        return;
    }

    mainWindow.loadURL("file://" + page);
    mainWindow.webContents.once("did-finish-load", () => {
        if(appSession.userType === "localCollector" || appSession.userType === "localCoordinator" || appSession.userType === "cityCollector"){
            database.getUserInstitution(appSession.userInstitution).then((result: Array<DI.Institution>) => {
                if(result.length === 0){
                    dialog.showMessageBox(mainWindow, {
                        type: 'error',
                        message: 'Institution error. Please login again.',
                    })
                    return;
                }
                appSession.institutionName = result[0].name;
                appSession.institutionDetails = result[0];
                mainWindow.webContents.send("appSession", appSession);
            });
        } else {
            // there is no institution for this user
            appSession.institutionName = "";
            mainWindow.webContents.send("appSession", appSession);
        }
            
    });

}

const institutionDetails = () => {
    const newPage = path.join(__dirname, "../src/pages/localCoordinator/02_institution_details.html");
    mainWindow.loadURL("file://" + newPage);
    mainWindow.webContents.once("did-finish-load", () => {
            mainWindow.webContents.send("institutionDetails", appSession.institutionDetails);
    });
}


ipcMain.on('getRegionDistrict', (event, args) => {
    // TODO get from DB
    console.log(args);
    mainWindow.webContents.send('regionDistrict', {
        'region': 'Tashkent',
        'district': 'Yunusabad'
    });
});

// const goTo = () => {
//     const newPage = path.join(__dirname, "../src/pages/login.html");
//     mainWindow.loadURL("file://" + newPage);
//     mainWindow.webContents.once("did-finish-load", () => {
//         database.getRezidentiDeclaratiCR12().then(() => {

//         });
//     });
// }
