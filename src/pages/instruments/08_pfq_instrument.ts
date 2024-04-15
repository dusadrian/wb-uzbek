import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./08_pfq_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { administrative, Administrative } from "../../libraries/administrative";

export const instrument8 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const flatpickrConfig: { enableTime: boolean; dateFormat: string; locale?: any } = {
            enableTime: false,
            dateFormat: "d/m/Y",
        }

        if (lang == "uz") {
            flatpickrConfig.locale = UzbekLatin;
        }
        if (lang == "ru") {
            flatpickrConfig.locale = Russian;
        }

        // flatpickr((<HTMLInputElement>document.getElementById('lk3')), flatpickrConfig);

        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            console.log(args);

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.questions[0].id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                }

            } else {
                if (args.userData) {
                    // set default values for user
                    const q2 = (<HTMLInputElement>document.getElementById('q2'));
                    q2.value = args.userData.first_name + " " + args.userData.patronymics + " " + args.userData.last_name;
                    const q3 = (<HTMLInputElement>document.getElementById('q3'));
                    q3.value = args.userData.position;
                    const q4 = (<HTMLInputElement>document.getElementById('q4'));
                    q4.value = args.userData.profession;
                    const q5 = (<HTMLInputElement>document.getElementById('q5'));
                    q5.value = args.userData.phone;
                    const q6 = (<HTMLInputElement>document.getElementById('q6'));
                    q6.value = args.userData.email;
                }
            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.ig1.value == '-9' || _questions.ig2.value == '-9' || _questions.ig3.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: IG1, IG2, IG3!" });
        const el = document.getElementById("ig1");
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            el.focus();
        }, 1000);
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "pfq";
    ipcRenderer.send("saveInstrument", obj);
}




