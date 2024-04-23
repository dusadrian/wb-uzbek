import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./03_csr_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util } from "../../libraries/validation_helpers";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { KeyString, regions, districts, settlements, settlement_types } from "../../libraries/administrative";

export const instrument3 = {
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

        flatpickr(util.htmlElement('e2'), flatpickrConfig);
        flatpickr(util.htmlElement('e7'), flatpickrConfig);

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

            }

            // set default values, IRRESPECTIVE of the instrument

            // two digit day & month
            util.setValue("q1", util.customDate());

            if (args.userData) {
                // set default values for user
                util.setValue('q2', args.userData.first_name + " " + args.userData.patronymics + " " + args.userData.last_name);
                util.setValue('q3', args.userData.position);
                util.setValue('q4', args.userData.profession);
                util.setValue('q5', args.userData.phone);
                util.setValue('q6', args.userData.email);
            }


            if (args.institutionData) {

                // set default values for institution
                util.setValue('i1', args.institutionData.name);
                util.setValue('i2', args.institutionData.code);
                util.setValue('i3', args.institutionData.address);

                if (Object.keys(regions).indexOf(args.institutionData.region) >= 0) {
                    util.setValue('i4a', "" + (regions[args.institutionData.region] as KeyString)[lang]);
                }

                if (Object.keys(districts).indexOf(args.institutionData.district) >= 0) {
                    util.setValue('i4', args.institutionData.district);
                    util.setValue('i4b', "" + (districts[args.institutionData.district] as KeyString)[lang]);
                }

                if (Object.keys(settlements).indexOf(args.institutionData.settlement) >= 0) {
                    util.setValue('i4', args.institutionData.settlement);
                    const settlement = settlements[args.institutionData.settlement];
                    util.setValue('i4c', "" + (settlement as KeyString)[lang]);
                    util.setValue('i4d', "" + (settlement_types[settlement.type] as KeyString)[lang]);
                }

                // Type of institution
                util.setValue('i5', args.institutionData.type);
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
