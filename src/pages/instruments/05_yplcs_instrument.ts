import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./05_yplcs_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { administrative } from "../../libraries/administrative";

export const instrument5 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        const flatpickrConfig: {
            enableTime: boolean;
            dateFormat: string;
            maxDate: string;
            locale?: typeof Russian | typeof UzbekLatin
        } = {
            enableTime: false,
            dateFormat: "d/m/Y",
            maxDate: 'today'
        }

        if (lang == "uz") {
            flatpickrConfig.locale = UzbekLatin;
        }

        if (lang == "ru") {
            flatpickrConfig.locale = Russian;
        }

        // flatpickr((<HTMLInputElement>document.getElementById('e2')), flatpickrConfig);
        // flatpickr((<HTMLInputElement>document.getElementById('e7')), flatpickrConfig);

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            console.log(args);


            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.instrument && args.instrument.length > 0) {
                instrumentID = parseInt(args.instrument[0].id);

                for (const item of args.instrument) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                }

            } else {
                const data = (<HTMLInputElement>document.getElementById('data'));
                // two digit day & month
                data.value = new Date().getDate().toString().padStart(2, '0') + "/" + (new Date().getMonth() + 1).toString().padStart(2, '0') + "/" + new Date().getFullYear().toString();

                if (args.userData) {
                    // set default values for user
                    const omr1 = (<HTMLInputElement>document.getElementById('omr1'));
                    omr1.value = args.userData.first_name;
                    const omr2 = (<HTMLInputElement>document.getElementById('omr2'));
                    omr2.value = args.userData.patronymics;
                    const omr3 = (<HTMLInputElement>document.getElementById('omr3'));
                    omr3.value = args.userData.last_name;
                    const omr4 = (<HTMLInputElement>document.getElementById('omr4'));
                    omr4.value = args.userData.position;
                    const omr5 = (<HTMLInputElement>document.getElementById('omr5'));
                    omr5.value = args.userData.profession;
                    const omr6 = (<HTMLInputElement>document.getElementById('omr6'));
                    omr6.value = args.userData.phone;
                    const omr7 = (<HTMLInputElement>document.getElementById('omr7'));
                    omr7.value = args.userData.email;
                }

            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.e1.value == '-9' || _questions.euid.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: E1, EUID!" });
        const elPin = document.getElementById("e1");
        elPin.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            elPin.focus();
        }, 1000);
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "csr";
    ipcRenderer.send("saveInstrument", obj);
}
