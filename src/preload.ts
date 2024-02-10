import { ipcRenderer } from "electron";
import * as path from "path";
import { I18n } from "i18n";

const i18n = new I18n({
    locales: ['en', 'uz', 'ru'],
    directory: path.join(__dirname, '../src/locales'),
    defaultLocale: 'en',
});

window.addEventListener("DOMContentLoaded", () => {
    const file = path.basename(location.href);


    // set language
    const lang = localStorage.getItem('language');
    if (lang) {
        i18n.setLocale(lang);
    }


    switch (file) {
        case 'index.html':
            index()
            break;
        case '01_menu_screen.html':
            menuScreen()
            break;
    }
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

};
