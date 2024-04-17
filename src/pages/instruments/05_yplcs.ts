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
import { administrative } from "../../libraries/administrative";

const i9 = (<HTMLInputElement>document.getElementById('i9'));


export const yplcs = {
    init: async () => {

        const lang = localStorage.getItem("language");

        const flatpickrConfig1: {
            enableTime: boolean;
            dateFormat: string;
            maxDate: string;
            locale?: typeof Russian | typeof UzbekLatin
        } = {
            enableTime: false,
            dateFormat: "Y",
            maxDate: "31/03/2024"
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const flatpickrConfig2: {
            enableTime: boolean;
            dateFormat: string;
            maxDate: string;
            locale?: typeof Russian | typeof UzbekLatin
        } = {
            enableTime: false,
            dateFormat: "m/Y",
            maxDate: "31/03/2024"
        }

        if (lang == "uz") {
            flatpickrConfig1.locale = UzbekLatin;
            flatpickrConfig2.locale = UzbekLatin;
        }
        if (lang == "ru") {
            flatpickrConfig1.locale = Russian;
            flatpickrConfig2.locale = Russian;
        }

        const af5_dates = [
            'af5_1_d', 'af5_2_d', 'af5_3_d', 'af5_4_d', 'af5_5_d',
            'af5_6_d', 'af5_7_d', 'af5_8_d', 'af5_9_d', 'af5_10_d'
        ]

        af5_dates.forEach(item => {
            flatpickr((<HTMLInputElement>document.getElementById(item)), flatpickrConfig1);
        });

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
                    const i4b = (<HTMLInputElement>document.getElementById('i4b'));
                    const i4c = (<HTMLInputElement>document.getElementById('i4c'));

                    const regions = Object.keys(administrative);
                    if (regions.indexOf(args.institutionData.region) >= 0) {

                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        i4a.value = (administrative[args.institutionData.region] as any)[lang];
                        const regdist = administrative[i4a.value].districts;
                        const districts = Object.keys(regdist);

                        if (districts.indexOf(args.institutionData.district) >= 0) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            i4b.value = (regdist[args.institutionData.district] as any)[lang];

                            const regdisatu = administrative[i4a.value].districts[i4b.value].settlements;

                            if (regdisatu) {
                                const settlements = Object.keys(regdisatu);
                                // TODO -- To be updated -- Type of settlement
                                if (settlements.indexOf(args.institutionData.settlement) >= 0) {
                                    i4c.value = (regdisatu[args.institutionData.settlement] as { [key: string]: string })[lang];
                                }
                            }
                        }
                    }

                    const i4d = (<HTMLInputElement>document.getElementById('i4d'));
                    i4d.value = args.institutionData.district;

                    // Type of institution
                    i9.value = args.institutionData.type;

                }

            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);

            //TODO: functie de i4d (type of settlement, completata automat)
            // daca NU e comunitate rurala atunci sa se inchida la5 (si sa fie setat cu "-7")
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {
    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "qmr";
    ipcRenderer.send("saveInstrument", obj);
}





// Validari custom


