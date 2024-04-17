import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./03_csr_variables";
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

        flatpickr((<HTMLInputElement>document.getElementById('e2')), flatpickrConfig);
        flatpickr((<HTMLInputElement>document.getElementById('e7')), flatpickrConfig);

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
                                if (settlements.indexOf(args.institutionData.settlement) >= 0) {
                                    i4c.value = (regdisatu[args.institutionData.settlement] as { [key: string]: string })[lang];
                                }
                            }
                        }
                    }

                    // TODO -- To be updated -- Type of settlement
                    const i4d = (<HTMLInputElement>document.getElementById('i4d'));
                    i4d.value = args.institutionData.district;
                    // Type of institution
                    const i5 = (<HTMLInputElement>document.getElementById('i5'));
                    i5.value = args.institutionData.type;
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
