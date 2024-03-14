process.env.NODE_ENV = "development";
// Set env mode
// process.env.NODE_ENV = 'production';

import { app, BrowserWindow, dialog, ipcMain } from "electron";
import * as path from "path";
import { db, database } from "./database/database";
import * as DI from "../src/interfaces/database";

// language
import { I18n } from "i18n";
const i18n = new I18n({
    locales: ['en', 'uz', 'ru'],
    directory: path.join(__dirname, '../src/locales'),
    defaultLocale: 'en',
});

// translate pages
import { Eta } from "eta"
import { writeFileSync } from "original-fs";
const etaObj = new Eta({ views: path.join(__dirname, "../src/templates") })

import * as one_en from "./templates/1_UZ_ChildDI_Children_in_the_child_care_system_en.json";
import * as one_ru from "./templates/1_UZ_ChildDI_Children_in_the_child_care_system_ru.json";
import * as one_uz from "./templates/1_UZ_ChildDI_Children_in_the_child_care_system_uz.json";
writeFileSync(path.join(__dirname, "../src/templates/1_UZ_ChildDI_Children_in_the_child_care_system_en.html"), etaObj.render("1_UZ_ChildDI_Children_in_the_child_care_system.eta", one_en))
writeFileSync(path.join(__dirname, "../src/templates/1_UZ_ChildDI_Children_in_the_child_care_system_ru.html"), etaObj.render("1_UZ_ChildDI_Children_in_the_child_care_system.eta", one_ru))
writeFileSync(path.join(__dirname, "../src/templates/1_UZ_ChildDI_Children_in_the_child_care_system_uz.html"), etaObj.render("1_UZ_ChildDI_Children_in_the_child_care_system.eta", one_uz))

// import * as six_en from "./templates/6_UZ_ChildDI_Entries_Exists_Sheet_en.json";
// import * as six_ru from "./templates/6_UZ_ChildDI_Entries_Exists_Sheet_ru.json";
// import * as six_uz from "./templates/6_UZ_ChildDI_Entries_Exists_Sheet_uz.json";
// writeFileSync(path.join(__dirname, "../src/templates/6_UZ_ChildDI_Entries_Exists_Sheet_en.html"), etaObj.render("6_UZ_ChildDI_Entries_Exists_Sheet.eta", six_en))
// writeFileSync(path.join(__dirname, "../src/templates/6_UZ_ChildDI_Entries_Exists_Sheet_ru.html"), etaObj.render("6_UZ_ChildDI_Entries_Exists_Sheet.eta", six_ru))
// writeFileSync(path.join(__dirname, "../src/templates/6_UZ_ChildDI_Entries_Exists_Sheet_uz.html"), etaObj.render("6_UZ_ChildDI_Entries_Exists_Sheet.eta", six_uz))

// import * as en from "./locales/en.json";

// only once instance of the app
const gotTheLock = app.requestSingleInstanceLock();
let mainWindow: BrowserWindow;

