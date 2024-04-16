import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./06_dsee_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";

export const instrument6 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // const flatpickrConfig1: { enableTime: boolean; dateFormat: string; locale?: any } = {
        //     enableTime: false,
        //     dateFormat: "Y",
        // }
        // // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // const flatpickrConfig2: { enableTime: boolean; dateFormat: string; locale?: any } = {
        //     enableTime: false,
        //     dateFormat: "m/Y",
        // }

        // if (lang == "uz") {
        //     flatpickrConfig1.locale = UzbekLatin;
        //     flatpickrConfig2.locale = UzbekLatin;
        // }
        // if (lang == "ru") {
        //     flatpickrConfig1.locale = Russian;
        //     flatpickrConfig2.locale = Russian;
        // }

        // flatpickr((<HTMLInputElement>document.getElementById('i10')), flatpickrConfig1);
        // flatpickr((<HTMLInputElement>document.getElementById('af13b')), flatpickrConfig2);

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.instrument && args.instrument.length > 0) {
                instrumentID = parseInt(args.instrument[0].id);

                for (const item of args.instrument) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                }

            } else {
                const q1 = (<HTMLInputElement>document.getElementById('q1'));
                // two digit day & month
                q1.value = new Date().getDate().toString().padStart(2, '0') + "/" + (new Date().getMonth() + 1).toString().padStart(2, '0') + "/" + new Date().getFullYear().toString();

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
                if (args.institutionData) {
                    // set default values for institution
                    const i1 = (<HTMLInputElement>document.getElementById('i1'));
                    i1.value = args.institutionData.name;
                    const i2 = (<HTMLInputElement>document.getElementById('i2'));
                    i2.value = args.institutionData.code;
                    const i3 = (<HTMLInputElement>document.getElementById('i3'));
                    i3.value = args.institutionData.address;
                    const i4 = (<HTMLInputElement>document.getElementById('i4'));
                    i4.value = args.institutionData.atuCode;
                    const i4a = (<HTMLInputElement>document.getElementById('i4a'));
                    i4a.value = args.institutionData.region;
                    const i4b = (<HTMLInputElement>document.getElementById('i4b'));
                    i4b.value = args.institutionData.district;
                    // TODO -- To be updated -- Settlement
                    const i4c = (<HTMLInputElement>document.getElementById('i4c'));
                    i4c.value = args.institutionData.district;
                    // TODO -- To be updated -- Type of settlement
                    const i4d = (<HTMLInputElement>document.getElementById('i4d'));
                    i4d.value = args.institutionData.district;
                    // Type of institution
                    const i9 = (<HTMLInputElement>document.getElementById('i9'));
                    i9.value = args.institutionData.type;

                }

            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => true;

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "dsee";
    ipcRenderer.send("saveInstrument", obj);
}
