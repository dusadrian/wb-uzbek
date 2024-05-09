process.env.NODE_ENV = "development";
process.env.DEBBUG_BUTTON = "false";
// Set env mode
// process.env.NODE_ENV = 'production';
// process.env.DEBBUG_BUTTON = 'false';

import { app, BrowserWindow, dialog, ipcMain } from "electron";
import * as path from "path";
import { db, database } from "./database/database";
import * as DI from "./interfaces/database";
import * as fs from 'fs';
import { crypt } from './libraries/crypt';
import build_templates from "./libraries/build_templates";
import constant from "./libraries/constants";

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
    institutionName: "",
    institutionDetails: {},
    userData: {} as DI.User
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

ipcMain.on('showDialogMessage', (_event, args) => {
    dialog.showMessageBox(mainWindow, {
        type: args.type,
        message: i18n.__(args.message),
    })
});

ipcMain.on('login', (_event, args) => {
    // check if user is authenticated
    database.checkUser(args.username, args.password).then((result: Array<DI.User>) => {
        if (result.length === 0) {
            dialog.showMessageBox(mainWindow, {
                type: 'error',
                message: 'Invalid username or password',
            })
            return
        }
        // TODO load institution data ?
        appSession.language = args.language;
        appSession.userData = result[0];
        // go to next page
        goToDashboard();
    });
});

