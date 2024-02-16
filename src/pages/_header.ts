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
        document.getElementById('header').insertAdjacentHTML("beforeend", html);

        console.log('header init');
        

        // set username and institution name
        const appSession = JSON.parse(sessionStorage.getItem('appSession'));
        if (appSession !== null) {
            document.getElementById('username').innerText = (appSession.institutionName ? appSession.institutionName + ' | ' : '') + appSession.userName;
        }

        document.getElementById('logout_text').innerText = i18n.__("logout");
        const logout = document.getElementById("logout") as HTMLInputElement;
        logout.addEventListener("click", () => {
            ipcRenderer.send("changeWindow", { name: "index" });
        });
        const back = document.getElementById("back") as HTMLInputElement;
        if (back !== null) {
            if (backPage === 'index') {
                back.style.display = 'none';
            }
            document.getElementById('back_text').innerText = i18n.__("back");
            back.addEventListener("click", () => {
                ipcRenderer.send("changeWindow", { name: backPage });
            });
        }
    }
}
