import { ipcRenderer } from "electron";
import * as path from "path";
import { I18n } from "i18n";
import { header } from "./pages/_header";

const i18n = new I18n({
    locales: ['en', 'uz', 'ru'],
    directory: path.join(__dirname, '../src/locales'),
    defaultLocale: 'en',
});

let username = '';
ipcRenderer.on('appSession', (event, arg) => {
    sessionStorage.setItem('appSession', JSON.stringify(arg));
    username = (arg.institutionName ? arg.institutionName + ' | ' : '') + arg.userName;
    const us = document.getElementById('header_username');
    if (us) {
        us.innerText = username;
    }
});

window.addEventListener("DOMContentLoaded", () => {

    // get file name
    let file = path.basename(location.href);

    // set file path
    if (location.href.includes('localCollector')) {
        file = 'localCollector/' + file;
    }
    if (location.href.includes('localCoordinator')) {
        file = 'localCoordinator/' + file;
    }
    if (location.href.includes('cityCollector')) {
        file = 'cityCollector/' + file;
    }
    if (location.href.includes('regionalCoordinator')) {
        file = 'regionalCoordinator/' + file;
    }
    if (location.href.includes('evaluator')) {
        file = 'evaluator/' + file;
    }
    if (location.href.includes('main')) {
        file = 'main/' + file;
    }
    if (location.href.includes('instruments')) {
        file = 'instruments/' + file;
    }

    // set language
    const lang = localStorage.getItem('language');
    if (lang) {
        i18n.setLocale(lang);
    }


    switch (file) {
        case 'index.html':
            index();
            break;
        case 'localCollector/01_dashboard.html':
            localCollectorDashboard();
            break;
        case 'localCoordinator/01_dashboard.html':
            localCoordinatorDashboard();
            break;
        case 'localCoordinator/02_institution_details.html':
            institutionDetails();
            break;
        case 'localCoordinator/03_users.html':
            localCoordinatorUsers();
            break;
        case 'localCoordinator/04_add_user.html':
            localCoordinatorAddUser();
            break;
        case 'localCoordinator/05_edit_user.html':
            localCoordinatorEditUser();
            break;
        case 'cityCollector/01_dashboard.html':
            cityCollectorDashboard();
            break;
        case 'evaluator/01_dashboard.html':
            evaluatorDashboard();
            break;
        case 'regionalCoordinator/01_dashboard.html':
            regionalCoordinatorDashboard();
            break;
        case 'main/01_dashboard.html':
            mainDashboard();
            break;
        case 'instruments/04_qmr_en.html':
        case 'instruments/04_qmr_uz.html':
        case 'instruments/04_qmr_ru.html':
            instrumentQMR();
            break;
        case 'instruments/01_cpis.html':
            CPIS();
            break;
        case 'instruments/01_cpis_en.html':
        case 'instruments/01_cpis_uz.html':
        case 'instruments/01_cpis_ru.html':
            instrumentCPIS();
            break;
        case 'instruments/06_dsee_en.html':
        case 'instruments/06_dsee_uz.html':
        case 'instruments/06_dsee_ru.html':
            instrumentDSEE();
            break;
    }

});

const index = () => {

    (document.getElementById("username") as HTMLInputElement).placeholder = i18n.__("username");
    (document.getElementById("password") as HTMLInputElement).placeholder = i18n.__("password");
    (document.getElementById("login") as HTMLInputElement).innerText = i18n.__("login");
    (document.getElementById("login_message") as HTMLInputElement).innerText = i18n.__("login_message");

    sessionStorage.removeItem('appSession');
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
    }

    document.getElementById("en").addEventListener("click", () => {
        i18n.setLocale('en');
        localStorage.setItem('language', 'en');
        window.location.reload();
    });
    document.getElementById("uz").addEventListener("click", () => {
        i18n.setLocale('uz');
        localStorage.setItem('language', 'uz');
        console.log('uz');
        window.location.reload();
    });
    document.getElementById("ru").addEventListener("click", () => {
        i18n.setLocale('ru');
        localStorage.setItem('language', 'ru');
        console.log('ru');
        window.location.reload();
    });

    const loginHandler = () => {
        const username = (document.getElementById("username") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        if (username === '' || password === '') {
            ipcRenderer.send('showDialogMessage', {
                type: 'warning',
                message: i18n.__("empty_username_password")
            });
            return;
        }

        ipcRenderer.send('login', {
            username: username,
            password: password,
            language: localStorage.getItem('language')
        });
    }

    document.getElementById("login").addEventListener("click", () => {
        loginHandler();
    });

    document.addEventListener("keydown", (event) => {
        if (event.code === "Enter") {
            loginHandler();
        }
    });
    document.addEventListener("keyup", (event) => {
        if (event.code === "Enter") {
            loginHandler();
        }
    });

}