// change window - check if authenticated
ipcMain.on("changeWindow", (_event, args) => {
    const newPage = path.join(__dirname, "../src/pages/" + args.name + ".html");
    switch (args.name) {
        case "index":
            // go to login? -- reset session
            mainWindow.loadURL("file://" + path.join(__dirname, "../src/index.html"));
            break;
        case "dashboard":
            goToDashboard();
            break;
        case "local/02_institution_details":
            institutionDetails();
            break;
        case "local/03_users":
            localUsers();
            break;
        case "local/05_edit_user":
            localEditUser(args.id);
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
        case "tqyp":
            goToTQYPList();
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
    if (appSession.userData.role_code === constant.ROLE_NATIONAL) {
        page = path.join(__dirname, "../src/pages/national/01_dashboard.html");
    } else if (appSession.userData.role_code === constant.ROLE_REGIONAL) {
        page = path.join(__dirname, "../src/pages/regional/01_dashboard.html");
    } else if (appSession.userData.role_code === constant.ROLE_EXT_EVALUATOR) {
        // go directly to instrument list and skip dashboard
        page = path.join(__dirname, "../src/pages/instruments/09_eef.html");
    } else if (
        appSession.userData.role_code === constant.ROLE_LOCAL ||
        appSession.userData.role_code === constant.ROLE_DATA_COLLECTOR ||
        appSession.userData.role_code === constant.ROLE_HR_SPECIALIST ||
        appSession.userData.role_code === constant.ROLE_ADMIN_SPECIALIST
    ) {
        page = path.join(__dirname, "../src/pages/local/01_dashboard.html");
    } else {
        dialog.showMessageBox(mainWindow, {
            type: 'error',
            message: i18n.__('User error. Please login again.'),
        })
        console.log(appSession.userData);

        return;
    }

    mainWindow.loadURL("file://" + page);
    mainWindow.webContents.once("did-finish-load", () => {
        if (
            appSession.userData.role_code === constant.ROLE_LOCAL ||
            appSession.userData.role_code === constant.ROLE_DATA_COLLECTOR ||
            appSession.userData.role_code === constant.ROLE_HR_SPECIALIST ||
            appSession.userData.role_code === constant.ROLE_ADMIN_SPECIALIST

        ) {

            database.getInstitutions().then((instarray) => {
                const services: { [key: string]: DI.Institution } = {};
                for (const element of instarray) {
                    services[element.code] = element;
                }
                database.getINSON().then((insonarray) => {
                    const insons: { [key: string]: DI.INSON } = {};
                    for (const element of insonarray) {
                        insons[element.code] = element;
                    }

                    if (appSession.userData.service_type_code !== "9" && services[appSession.userData.institution_code]) {
                        appSession.institutionName = services[appSession.userData.institution_code].name;
                        appSession.institutionDetails = services[appSession.userData.institution_code];
                        mainWindow.webContents.send("appSession", appSession);
                    } else if (appSession.userData.service_type_code === "9" && insons[appSession.userData.institution_code]) {
                        appSession.institutionName = insons[appSession.userData.institution_code].name;
                        appSession.institutionDetails = insons[appSession.userData.institution_code];
                        mainWindow.webContents.send("appSession", appSession);
                    } else {
                        dialog.showMessageBox(mainWindow, {
                            type: 'error',
                            message: 'Institution error. Please login again.',
                        })
                    }
                });
            });

        } else {
            // there is no institution for this user
            appSession.institutionName = "";
            mainWindow.webContents.send("appSession", appSession);
        }
    });
}

ipcMain.on('getLocalDashStats', (_event, args) => {
    let region = null;
    let typeOfInstitution = null;
    if (args?.region) { region = args.region; }
    if (args?.typeOfInstitution) { typeOfInstitution = args.typeOfInstitution; }

    database.filledInstruments(appSession.userData.role_code, appSession.userData.uuid, region, typeOfInstitution).then((dashStats) => {
        // Dashboard stats for all users
        mainWindow.webContents.send("dashStats", dashStats);
    });
});

// return ID for instruments 4 and 6
ipcMain.on('getInstrumentsId', () => {
    database.getExisting(db).then((result: { qmr: number | null, dsee: number | null }) => {
        mainWindow.webContents.send('existing', result);
    });
})

// Instrument 1
const goToCPISList = () => {
    const newPage = path.join(__dirname, "../src/pages/instruments/01_cpis.html");
    mainWindow.loadURL("file://" + newPage);
};
ipcMain.on('getChildren', () => {
    database.cpisList(db, appSession.userData.uuid, appSession.userData.role_code).then((result) => {
        mainWindow.webContents.send("children", result);
    });
});
ipcMain.on('deleteCPIS', (_event, args) => {
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
    database.cibsList(db, appSession.userData.uuid, appSession.userData.role_code).then((result) => {
        mainWindow.webContents.send("childrenCIBS", result);
    });
});
ipcMain.on('deleteCIBS', (_event, args) => {
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
    database.csrList(db, appSession.userData.uuid, appSession.userData.role_code).then((result) => {
        mainWindow.webContents.send("staff", result);
    });
});
ipcMain.on('deleteStaff', (_event, args) => {
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
    database.yplcsList(db, appSession.userData.uuid, appSession.userData.role_code).then((result) => {
        mainWindow.webContents.send("yplcs", result);
    });
});
ipcMain.on('deleteYPLCS', (_event, args) => {
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

// Instrument 5a
const goToTQYPList = () => {
    const newPage = path.join(__dirname, "../src/pages/instruments/05a_tqyp.html");
    mainWindow.loadURL("file://" + newPage);
};
ipcMain.on('getTQYP', () => {
    database.tqypList(db, appSession.userData.uuid, appSession.userData.role_code).then((result) => {
        mainWindow.webContents.send("tqyp", result);
    });
});
ipcMain.on('deleteTQYP', (_event, args) => {
    // save to DB
    dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: i18n.__('Are you sure you want to delete this item?'),
        buttons: ['Yes', 'No']
    }).then((result) => {
        if (result.response === 0) {
            database.deleteTQYP(args.id, db).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('Item deleted.'),
                }).then(() => {
                    goToTQYPList();
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
    database.ftchList(db, appSession.userData.uuid, appSession.userData.role_code).then((result) => {
        mainWindow.webContents.send("ftch", result);
    });
});
ipcMain.on('deleteFTCH', (_event, args) => {
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
    database.pfqList(db, appSession.userData.uuid, appSession.userData.role_code).then((result) => {
        mainWindow.webContents.send("pfq", result);
    });
});
ipcMain.on('deletePFQ', (_event, args) => {
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
    database.eefList(db, appSession.userData.uuid, appSession.userData.role_code).then((result) => {
        mainWindow.webContents.send("eef", result);
    });
});
ipcMain.on('deleteEEF', (_event, args) => {
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
        case "TQYP":
            goToTQYP(id);
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
    const newPage = path.join(__dirname, "../src/pages/local/02_institution_details.html");
    mainWindow.loadURL("file://" + newPage);
    database.getInstitutionDetails(appSession.userData.institution_code, appSession.userData.service_type_code).then((result) => {
        mainWindow.webContents.once("did-finish-load", () => {
            mainWindow.webContents.send("institutionDetails", result[0]);
        });
    });
}

// Institution update
ipcMain.on('updateInstitutionDetails', (_event, args) => {

    if (!args.auth_code || args.auth_code === '') {
        dialog.showMessageBox(mainWindow, {
            type: 'warning',
            message: i18n.__('Authorization code missing.'),
        });
        return;
    }

    database.checkAuthCode(appSession.userData.institution_code, args.auth_code).then((result) => {

        if (result.length === 0) {
            dialog.showMessageBox(mainWindow, {
                type: 'warning',
                message: i18n.__('Invalid authorization code.'),
            });
            return;
        }

        database.saveInstitutionDetails(args, appSession.userData.service_type_code).then(() => {
            // set auth code as used
            database.updateAuthCode(appSession.userData.institution_code, args.auth_code).then(() => {
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('Institution details saved.'),
                }).then(() => {
                    goToDashboard();
                });
            });
        });
    });
});

// Users
const localUsers = () => {
    const newPage = path.join(__dirname, "../src/pages/local/03_users.html");
    mainWindow.loadURL("file://" + newPage);
    mainWindow.webContents.once("did-finish-load", () => {
        database.getInstitutionUsers(appSession.userData.institution_code).then((result) => {
            mainWindow.webContents.send("users", result);
        });
    });
}
const localEditUser = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/local/05_edit_user.html");
    mainWindow.loadURL("file://" + newPage);
    mainWindow.webContents.once("did-finish-load", () => {
        database.getUser(id).then((result) => {
            mainWindow.webContents.send("user", result[0]);
        });
    });
}
ipcMain.on('addUser', (_event, args) => {
    console.log(args);
    // save to DB
    database.addUser(args).then(() => {
        // send message
        dialog.showMessageBox(mainWindow, {
            type: 'info',
            message: i18n.__('User added.'),
        }).then(() => {
            localUsers();
        });
    });
});
ipcMain.on('updateUser', (_event, args) => {

    if (!args.auth_code || args.auth_code === '') {
        dialog.showMessageBox(mainWindow, {
            type: 'warning',
            message: i18n.__('Authorization code missing.'),
        });
        return;
    }

    database.checkAuthCode(appSession.userData.institution_code, args.auth_code).then((result) => {

        if (result.length === 0) {
            dialog.showMessageBox(mainWindow, {
                type: 'warning',
                message: i18n.__('Invalid authorization code.'),
            });
            return;
        }

        // save to DB
        database.updateUser(args).then(() => {
            // set auth code as used
            database.updateAuthCode(appSession.userData.institution_code, args.auth_code).then(() => {
                // send message
                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    message: i18n.__('User updated.'),
                }).then(() => {
                    localUsers();
                });
            });
        });
    });
})
ipcMain.on('deleteUser', (_event, args) => {
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
                    localUsers();
                });
            });
        }
    });
});


