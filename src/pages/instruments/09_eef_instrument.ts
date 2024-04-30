import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./09_eef_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util } from "../../libraries/validation_helpers";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
// import { regions, districts, settlements, settlement_types } from "../../libraries/administrative";

let regionCode = '';
let institutionType = '';

export const instrument9 = {
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

        flatpickr(document.getElementById('q1'), flatpickrConfig);

        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            // console.log(args);

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
                    util.setValue('q2', args.userData.name + " " + args.userData.patronymics + " " + args.userData.surname);
                    regionCode = args.userData.region_code;
                    institutionType = args.userData.service_type_code;
                }
            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {
    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "eef";
    obj.extras = {
        region_code: regionCode,
        institution_type: institutionType,
    }
    ipcRenderer.send("saveInstrument", obj);
}