const topMenu = (backPage: string) => {
    header.init(backPage).then(() => {
        if (username !== '') document.getElementById('header_username').innerText = username;
    }).catch((error) => {
        console.log(error);
    });
}

const localCollectorDashboard = () => {

    topMenu('index');

    translatePage();

    const importFile = async () => {
        return await import("./pages/localCollector/01_dashboard");
    };
    importFile().then(result => result.localCollector.init().catch(error => {
        console.log(error);
    }));
};
const localCoordinatorDashboard = () => {

    topMenu('index');

    translatePage();

    const importFile = async () => {
        return await import("./pages/localCoordinator/01_dashboard");
    };
    importFile().then(result => result.localCoordinator.init().catch(error => {
        console.log(error);
    }));
};
const institutionDetails = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();

    const importFile = async () => {
        return await import("./pages/localCoordinator/02_institution_details");
    };
    importFile().then(result => result.institutionDetails.init().catch(error => {
        console.log(error);
    }));
};
const localCoordinatorUsers = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();

    const importFile = async () => {
        return await import("./pages/localCoordinator/03_users");
    };
    importFile().then(result => result.users.init().catch(error => {
        console.log(error);
    }));
};
const localCoordinatorAddUser = () => {

    topMenu('localCoordinator/03_users');

    translatePage();

    const importFile = async () => {
        return await import("./pages/localCoordinator/04_add_user");
    };
    importFile().then(result => result.addUser.init().catch(error => {
        console.log(error);
    }));
};
const localCoordinatorEditUser = () => {

    topMenu('localCoordinator/03_users'); // back button

    translatePage();

    const importFile = async () => {
        return await import("./pages/localCoordinator/05_edit_user");
    };
    importFile().then(result => result.editUser.init().catch(error => {
        console.log(error);
    }));
};

const cityCollectorDashboard = () => {

    topMenu('index');

    translatePage();

    const importFile = async () => {
        return await import("./pages/cityCollector/01_dashboard");
    };
    importFile().then(result => result.cityCollector.init().catch(error => {
        console.log(error);
    }));
};
const evaluatorDashboard = () => {

    topMenu('index');

    translatePage();
    const importFile = async () => {
        return await import("./pages/evaluator/01_dashboard");
    };
    importFile().then(result => result.evaluator.init().catch(error => {
        console.log(error);
    }));
};
const regionalCoordinatorDashboard = () => {

    topMenu('index');

    translatePage();
    const importFile = async () => {
        return await import("./pages/regionalCoordinator/01_dashboard");
    };
    importFile().then(result => result.regionalCoordinator.init().catch(error => {
        console.log(error);
    }));
};
const mainDashboard = () => {

    topMenu('index');

    translatePage();
    const importFile = async () => {
        return await import("./pages/main/01_dashboard");
    };
    importFile().then(result => result.mainDashboard.init().catch(error => {
        console.log(error);
    }));
};

// Instruments ==========
const instrumentQMR = () => {

    topMenu('localCoordinator/01_dashboard');

    const importFile = async () => {
        return await import("./pages/instruments/04_qmr");
    };
    importFile().then(result => result.instrument.init().catch(error => {
        console.log(error);
    }));
};
const instrumentDSEE = () => {

    topMenu('localCoordinator/01_dashboard');

    const importFile = async () => {
        return await import("./pages/instruments/06_dsee");
    };
    importFile().then(result => result.instrument.init().catch(error => {
        console.log(error);
    }));
};
const CPIS = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/01_cpis");
    };
    importFile().then(result => result.cpis.init().catch(error => {
        console.log(error);
    }));
};
const instrumentCPIS = () => {

    topMenu('instruments/01_cpis');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/01_cpis_instrument");
    };
    importFile().then(result => result.instrument1.init().catch(error => {
        console.log(error);
    }));
};



const translatePage = () => {
    const el = document.querySelectorAll("span[class^='t_']");
    if (el.length > 0) {
        el.forEach((element: HTMLElement) => {
            element.innerText = i18n.__(element.className);
        });
    }
    const option = document.querySelectorAll("option[class^='t_']");
    if (option.length > 0) {
        option.forEach((element: HTMLOptionElement) => {
            element.innerText = i18n.__(element.className);
            element.value = i18n.__(element.className + '_value');
        });
    }
    const optionGroup = document.querySelectorAll("optgroup[class^='t_']");
    if (optionGroup.length > 0) {
        optionGroup.forEach((element: HTMLOptionElement) => {
            element.label = i18n.__(element.className);
        });
    }
}