// Instruments =================
// Instrument 1
const goToCPIS = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/01_cpis_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getAllServices().then((allServices) => { // Institutions and INSON
        if (id) {
            mainWindow.webContents.once("did-finish-load", () => {
                database.instrumentGet(id, 'cpis', db).then((questions) => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        id,
                        questions,
                        userData: appSession.userData,
                        services: allServices.services,
                        insons: allServices.insons,
                    });
                });
            });
        } else {
            mainWindow.webContents.once("did-finish-load", () => {
                mainWindow.webContents.send("instrumentDataReady", {
                    userData: appSession.userData,
                    services: allServices.services,
                    insons: allServices.insons,
                });
            });
        }
    })
}
// Instrument 2
const goToCIBS = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/02_cibs_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getAllServices().then((allServices) => { // Institutions and INSON
        if (id) {
            mainWindow.webContents.once("did-finish-load", () => {
                database.instrumentGet(id, 'cibs', db).then((questions) => {
                    mainWindow.webContents.send("instrumentDataReady", {
                        id,
                        questions,
                        userData: appSession.userData,
                        services: allServices.services,
                        insons: allServices.insons,
                    });
                });
            });
        } else {
            mainWindow.webContents.once("did-finish-load", () => {
                mainWindow.webContents.send("instrumentDataReady", {
                    userData: appSession.userData,
                    services: allServices.services,
                    insons: allServices.services,
                });
            });
        }
    });
}
// Instrument 3
const goToCSR = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/03_csr_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getInstitutions().then((instarray) => {
        const services: { [key: string]: DI.Institution } = {};
        for (let i = 0; i < instarray.length; i++) {
            services[instarray[i].code] = instarray[i];
        }
        database.getINSON().then((insonarray) => {
            const insons: { [key: string]: DI.INSON } = {};
            for (let i = 0; i < insonarray.length; i++) {
                insons[insonarray[i].code] = insonarray[i];
            }
            database.getUserData(appSession.userData.id).then((userDataArray) => {
                database.getUserInstitution(appSession.userData.institution_code).then((institutionDataArray) => {
                    if (id) {
                        mainWindow.webContents.once("did-finish-load", () => {
                            database.instrumentGet(id, 'csr', db).then((questions) => {
                                mainWindow.webContents.send("instrumentDataReady", {
                                    id,
                                    questions,
                                    userData: userDataArray[0],
                                    institutionData: institutionDataArray[0],
                                    services: services,
                                    insons: insons,
                                });
                            });
                        });
                    } else {
                        mainWindow.webContents.once("did-finish-load", () => {
                            mainWindow.webContents.send("instrumentDataReady", {
                                userData: userDataArray[0],
                                institutionData: institutionDataArray[0],
                                services: services,
                                insons: insons,
                            });
                        });
                    }
                });
            });
        });
    });
}
// Instrument 4
const goToQMR = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/04_qmr_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getInstitutions().then((instarray) => {
        const services: { [key: string]: DI.Institution } = {};
        for (const element of instarray) {
            services[element.code] = element;
        }
        database.getINSON().then((insonarray) => {
            const insons: { [key: string]: DI.INSON } = {};
            for (const element of insonarray) {
                insons[element.code] = element;
            }
            database.getUserData(appSession.userData.id).then((userDataArray) => {
                database.getUserInstitution(appSession.userData.institution_code).then((institutionDataArray) => {
                    if (id) {
                        mainWindow.webContents.once("did-finish-load", () => {
                            database.instrumentGet(id, 'qmr', db).then((questions) => {
                                mainWindow.webContents.send("instrumentDataReady", {
                                    id,
                                    questions,
                                    userData: userDataArray[0],
                                    institutionData: institutionDataArray[0],
                                    services: services,
                                    insons: insons,
                                });
                            });
                        });
                    } else {
                        mainWindow.webContents.once("did-finish-load", () => {
                            mainWindow.webContents.send("instrumentDataReady", {
                                userData: userDataArray[0],
                                institutionData: institutionDataArray[0],
                                services: services,
                                insons: insons,
                            });
                        });
                    }
                });
            });
        });
    });
}
// Instrument 5
const goToYPLCS = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/05_yplcs_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getInstitutions().then((instarray) => {
        const services: { [key: string]: DI.Institution } = {};
        for (let i = 0; i < instarray.length; i++) {
            services[instarray[i].code] = instarray[i];
        }
        database.getINSON().then((insonarray) => {
            const insons: { [key: string]: DI.INSON } = {};
            for (let i = 0; i < insonarray.length; i++) {
                insons[insonarray[i].code] = insonarray[i];
            }
            database.getUserData(appSession.userData.id).then((userDataArray) => {
                if (id) {
                    mainWindow.webContents.once("did-finish-load", () => {
                        database.instrumentGet(id, 'yplcs', db).then((questions) => {
                            mainWindow.webContents.send("instrumentDataReady", {
                                id,
                                questions,
                                userData: userDataArray[0],
                                services: services,
                                insons: insons,
                            });
                        });
                    });
                } else {
                    mainWindow.webContents.once("did-finish-load", () => {
                        mainWindow.webContents.send("instrumentDataReady", {
                            userData: userDataArray[0],
                            services: services,
                            insons: insons,
                        });
                    });
                }
            });
        });
    });
}
// Instrument 6
const goToDSEE = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/06_dsee_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getInstitutions().then((instarray) => {
        const services: { [key: string]: DI.Institution } = {};
        for (const element of instarray) {
            services[element.code] = element;
        }
        database.getINSON().then((insonarray) => {
            const insons: { [key: string]: DI.INSON } = {};
            for (const element of insonarray) {
                insons[element.code] = element;
            }
            database.getUserData(appSession.userData.id).then((userDataArray) => {
                database.getUserInstitution(appSession.userData.institution_code).then((institutionDataArray) => {
                    if (id) {
                        mainWindow.webContents.once("did-finish-load", () => {
                            database.instrumentGet(id, 'dsee', db).then((questions) => {
                                mainWindow.webContents.send("instrumentDataReady", {
                                    id,
                                    questions,
                                    userData: userDataArray[0],
                                    institutionData: institutionDataArray[0],
                                    services: services,
                                    insons: insons,
                                });
                            });
                        });
                    }
                    else {
                        mainWindow.webContents.once("did-finish-load", () => {
                            mainWindow.webContents.send("instrumentDataReady", {
                                userData: userDataArray[0],
                                institutionData: institutionDataArray[0],
                                services: services,
                                insons: insons,
                            });
                        });
                    }
                });
            });
        });
    });
}
// Instrument 7
const goToFTCH = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/07_ftch_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getInstitutions().then((instarray) => {
        const services: { [key: string]: DI.Institution } = {};
        for (let i = 0; i < instarray.length; i++) {
            services[instarray[i].code] = instarray[i];
        }
        database.getINSON().then((insonarray) => {
            const insons: { [key: string]: DI.INSON } = {};
            for (let i = 0; i < insonarray.length; i++) {
                insons[insonarray[i].code] = insonarray[i];
            }
            database.getUserData(appSession.userData.id).then((userDataArray) => {
                if (id) {
                    mainWindow.webContents.once("did-finish-load", () => {
                        database.instrumentGet(id, 'ftch', db).then((questions) => {
                            mainWindow.webContents.send("instrumentDataReady", {
                                id,
                                questions,
                                userData: userDataArray[0],
                                services: services,
                                insons: insons,
                            });
                        });
                    });
                } else {
                    mainWindow.webContents.once("did-finish-load", () => {
                        mainWindow.webContents.send("instrumentDataReady", {
                            userData: userDataArray[0],
                            services: services,
                            insons: insons,
                        });
                    });
                }
            });
        });
    });
}
// Instrument 8
const goToPFQ = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/08_pfq_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getInstitutions().then((instarray) => {
        const services: { [key: string]: DI.Institution } = {};
        for (let i = 0; i < instarray.length; i++) {
            services[instarray[i].code] = instarray[i];
        }
        database.getINSON().then((insonarray) => {
            const insons: { [key: string]: DI.INSON } = {};
            for (let i = 0; i < insonarray.length; i++) {
                insons[insonarray[i].code] = insonarray[i];
            }
            database.getUserData(appSession.userData.id).then((userDataArray) => {
                if (id) {
                    mainWindow.webContents.once("did-finish-load", () => {
                        database.instrumentGet(id, 'pfq', db).then((questions) => {
                            mainWindow.webContents.send("instrumentDataReady", {
                                id,
                                questions,
                                userData: userDataArray[0],
                                services: services,
                                insons: insons,
                            });
                        });
                    });
                } else {
                    mainWindow.webContents.once("did-finish-load", () => {
                        mainWindow.webContents.send("instrumentDataReady", {
                            userData: userDataArray[0],
                            services: services,
                            insons: insons,
                        });
                    });
                }
            });
        });
    });
}
// Instrument 9
const goToEEF = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/09_eef_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getInstitutions().then((instarray) => {
        const services: { [key: string]: DI.Institution } = {};
        for (let i = 0; i < instarray.length; i++) {
            services[instarray[i].code] = instarray[i];
        }
        database.getINSON().then((insonarray) => {
            const insons: { [key: string]: DI.INSON } = {};
            for (let i = 0; i < insonarray.length; i++) {
                insons[insonarray[i].code] = insonarray[i];
            }
            database.getUserData(appSession.userData.id).then((userDataArray) => {
                if (id) {
                    mainWindow.webContents.once("did-finish-load", () => {
                        database.instrumentGet(id, 'eef', db).then((questions) => {
                            mainWindow.webContents.send("instrumentDataReady", {
                                id,
                                questions,
                                userData: userDataArray[0],
                                services: services,
                                insons: insons,
                            });
                        });
                    });
                } else {
                    mainWindow.webContents.once("did-finish-load", () => {
                        mainWindow.webContents.send("instrumentDataReady", {
                            userData: userDataArray[0],
                            services: services,
                            insons: insons,
                        });
                    });
                }
            });
        });
    });
}


