import { ipcRenderer } from "electron";
import * as path from "path";
import { I18n } from "i18n";

const i18n = new I18n({
    locales: ['en', 'uz', 'ru'],
    directory: path.join(__dirname, '../../src/locales'),
    defaultLocale: 'en',
});

export const enable_user = {
    init: async () => {

        ipcRenderer.on('user', (_event, args) => {

            const authorizationHandler = () => {
                const auth_code = (document.getElementById("auth_code") as HTMLInputElement).value;

                if (auth_code === '') {
                    ipcRenderer.send('showDialogMessage', {
                        type: 'warning',
                        message: i18n.__("Please fill all fields")
                    });
                    (document.getElementById("auth_code") as HTMLInputElement).focus();
                    return;
                }

                ipcRenderer.send('enableUser', {
                    uuid: args.uuid,
                    institution_code: args.institution_code,
                    auth_code: auth_code
                });
            }

            document.getElementById("enableUser").addEventListener("click", () => {
                authorizationHandler();
            });

            document.addEventListener("keydown", (event) => {
                if (event.code === "Enter") {
                    authorizationHandler();
                }
            });
            document.addEventListener("keyup", (event) => {
                if (event.code === "Enter") {
                    authorizationHandler();
                }
            });
        });
    }
}