const appSession = {
    language: "en",
    userName: "",
    user_type: "",
    userId: 0,
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
    db.close(() => {
        app.quit();
    });
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
        message: i18n.__(args.message),
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
        appSession.user_type = result[0].user_type;
        appSession.userId = result[0].id;
        appSession.userInstitution = result[0].institution_id;
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
        case "localCoordinator/03_users":
            localCoordinatorUsers();
            break;
        case "localCoordinator/05_edit_user":
            localCoordinatorEditUser(args.id);
            break;
        case "01_login":
            goToLogin(newPage);
            break;
        case "instruments":
            goToInstrument(args.instrument, args.id);
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
    if (appSession.user_type === "localCollector") {
        page = path.join(__dirname, "../src/pages/localCollector/01_dashboard.html");
    } else if (appSession.user_type === "localCoordinator") {
        page = path.join(__dirname, "../src/pages/localCoordinator/01_dashboard.html");
    } else if (appSession.user_type === "cityCollector") {
        page = path.join(__dirname, "../src/pages/cityCollector/01_dashboard.html");
    } else if (appSession.user_type === "evaluator") {
        page = path.join(__dirname, "../src/pages/evaluator/01_dashboard.html");
    } else if (appSession.user_type === "regionalCoordinator") {
        page = path.join(__dirname, "../src/pages/regionalCoordinator/01_dashboard.html");
    } else if (appSession.user_type === "main") {
        page = path.join(__dirname, "../src/pages/main/01_dashboard.html");
    } else {
        dialog.showMessageBox(mainWindow, {
            type: 'error',
            message: i18n.__('User error. Please login again.'),
        })
        return;
    }

    mainWindow.loadURL("file://" + page);
    mainWindow.webContents.once("did-finish-load", () => {
        if (appSession.user_type === "localCollector" || appSession.user_type === "localCoordinator" || appSession.user_type === "cityCollector") {
            database.getUserInstitution(appSession.userInstitution).then((result: Array<DI.Institution>) => {
                if (result.length === 0) {
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
        if (appSession.user_type === "localCoordinator") {
            database.getExisting(db).then((result: { qmr: number | null, dsee: number | null }) => {
                mainWindow.webContents.send('existing', result);
            });
        }
    });

}

const goToInstrument = (instrument: string, id: string) => {

    switch (instrument) {
        case "CPIS":
            goToCPIS(id);
            break;
        case "QMR":
            goToQMR(id);
            break;
        case "DSEE":
            goToDSEE(id);
            break;
        default:
            dialog.showMessageBox(mainWindow, {
                type: 'error',
                message: i18n.__('Instrument error.'),
            });
    }
};


// Local Coordinator =================
// -- institution details
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
ipcMain.on('saveInstitutionDetails', (event, args) => {
    console.log(args);
    database.saveInstitutionDetails(args).then(() => {
        dialog.showMessageBox(mainWindow, {
            type: 'info',
            message: i18n.__('Institution details saved.'),
        }).then(() => {
            goToDashboard();
        });
    });
});
const localCoordinatorUsers = () => {
    const newPage = path.join(__dirname, "../src/pages/localCoordinator/03_users.html");
    mainWindow.loadURL("file://" + newPage);
    mainWindow.webContents.once("did-finish-load", () => {
        database.getInstitutionUsers(appSession.userInstitution, appSession.userId).then((result) => {
            mainWindow.webContents.send("users", result);
        });
    });
}
const localCoordinatorEditUser = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/localCoordinator/05_edit_user.html");
    mainWindow.loadURL("file://" + newPage);
    mainWindow.webContents.once("did-finish-load", () => {
        database.getUser(id).then((result) => {
            mainWindow.webContents.send("user", result[0]);
        });
    });
}
ipcMain.on('addUser', (event, args) => {
    console.log(args);
    // save to DB
    const userObj = { ...args, institution_id: appSession.userInstitution, user_type: "localCollector" };
    database.addUser(userObj).then(() => {
        // send message
        dialog.showMessageBox(mainWindow, {
            type: 'info',
            message: i18n.__('User added.'),
        }).then(() => {
            localCoordinatorUsers();
        });
    });
});
ipcMain.on('updateUser', (event, args) => {
    // save to DB
    database.updateUser(args).then(() => {
        // send message
        dialog.showMessageBox(mainWindow, {
            type: 'info',
            message: i18n.__('User updated.'),
        }).then(() => {
            localCoordinatorUsers();
        });
    });
})
ipcMain.on('deleteUser', (event, args) => {
    // save to DB
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: i18n.__('Are you sure you want to delete this user?'),
        buttons: ['Yes', 'No']
    }).then((result) => {
        if (result.response === 0) {
            database.deleteUser(args.id).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('User deleted.'),
                }).then(() => {
                    localCoordinatorUsers();
                });
            });
        }
    });
});


// Instruments =================
const goToQMR = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/04_qmr_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    if (id) {
        mainWindow.webContents.once("did-finish-load", () => {
            database.instrumentGet(id, 'qmr', db).then((result) => {
                mainWindow.webContents.send("qmr", result);
            });
        });
    }
}
const goToDSEE = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/06_dsee_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    if (id) {
        mainWindow.webContents.once("did-finish-load", () => {
            database.instrumentGet(id, 'dsee', db).then((result) => {
                mainWindow.webContents.send("dsee", result);
            });
        });
    }
}
const goToCPIS = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/01_cpis_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    if (id) {
        mainWindow.webContents.once("did-finish-load", () => {
            database.instrumentGet(id, 'cpis', db).then((result) => {
                mainWindow.webContents.send("cpis", result);
            });
        });
    }
}

// (function test() {
//     database.instrumentSave({
//         instrument_id: 3,
//         table: "qmr",
//         questions: {
//             "question1": {
//                 value: "answer1"
//             },
//             "question2": {
//                 value: "answer2"
//             },
//             "question3": {
//                 value: "answer3"
//             },
//             "question4": {
//                 value: "4"
//             },
//             "question5": {
//                 value: "answer5"
//             },
//         },
//         // extras: {
//         //     cucu: 'bau',
//         // }
//     }, db)
// }());



// Local Collector =================

// City Collector =================

// const goTo = () => {
//     const newPage = path.join(__dirname, "../src/pages/login.html");
//     mainWindow.loadURL("file://" + newPage);
//     mainWindow.webContents.once("did-finish-load", () => {
//         database.getRezidentiDeclaratiCR12().then(() => {

//         });
//     });
// }