const goToTQYP = (id: string) => {
    const newPage = path.join(__dirname, "../src/pages/instruments/05a_tqyp_" + appSession.language + ".html");
    mainWindow.loadURL("file://" + newPage);
    database.getInstitutions().then((instarray) => {
        const services: { [key: string]: DI.Institution } = {};
        for (let i = 0; i < instarray.length; i++) {
            services[instarray[i].code] = instarray[i];
        }
        database.getINSON().then((insonarray) => {
            const insons: { [key: string]: DI.INSON } = {};
            for (let i = 0; i < insonarray.length; i++) {
                insons[insonarray[i].code] = insonarray[i];
            }
            database.getUserData(appSession.userData.id).then((userDataArray) => {
                if (id) {
                    mainWindow.webContents.once("did-finish-load", () => {
                        database.instrumentGet(id, 'tqyp', db).then((instrument) => {
                            mainWindow.webContents.send("instrumentDataReady", {
                                id,
                                instrument,
                                userData: userDataArray[0],
                                services: services,
                                insons: insons,
                            });
                        });
                    });
                } else {
                    mainWindow.webContents.once("did-finish-load", () => {
                        mainWindow.webContents.send("instrumentDataReady", {
                            userData: userDataArray[0],
                            services: services,
                            insons: insons,
                        });
                    });
                }
            });
        });
    });
}

