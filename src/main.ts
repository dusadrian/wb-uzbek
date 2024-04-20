process.env.NODE_ENV = "development";
// Set env mode
// process.env.NODE_ENV = 'production';

import { app, BrowserWindow, dialog, ipcMain } from "electron";
import * as path from "path";
import { db, database } from "./database/database";
import * as DI from "../src/interfaces/database";
import build_templates from "./libraries/build_templates";

if (process.env.NODE_ENV === "development") {
    build_templates();
}

// language
import { I18n } from "i18n";
const i18n = new I18n({
    locales: ['en', 'uz', 'ru'],
    directory: path.join(__dirname, '../src/locales'),
    defaultLocale: 'en',
});


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
            contextIsolation: process.env.NODE_ENV !== "development" ? true : false,
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
        case "cpis":
            goToCPISList();
            break;
        case "cibs":
            goToCIBSList();
            break;
        case "csr":
            goToCSRList();
            break;
        case "ftch":
            goToFTCHList();
            break;
        case "pfq":
            goToPFQList();
            break;
        case "eef":
            goToEEFList();
            break;
        case "yplcs":
            goToYPLCSList();
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

        // TODO -- to be updated -- only first time not working on back!!!!
        console.log(appSession.user_type);
        console.log(appSession.user_type === "localCoordinator");
        if (appSession.user_type === "localCoordinator") {
            database.getExisting(db).then((result: { qmr: number | null, dsee: number | null }) => {
                console.log(result);

                mainWindow.webContents.send('existing', result);
            });
        }
    });

}

// Instrument 1
const goToCPISList = () => {
    const newPage = path.join(__dirname, "../src/pages/instruments/01_cpis.html");
    mainWindow.loadURL("file://" + newPage);
    // mainWindow.webContents.once("did-finish-load", () => {
    //     mainWindow.webContents.send("getFromDB-reply", {
    //         foo: "bar"
    //     });
    // });
};
ipcMain.on('getChildren', () => {
    database.cpisList(db).then((result) => {
        mainWindow.webContents.send("children", result);
    });
});
ipcMain.on('deleteCPIS', (event, args) => {
    // save to DB
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: i18n.__('Are you sure you want to delete this item?'),
        buttons: ['Yes', 'No']
    }).then((result) => {
        if (result.response === 0) {
            database.deleteCPIS(args.id, db).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('Item deleted.'),
                }).then(() => {
                    goToCPISList();
                });
            });
        }
    });
});

// Instrument 2
const goToCIBSList = () => {
    const newPage = path.join(__dirname, "../src/pages/instruments/02_cibs.html");
    mainWindow.loadURL("file://" + newPage);
};
ipcMain.on('getChildrenCIBS', () => {
    database.cibsList(db).then((result) => {
        mainWindow.webContents.send("childrenCIBS", result);
    });
});
ipcMain.on('deleteCIBS', (event, args) => {
    // save to DB
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: i18n.__('Are you sure you want to delete this item?'),
        buttons: ['Yes', 'No']
    }).then((result) => {
        if (result.response === 0) {
            database.deleteCIBS(args.id, db).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('Item deleted.'),
                }).then(() => {
                    goToCIBSList();
                });
            });
        }
    });
});

// Instrument 3
const goToCSRList = () => {
    const newPage = path.join(__dirname, "../src/pages/instruments/03_csr.html");
    mainWindow.loadURL("file://" + newPage);
};
ipcMain.on('getStaff', () => {
    database.csrList(db).then((result) => {
        mainWindow.webContents.send("staff", result);
    });
});
ipcMain.on('deleteStaff', (event, args) => {
    // save to DB
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: i18n.__('Are you sure you want to delete this item?'),
        buttons: ['Yes', 'No']
    }).then((result) => {
        if (result.response === 0) {
            database.deleteStaff(args.id, db).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('Item deleted.'),
                }).then(() => {
                    goToCSRList();
                });
            });
        }
    });
});

// Instrument 5
const goToYPLCSList = () => {
    const newPage = path.join(__dirname, "../src/pages/instruments/05_yplcs.html");
    mainWindow.loadURL("file://" + newPage);
};
ipcMain.on('getYPLCS', () => {
    database.yplcsList(db).then((result) => {
        mainWindow.webContents.send("yplcs", result);
    });
});
ipcMain.on('deleteYPLCS', (event, args) => {
    // save to DB
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: i18n.__('Are you sure you want to delete this item?'),
        buttons: ['Yes', 'No']
    }).then((result) => {
        if (result.response === 0) {
            database.deleteYPLCS(args.id, db).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('Item deleted.'),
                }).then(() => {
                    goToYPLCSList();
                });
            });
        }
    });
});

