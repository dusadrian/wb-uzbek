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
    username = (arg.userData.institution_name ? arg.userData.institution_name + ' | ' : '') + arg.userData.username;
    const us = document.getElementById('header_username');
    if (us) {
        us.innerText = username;
    }
});

window.addEventListener("DOMContentLoaded", () => {

    // get file name
    let file = path.basename(location.href);

    // set file path
    if (location.href.includes('national')) {
        file = 'national/' + file;
    }
    if (location.href.includes('regional')) {
        file = 'regional/' + file;
    }
    if (location.href.includes('evaluator')) {
        file = 'evaluator/' + file;
    }
    if (location.href.includes('local')) {
        file = 'local/' + file;
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
        case 'local/01_dashboard.html':
            localDashboard();
            break;
        case 'local/02_institution_details.html':
            institutionDetails();
            break;
        case 'local/03_users.html':
            localCoordinatorUsers();
            break;
        case 'local/04_add_user.html':
            localCoordinatorAddUser();
            break;
        case 'local/05_edit_user.html':
            localCoordinatorEditUser();
            break;
        case 'evaluator/01_dashboard.html':
            evaluatorDashboard();
            break;
        case 'regional/01_dashboard.html':
            regionalDashboard();
            break;
        case 'national/01_dashboard.html':
            nationalDashboard();
            break;

        case 'instruments/01_cpis.html':
            CPIS();
            break;
        case 'instruments/01_cpis_en.html':
        case 'instruments/01_cpis_uz.html':
        case 'instruments/01_cpis_ru.html':
            instrumentCPIS();
            break;
        case 'instruments/03_csr.html':
            CSR();
            break;
        case 'instruments/03_csr_en.html':
        case 'instruments/03_csr_uz.html':
        case 'instruments/03_csr_ru.html':
            instrumentCSR();
            break;
        case 'instruments/04_qmr_en.html':
        case 'instruments/04_qmr_uz.html':
        case 'instruments/04_qmr_ru.html':
            instrumentQMR();
            break;
        case 'instruments/05_yplcs.html':
            YPLCS();
            break;
        case 'instruments/05_yplcs_en.html':
        case 'instruments/05_yplcs_uz.html':
        case 'instruments/05_yplcs_ru.html':
            instrumentYPLCS();
            break;
        case 'instruments/06_dsee_en.html':
        case 'instruments/06_dsee_uz.html':
        case 'instruments/06_dsee_ru.html':
            instrumentDSEE();
            break;
        case 'instruments/07_ftch.html':
            FTCH();
            break;
        case 'instruments/07_ftch_en.html':
        case 'instruments/07_ftch_uz.html':
        case 'instruments/07_ftch_ru.html':
            instrumentFTCH();
            break;
        case 'instruments/08_pfq.html':
            PFQ();
            break;
        case 'instruments/08_pfq_en.html':
        case 'instruments/08_pfq_uz.html':
        case 'instruments/08_pfq_ru.html':
            instrumentPFQ();
            break;
        case 'instruments/09_eef.html':
            EEF();
            break;
        case 'instruments/09_eef_en.html':
        case 'instruments/09_eef_uz.html':
        case 'instruments/09_eef_ru.html':
            instrumentEEF();
            break;
        case 'instruments/02_cibs.html':
            CIBS();
            break;
        case 'instruments/02_cibs_en.html':
        case 'instruments/02_cibs_uz.html':
        case 'instruments/02_cibs_ru.html':
            instrumentCIBS();
            break;
        case 'instruments/05a_tqyp.html':
            TQYP();
            break;
        case 'instruments/05a_tqyp_en.html':
        case 'instruments/05a_tqyp_uz.html':
        case 'instruments/05a_tqyp_ru.html':
            instrumentTQYP();
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

const localDashboard = () => {

    topMenu('index');

    translatePage();

    const importFile = async () => {
        return await import("./pages/local/01_dashboard");
    };
    importFile().then(result => result.localCoordinator.init().catch(error => {
        console.log(error);
    }));
};
const institutionDetails = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();

    const importFile = async () => {
        return await import("./pages/local/02_institution_details");
    };
    importFile().then(result => result.institutionDetails.init().catch(error => {
        console.log(error);
    }));
};
const localCoordinatorUsers = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();

    const importFile = async () => {
        return await import("./pages/local/03_users");
    };
    importFile().then(result => result.users.init().catch(error => {
        console.log(error);
    }));
};
const localCoordinatorAddUser = () => {

    topMenu('localCoordinator/03_users');

    translatePage();

    const importFile = async () => {
        return await import("./pages/local/04_add_user");
    };
    importFile().then(result => result.addUser.init().catch(error => {
        console.log(error);
    }));
};
const localCoordinatorEditUser = () => {

    topMenu('localCoordinator/03_users'); // back button

    translatePage();

    const importFile = async () => {
        return await import("./pages/local/05_edit_user");
    };
    importFile().then(result => result.editUser.init().catch(error => {
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
const regionalDashboard = () => {

    topMenu('index');

    translatePage();
    const importFile = async () => {
        return await import("./pages/regional/01_dashboard");
    };
    importFile().then(result => result.regionalCoordinator.init().catch(error => {
        console.log(error);
    }));
};
const nationalDashboard = () => {

    topMenu('index');

    translatePage();
    const importFile = async () => {
        return await import("./pages/national/01_dashboard");
    };
    importFile().then(result => result.nationalDashboard.init().catch(error => {
        console.log(error);
    }));
};

// Instruments ==========
const instrumentQMR = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/04_qmr");
    };
    importFile().then(result => result.instrument4.init().catch(error => {
        console.log(error);
    }));
};
const instrumentDSEE = () => {

    topMenu('localCoordinator/01_dashboard');

    const importFile = async () => {
        return await import("./pages/instruments/06_dsee");
    };
    importFile().then(result => result.instrument6.init().catch(error => {
        console.log(error);
    }));
};
// Instrument1 1_UZ_ChildDI_Children_in_the_child_care_system
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

// Instrument 3 3_UZ_ChildDI_Staff_Registry
const CSR = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/03_csr");
    };
    importFile().then(result => result.csr.init().catch(error => {
        console.log(error);
    }));
};
const instrumentCSR = () => {

    topMenu('instruments/03_csr');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/03_csr_instrument");
    };
    importFile().then(result => result.instrument3.init().catch(error => {
        console.log(error);
    }));
};