// save instrument
ipcMain.on('saveInstrument', (_event, args) => {

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
            if (args.table === 'tqyp') {
                goToTQYPList();
                return;
            }
            if (args.table === 'eef') {
                goToEEFList();
            }
        });
    });
});


// eslint-disable-next-line @typescript-eslint/no-unused-vars
ipcMain.on('importData', (_event, _args) => {
    let filesToUpload: string[] = [];
    filesToUpload = dialog.showOpenDialogSync(mainWindow, {
        title: i18n.__('_chooseFile'),
        properties: ['openFile'],
        filters: [
            { name: 'Date', extensions: ['dat'] }
        ]
    });

    if (filesToUpload === void 0 || filesToUpload.length === 0) {
        return;
    }
    crypt.decryptFile(filesToUpload[0]).then(() => {
        const decryptedFile = filesToUpload[0].slice(0, -4) + '.json';

        // only the first file
        fs.readFile(decryptedFile, 'utf8', async (err, data) => {
            if (err) throw err;

            const dateDinFisier = JSON.parse(data);
            console.log(dateDinFisier);

            const instrumentsInFile = Object.keys(dateDinFisier);
            const userInstruments = getLisOfInstrumentsToExport(appSession.userData.role_code, appSession.userData.service_type_code);
            let error = false

            // check if we have errors
            for (const instrument of instrumentsInFile) {
                if (!userInstruments.includes(instrument)) {
                    error = true; // there are instruments not belonging to the user
                }

                if (dateDinFisier[instrument]) { // there is data
                    for (const itemUUID in dateDinFisier[instrument].data) {
                        const item = dateDinFisier[instrument].data[itemUUID];
                        const instrumentID = await database.getInstrumentIdFromUUId(instrument, itemUUID);

                        const dataToImport = {
                            'instrument_id': instrumentID.length > 0 ? Number(instrumentID[0]?.id) : null,
                            'table': instrument,
                            'status': 'completed',
                            'questions': item.questions,
                            'extras': {
                                region_code: item.region_code,
                                institution_type: item.institution_type,
                                uuid: itemUUID
                            }
                        };
                        await database.instrumentSave(dataToImport, db);
                    }
                }
            }

            if (error) {
                dialog.showMessageBox(mainWindow, {
                    type: 'error',
                    title: i18n.__('Error'),
                    message: i18n.__('Some instruments are not allowed to be imported. Please check the file and try again.')
                });
            }
            goToDashboard();
        });

        fs.unlinkSync(decryptedFile);

    });
});