// Instrument 7
const goToFTCHList = () => {
    const newPage = path.join(__dirname, "../src/pages/instruments/07_ftch.html");
    mainWindow.loadURL("file://" + newPage);
};
ipcMain.on('getFTCH', () => {
    database.ftchList(db).then((result) => {
        mainWindow.webContents.send("ftch", result);
    });
});
ipcMain.on('deleteFTCH', (event, args) => {
    // save to DB
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: i18n.__('Are you sure you want to delete this item?'),
        buttons: ['Yes', 'No']
    }).then((result) => {
        if (result.response === 0) {
            database.deleteFTCH(args.id, db).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('Item deleted.'),
                }).then(() => {
                    goToFTCHList();
                });
            });
        }
    });
});

// Instrument 8
const goToPFQList = () => {
    const newPage = path.join(__dirname, "../src/pages/instruments/08_pfq.html");
    mainWindow.loadURL("file://" + newPage);
};
ipcMain.on('getPFQ', () => {
    database.pfqList(db).then((result) => {
        mainWindow.webContents.send("pfq", result);
    });
});
ipcMain.on('deletePFQ', (event, args) => {
    // save to DB
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: i18n.__('Are you sure you want to delete this item?'),
        buttons: ['Yes', 'No']
    }).then((result) => {
        if (result.response === 0) {
            database.deletePFQ(args.id, db).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('Item deleted.'),
                }).then(() => {
                    goToPFQList();
                });
            });
        }
    });
});

// Instrument 9
const goToEEFList = () => {
    const newPage = path.join(__dirname, "../src/pages/instruments/09_eef.html");
    mainWindow.loadURL("file://" + newPage);
};
ipcMain.on('getEEF', () => {
    database.eefList(db).then((result) => {
        mainWindow.webContents.send("eef", result);
    });
});
ipcMain.on('deleteEEF', (event, args) => {
    // save to DB
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: i18n.__('Are you sure you want to delete this item?'),
        buttons: ['Yes', 'No']
    }).then((result) => {
        if (result.response === 0) {
            database.deleteEEF(args.id, db).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('Item deleted.'),
                }).then(() => {
                    goToEEFList();
                });
            });
        }
    });
});

