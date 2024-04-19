import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./05_yplcs_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util } from "../../libraries/validation_helpers";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { administrative, regions, districts, settlements, settlement_types } from "../../libraries/administrative";

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

        flatpickr(util.htmlElement('pi3'), flatpickrConfig);
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
                // two digit day & month
                const today = new Date().getDate().toString().padStart(2, '0') + "/" +
                            (new Date().getMonth() + 1).toString().padStart(2, '0') + "/" +
                            new Date().getFullYear().toString()
                util.setValue("data", today);

                if (args.userData) {
                    // set default values for user
                    util.setValue("omr1", args.userData.first_name);
                    util.setValue("omr2", args.userData.patronymics);
                    util.setValue("omr3", args.userData.last_name);
                    util.setValue("omr4", args.userData.position);
                    util.setValue("omr5", args.userData.profession);
                    util.setValue("omr6", args.userData.phone);
                    util.setValue("omr7", args.userData.email);
                }

            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.pi1.value == '-9' || _questions.pi1a.value == '-9' || _questions.pi1b.value == '-9' || _questions.pi1c.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: PI1, PI1A, PI1B, PI1C!" });
        const elPin = document.getElementById("pi1");
        elPin.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            elPin.focus();
        }, 1000);
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "yplcs";
    ipcRenderer.send("saveInstrument", obj);
}