const getLisOfInstrumentsToExport = (roleCode: string, serviceType: string) => {

    if (roleCode == constant.ROLE_LOCAL && constant.CHILD_CARE.includes(serviceType)) {
        return ['cpis', 'csr', 'qmr', 'tqyp', 'dsee'];
    }
    if (roleCode == constant.ROLE_LOCAL && constant.SPECIALIZED.includes(serviceType)) {
        return ['cibs', 'csr', 'qmr', 'tqyp', 'dsee'];
    }

    if (roleCode == constant.ROLE_DATA_COLLECTOR && constant.CHILD_CARE.includes(serviceType)) {
        return ['cpis', 'tqyp'];
    }
    if (roleCode == constant.ROLE_DATA_COLLECTOR && constant.SPECIALIZED.includes(serviceType)) {
        return ['cibs', 'tqyp'];
    }

    if (roleCode == constant.ROLE_LOCAL || (roleCode == constant.ROLE_DATA_COLLECTOR && constant.INSON.includes(serviceType))) {
        return ['cpis', 'tqyp', 'yplcs', 'ftch', 'pfq'];
    }

    if (roleCode == constant.ROLE_HR_SPECIALIST) {
        return ['csr'];
    }

    if (roleCode == constant.ROLE_ADMIN_SPECIALIST) {
        return ['qmr', 'dsee'];
    }

    if (roleCode == constant.ROLE_EXT_EVALUATOR) {
        return ['eef'];
    }

    if (roleCode == constant.ROLE_REGIONAL || roleCode == constant.ROLE_NATIONAL) {
        return ['cpis', 'cibs', 'csr', 'qmr', 'tqyp', 'dsee', 'yplcs', 'ftch', 'pfq', 'eef'];
    }
}

