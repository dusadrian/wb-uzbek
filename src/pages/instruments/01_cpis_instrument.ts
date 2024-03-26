import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./01_cpis_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";

export const instrument1 = {
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

        flatpickr((<HTMLInputElement>document.getElementById('lk3')), flatpickrConfig);


        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                }
            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.pin.value == '-9' || _questions.lk1a.value == '-9' || _questions.lk1b.value == '-9' || _questions.lk1c.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: PIN, LK1a, LK1b, LK1c!" });
        const elPin = document.getElementById("pin");
        elPin.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            elPin.focus();
        }, 1000);
        return false;
    }

    return true;
};
const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "cpis";
    ipcRenderer.send("saveInstrument", obj);
}
