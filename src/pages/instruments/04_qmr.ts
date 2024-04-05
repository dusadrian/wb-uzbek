import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./04_qmr_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";

export const instrument4 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const flatpickrConfig1: { enableTime: boolean; dateFormat: string; locale?: any } = {
            enableTime: false,
            dateFormat: "Y",
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const flatpickrConfig2: { enableTime: boolean; dateFormat: string; locale?: any } = {
            enableTime: false,
            dateFormat: "m/Y",
        }

        if (lang == "uz") {
            flatpickrConfig1.locale = UzbekLatin;
            flatpickrConfig2.locale = UzbekLatin;
        }
        if (lang == "ru") {
            flatpickrConfig1.locale = Russian;
            flatpickrConfig2.locale = Russian;
        }

        flatpickr((<HTMLInputElement>document.getElementById('i10')), flatpickrConfig1);
        flatpickr((<HTMLInputElement>document.getElementById('af13b')), flatpickrConfig2);

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
    obj.table = "qmr";
    ipcRenderer.send("saveInstrument", obj);
}


// Validari custom

//E00 = E01 + E02 + E03
const e00Array = ['e01', 'e02', 'e03'];
const e00ArrayFull = [...e00Array, 'e00'];
e00ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e00ArrayFull)) {
            const e00 = util.getInputDecimalValue('e00');

            if (e00 != parseFloat(util.makeInputSumDecimal(e00Array))) {
                errorHandler.addArrayError(e00Array, '10 = 10.1 + … + 10.5')
            } else {
                errorHandler.removeArrayError(e00Array, '10 = 10.1 + … + 10.5')
            }
        }
    })
});

//E01 = E10 + E20
const e01Array = ['e10', 'e20'];
const e01ArrayFull = [...e01Array, 'e01'];
e01ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e01ArrayFull)) {
            const e01 = util.getInputDecimalValue('e01');

            if (e01 != parseFloat(util.makeInputSumDecimal(e01Array))) {
                errorHandler.addArrayError(e01Array, '10 = 10.1 + … + 10.5')
            } else {
                errorHandler.removeArrayError(e01Array, '10 = 10.1 + … + 10.5')
            }
        }
    })
});

//E10 = E10_1 + … + E10_5
const e10Array = ['e10_1', 'e10_2', 'e10_3', 'e10_4', 'e10_5'];
const e10ArrayFull = [...e10Array, 'e10'];
e10ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e10ArrayFull)) {
            const e10 = util.getInputDecimalValue('e10');

            if (e10 != parseFloat(util.makeInputSumDecimal(e10Array))) {
                errorHandler.addArrayError(e10Array, '10 = 10.1 + … + 10.5')
            } else {
                errorHandler.removeArrayError(e10Array, '10 = 10.1 + … + 10.5')
            }
        }
    })
});

// E20 = E20_1 + … + E20_19
const e20Array = ['e20_1', 'e20_2', 'e20_3', 'e20_4', 'e20_5', 'e20_6', 'e20_7', 'e20_8', 'e20_9', 'e20_10', 'e20_11', 'e20_12', 'e20_13', 'e20_14', 'e20_15', 'e20_16', 'e20_17', 'e20_18', 'e20_19'];
const e20ArrayFull = [...e20Array, 'e20'];
e20ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e20ArrayFull)) {
            const e20 = util.getInputDecimalValue('e20');

            if (e20 != parseFloat(util.makeInputSumDecimal(e20Array))) {
                errorHandler.addArrayError(e20Array, '20 = 20.1 + … + 20.19')
            } else {
                errorHandler.removeArrayError(e20Array, '20 = 20.1 + … + 20.19')
            }
        }
    })
});

//E02 = E2_1 + E2_2
const e02Array = ['e2_1', 'e2_2'];
const e02ArrayFull = [...e02Array, 'e02'];
e02ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e02ArrayFull)) {
            const e02 = util.getInputDecimalValue('e02');

            if (e02 != parseFloat(util.makeInputSumDecimal(e02Array))) {
                errorHandler.addArrayError(e02Array, '02 = 2.1 + 2.2')
            } else {
                errorHandler.removeArrayError(e02Array, '02 = 2.1 + 2.2')
            }
        }
    })
});

//E2_1 = E2_1_1 + ... + E2_1_4
const e21Array = ['e2_1_1','e2_1_2','e2_1_3','e2_1_4'];
const e21ArrayFull = [...e21Array, 'e2_1'];
e21ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(e21ArrayFull)) {
            const e21 = util.getInputDecimalValue('e2_1');

            if (e21 != parseFloat(util.makeInputSumDecimal(e21Array))) {
                errorHandler.addArrayError(e21Array, '2_1 = 2.1.1 + ... + 2.1.4')
            } else {
                errorHandler.removeArrayError(e21Array, '2_1 = 2.1.1 + ... + 2.1.4')
            }
        }
    })
});
