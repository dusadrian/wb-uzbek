import { ipcRenderer } from "electron";
import * as path from "path";
import { I18n } from "i18n";

const i18n = new I18n({
    locales: ['en', 'uz', 'ru'],
    directory: path.join(__dirname, '../../src/locales'),
    defaultLocale: 'en',
});

export const header = {
    init: async (backPage: string, filePath = "../_header.html") => {
        const resp = await fetch(filePath);
        const html = await resp.text();

        const headerDiv = document.getElementById('header') as HTMLDivElement;
        if (headerDiv) {
            headerDiv.insertAdjacentHTML("beforeend", html);
        } else {
            console.error('Header div not found');
        }

        // set language
        const lang = localStorage.getItem('language');
        if (lang) {
            i18n.setLocale(lang);
        }

        // set header_username and institution name
        const appSessionStorage = sessionStorage.getItem('appSession');
        if (appSessionStorage !== null) {
            const appSession = JSON.parse(appSessionStorage);
            (document.getElementById('header_username') as HTMLSpanElement).innerText = (appSession.userData.institution_name ? appSession.userData.institution_name + ' | ' : '') + appSession.userData.username;
        }

        (document.getElementById('logout_text') as HTMLSpanElement).innerText = i18n.__("logout");
        const logout = document.getElementById("logout") as HTMLInputElement;
        logout.addEventListener("click", () => {
            ipcRenderer.send("changeWindow", { name: "index" });
        });
        const back = document.getElementById("back") as HTMLInputElement;
        if (back !== null) {
            if (backPage === 'index') {
                back.style.display = 'none';
            }
            (document.getElementById('back_text') as HTMLSpanElement).innerText = i18n.__("back");
            back.addEventListener("click", () => {
                console.log('backPage', backPage);
                
                ipcRenderer.send("changeWindow", { name: backPage });
            });
        }
    }
}