const goToInstrument = (instrument: string, id: string) => {

    switch (instrument) {
        case "CPIS":
            goToCPIS(id);
            break;
        case "CSR":
            goToCSR(id);
            break;
        case "QMR":
            goToQMR(id);
            break;
        case "DSEE":
            goToDSEE(id);
            break;
        case "FTCH":
            goToFTCH(id);
            break;
        case "PFQ":
            goToPFQ(id);
            break;
        case "EEF":
            goToEEF(id);
            break;
        case "YPLCS":
            goToYPLCS(id);
            break;
        case "CIBS":
            goToCIBS(id);
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
    database.getUserData(appSession.userId).then((userDataArray) => {
        database.getUserInstitution(appSession.userInstitution).then((institutionDataArray) => {
            if (id) {
                mainWindow.webContents.once("did-finish-load", () => {
                    database.instrumentGet(id, 'qmr', db).then((instrument) => {
                        mainWindow.webContents.send("instrumentDataReady", {
                            instrument: instrument,
                            userData: userDataArray[0],
                            institutionData: institutionDataArray[0],
                        });
                    });
                });
            } else {
                mainWindow.webContents.once("did-finish-load", () => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        userData: userDataArray[0],
                        institutionData: institutionDataArray[0],
                    });
                });
            }
        });
    });
}
const goToDSEE = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/06_dsee_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getUserData(appSession.userId).then((userDataArray) => {
        database.getUserInstitution(appSession.userInstitution).then((institutionDataArray) => {
            if (id) {
                mainWindow.webContents.once("did-finish-load", () => {
                    database.instrumentGet(id, 'dsee', db).then((result) => {
                        mainWindow.webContents.send("dsee", {
                            instrument: result,
                            userData: userDataArray[0],
                            institutionData: institutionDataArray[0],
                        });
                    });
                });
            }
            else {
                mainWindow.webContents.once("did-finish-load", () => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        userData: userDataArray[0],
                        institutionData: institutionDataArray[0],
                    });
                });
            }
        });
    });
}
const goToCPIS = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/01_cpis_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);

    if (id) {
        mainWindow.webContents.once("did-finish-load", () => {
            database.instrumentGet(id, 'cpis', db).then((result) => {
                mainWindow.webContents.send("instrumentDataReady", {
                    id: id,
                    questions: result,
                });
            });
        });
    } else {
        mainWindow.webContents.once("did-finish-load", () => {
            mainWindow.webContents.send("instrumentDataReady", {});
        });
    }
}
const goToCSR = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/03_csr_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getUserData(appSession.userId).then((userDataArray) => {
        database.getUserInstitution(appSession.userInstitution).then((institutionDataArray) => {
            if (id) {
                mainWindow.webContents.once("did-finish-load", () => {
                    database.instrumentGet(id, 'csr', db).then((instrument) => {
                        mainWindow.webContents.send("instrumentDataReady", {
                            instrument: instrument,
                            userData: userDataArray[0],
                            institutionData: institutionDataArray[0],
                        });
                    });
                });
            } else {
                mainWindow.webContents.once("did-finish-load", () => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        userData: userDataArray[0],
                        institutionData: institutionDataArray[0],
                    });
                });
            }
        });
    });
}
const goToFTCH = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/07_ftch_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getUserData(appSession.userId).then((userDataArray) => {
        if (id) {
            mainWindow.webContents.once("did-finish-load", () => {
                database.instrumentGet(id, 'ftch', db).then((questions) => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        questions: questions,
                        userData: userDataArray[0],
                    });
                });
            });
        } else {
            mainWindow.webContents.once("did-finish-load", () => {
                mainWindow.webContents.send("instrumentDataReady", {
                    userData: userDataArray[0],
                });
            });
        }
    });
}
const goToPFQ = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/08_pfq_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getUserData(appSession.userId).then((userDataArray) => {
        if (id) {
            mainWindow.webContents.once("did-finish-load", () => {
                database.instrumentGet(id, 'pfq', db).then((questions) => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        questions: questions,
                        userData: userDataArray[0],
                    });
                });
            });
        } else {
            mainWindow.webContents.once("did-finish-load", () => {
                mainWindow.webContents.send("instrumentDataReady", {
                    userData: userDataArray[0],
                });
            });
        }
    });
}
const goToEEF = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/09_eef_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getUserData(appSession.userId).then((userDataArray) => {
        if (id) {
            mainWindow.webContents.once("did-finish-load", () => {
                database.instrumentGet(id, 'eef', db).then((questions) => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        questions: questions,
                        userData: userDataArray[0],
                    });
                });
            });
        } else {
            mainWindow.webContents.once("did-finish-load", () => {
                mainWindow.webContents.send("instrumentDataReady", {
                    userData: userDataArray[0],
                });
            });
        }
    });
}
const goToYPLCS = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/05_yplcs_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getUserData(appSession.userId).then((userDataArray) => {
        if (id) {
            mainWindow.webContents.once("did-finish-load", () => {
                database.instrumentGet(id, 'yplcs', db).then((questions) => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        questions: questions,
                        userData: userDataArray[0],
                    });
                });
            });
        } else {
            mainWindow.webContents.once("did-finish-load", () => {
                mainWindow.webContents.send("instrumentDataReady", {
                    userData: userDataArray[0],
                });
            });
        }
    });
}
const goToCIBS = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/02_cibs_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getUserData(appSession.userId).then((userDataArray) => {
        if (id) {
            mainWindow.webContents.once("did-finish-load", () => {
                database.instrumentGet(id, 'cibs', db).then((questions) => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        questions: questions,
                        userData: userDataArray[0],
                    });
                });
            });
        } else {
            mainWindow.webContents.once("did-finish-load", () => {
                mainWindow.webContents.send("instrumentDataReady", {
                    userData: userDataArray[0],
                });
            });
        }
    });
}

// save instrument
ipcMain.on('saveInstrument', (event, args) => {
    // console.log(args);
    database.instrumentSave(args, db).then(() => {
        dialog.showMessageBox(mainWindow, {
            type: 'info',
            message: i18n.__('Instrument saved.'),
        }).then(() => {
            if (args.table === 'cpis') {
                goToCPISList();
                return;
            }
            if (args.table === 'csr') {
                goToCSRList();
                return;
            }
            if (args.table === 'qmr' || args.table === 'dsee') {
                goToDashboard();
                return;
            }
            if (args.table === 'ftch') {
                goToFTCHList();
                return;
            }
            if (args.table === 'pfq') {
                goToPFQList();
                return;
            }
            if (args.table === 'yplcs') {
                goToYPLCSList();
                return;
            }
            if (args.table === 'cibs') {
                goToCIBSList();
                return;
            }
        });
    });
});

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