// Instrument 7 Family-Type Children's Home Questionnaire
const FTCH = () => {

    topMenu('cityCollector/01_dashboard');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/07_ftch");
    };
    importFile().then(result => result.ftch.init().catch(error => {
        console.log(error);
    }));
};
const instrumentFTCH = () => {

    topMenu('instruments/07_ftch');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/07_ftch_instrument");
    };
    importFile().then(result => result.instrument7.init().catch(error => {
        console.log(error);
    }));
};

// Instrument 8 Patronat Family Questionnaire
const PFQ = () => {

    topMenu('cityCollector/01_dashboard');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/08_pfq");
    };
    importFile().then(result => result.pfq.init().catch(error => {
        console.log(error);
    }));
};
const instrumentPFQ = () => {

    topMenu('instruments/08_pfq');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/08_pfq_instrument");
    };
    importFile().then(result => result.instrument8.init().catch(error => {
        console.log(error);
    }));
};

// Instrument 9 External evaluation form of the childcare institutions and boarding schools
const EEF = () => {

    topMenu('evaluator/01_dashboard');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/09_eef");
    };
    importFile().then(result => result.eef.init().catch(error => {
        console.log(error);
    }));
};
const instrumentEEF = () => {

    topMenu('instruments/09_eef');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/09_eef_instrument");
    };
    importFile().then(result => result.instrument9.init().catch(error => {
        console.log(error);
    }));
};

// Instrument 5 Questionnaire about the young person leaving the child care system
const YPLCS = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/05_yplcs");
    };
    importFile().then(result => result.yplcs.init().catch(error => {
        console.log(error);
    }));
};
const instrumentYPLCS = () => {

    topMenu('instruments/05_yplcs');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/05_yplcs_instrument");
    };
    importFile().then(result => result.instrument5.init().catch(error => {
        console.log(error);
    }));
};

// Instrument 2 Questionnaire about the child placed in specialized boarding schools
const CIBS = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/02_cibs");
    };
    importFile().then(result => result.cibs.init().catch(error => {
        console.log(error);
    }));
};
const instrumentCIBS = () => {

    topMenu('instruments/02_cibs');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/02_cibs_instrument");
    };
    importFile().then(result => result.instrument2.init().catch(error => {
        console.log(error);
    }));
};

// Instrument 5a Trace questionnaire about the young person who left the alternative care system
const TQYP = () => {

    topMenu('localCoordinator/01_dashboard');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/05a_tqyp");
    };
    importFile().then(result => result.tqyp.init().catch(error => {
        console.log(error);
    }));
};
const instrumentTQYP = () => {

    topMenu('instruments/05a_tqyp');

    translatePage();
    const importFile = async () => {
        return await import("./pages/instruments/05a_tqyp_instrument");
    };
    importFile().then(result => result.instrument5a.init().catch(error => {
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