// download instrument data for consolidation

ipcMain.on('exportData', function exportData(_event, args) {

    const folderPath = dialog.showOpenDialogSync(mainWindow, {
        title: i18n.__('main._chooseFolder'),
        properties: ['openDirectory', 'createDirectory', 'promptToCreate']
    });

    if (folderPath !== void 0) {

        // mainWindow.webContents.send("startLoader");
        // TODO -- add user code
        const currenDate = new Date();
        const cale = folderPath[0] + '/' + appSession.userData.username + '_' + currenDate.getFullYear() + '-' + (currenDate.getMonth() + 1) + '-' + currenDate.getDate();
        const instruments = getLisOfInstrumentsToExport(args.userRoleCode, args.userServiceTypeCode);

        asyncForArray(instruments, downloadUserInstruments).then(processedData => {
            fs.writeFile(cale, JSON.stringify(processedData), (err) => {
                if (err) throw err;

                // clear data after use
                processedData = null;

                crypt.encryptFile(cale);

                dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    title: i18n.__('main.success'),
                    message: i18n.__('main._dataDownloaded')
                });
            });
        });
    } else {
        // mainWindow.webContents.send("clearLoader");
        dialog.showMessageBox(mainWindow, {
            type: 'error',
            title: i18n.__('Error'),
            message: i18n.__('main._dataDownloadedError')
        });
    }
});
async function downloadUserInstruments(table: string) {
    return new Promise(resolve => {
        database.getDataForDownload(table, appSession.userData.role_code, appSession.userData.uuid).then((result) => {
            if (result.length == 0) {
                resolve(false);
                return; // needs return otherwise it will try to write the file
            }
            resolve(prepareDataForDownload(result));
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function asyncForArray(arr: string[], callback: (...params: any[]) => void, ...params: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: { [key: string]: any } = {};
    for (const element of arr) {
        data[element] = await callback(element, ...params);
    }
    return data;
}
// prepare data for Download
function prepareDataForDownload(data: DI.DataExportInterface[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: { [key: string]: any } = {};
    response.data = {};
    response.regionCode = appSession.userData.region_code;
    response.institutionCode = appSession.userData.institution_code;

    for (const element of data) {

        if (response['data'][element.uuid] !== void 0) {
            //https://stackoverflow.com/questions/19837916/creating-object-with-dynamic-keys
            response['data'][element.uuid].questions[element.variable] = { 'value': element.value };

        } else {

            response['data'][element.uuid] = {
                'uuid': element.uuid,
                'region_code': element.region_code,
                'institution_type': element.institution_type,
                'user_uuid': element.user_uuid,
                'created_at': element.created_at,
                'updated_at': element.updated_at,
            };

            response['data'][element.uuid].questions = {};
            response['data'][element.uuid].questions[element.variable] = { 'value': element.value };
        }
    }

    return response;
}
