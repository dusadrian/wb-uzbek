import { ipcRenderer } from "electron";
import * as path from "path";
import { I18n } from "i18n";

const i18n = new I18n({
    locales: ['en', 'uz', 'ru'],
    directory: path.join(__dirname, '../src/locales'),
    defaultLocale: 'en',
});


window.addEventListener("DOMContentLoaded", () => {

    // get file name
    let file = path.basename(location.href);

    // set file path
    if (location.href.includes('collector')) {
        file = 'collector/' + file;
    }
    if (location.href.includes('coordinator')) {
        file = 'coordinator/' + file;
    }
    if (location.href.includes('evaluator')) {
        file = 'evaluator/' + file;
    }
    if (location.href.includes('main')) {
        file = 'main/' + file;
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
        case '01_menu_screen.html':
            menuScreen();
            break;
        case 'collector/01_dashboard.html':
            collectorDashboard();
            break;
        case 'coordinator/01_dashboard.html':
            coordinatorDashboard();
            break;
        case 'evaluator/01_dashboard.html':
            evaluatorDashboard();
            break;
    }

    console.log('am trecut pe aici');
});

const index = () => {

    (document.getElementById("username") as HTMLInputElement).placeholder = i18n.__("username");
    (document.getElementById("password") as HTMLInputElement).placeholder = i18n.__("password");
    (document.getElementById("login") as HTMLInputElement).innerText = i18n.__("login");
    (document.getElementById("login_message") as HTMLInputElement).innerText = i18n.__("login_message");

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


    document.getElementById("login").addEventListener("click", () => {

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

    });
}

const topMenu = (backPage: string) => {
    document.getElementById('logout_text').innerText = i18n.__("logout");
    const logout = document.getElementById("logout") as HTMLInputElement;
    logout.addEventListener("click", () => {
        ipcRenderer.send("changeWindow", { name: "index" });
    });
    const back = document.getElementById("back") as HTMLInputElement;
    if (back) {
        document.getElementById('back_text').innerText = i18n.__("back");
        back.addEventListener("click", () => {
            ipcRenderer.send("changeWindow", { name: backPage });
        });
    }
}

const menuScreen = () => {

    topMenu('index');

    document.getElementById('menuScreen_text').innerText = i18n.__('menuScreen');
    document.getElementById('dashboard_text').innerText = i18n.__('dashboard');
    document.getElementById('dataEntry_text').innerText = i18n.__('dataEntry');
    document.getElementById('importData_text').innerText = i18n.__('importData');
    document.getElementById('exportData_text').innerText = i18n.__('exportData');

    document.getElementById('dashboard').addEventListener('click', () => {
        ipcRenderer.send('changeWindow', { name: 'dashboard' });
    });

};

const collectorDashboard = () => {

    topMenu('01_menu_screen');

    translatePage();
    
    const importFile = async () => {
        return await import("./pages/collector/01_dashboard");
    };
    importFile().then(result => result.collector.init().catch(error => {
        console.log(error);
    }));
};

const coordinatorDashboard = () => {

    topMenu('01_menu_screen');

    translatePage();
    const importFile = async () => {
        return await import("./pages/coordinator/01_dashboard");
    };
    importFile().then(result => result.coordinator.init().catch(error => {
        console.log(error);
    }));
};
const evaluatorDashboard = () => {

    topMenu('01_menu_screen');

    translatePage();
    const importFile = async () => {
        return await import("./pages/evaluator/01_dashboard");
    };
    importFile().then(result => result.evaluator.init().catch(error => {
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
}
