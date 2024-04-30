import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./03_csr_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util } from "../../libraries/validation_helpers";
import * as DI from "../../interfaces/database";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { KeyString, regions, districts, settlements, settlement_types } from "../../libraries/administrative";

import * as en from "../../locales/en.json";
import * as uz from "../../locales/uz.json";
import * as ru from "../../locales/ru.json";
const locales: { [key: string]: typeof en | typeof uz | typeof ru} = {
    'en': en,
    'uz': uz,
    'ru': ru
}

const lang = localStorage.getItem("language");
const translations = locales[lang as keyof typeof locales] as Record<string, string>;

let regionCode = '';
let institutionType = '';

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

            const regElements  = ["i4a"];
            const disElements  = ["i4b"];
            const setElements  = ["i4c"];

            const reg_codes = Object.keys(regions);
            for (let x = 0; x < regElements.length; x++) {
                const reg_el = util.htmlElement(regElements[x]);

                reg_el.innerHTML = "";
                const option = document.createElement("option");
                option.value = "-9";
                option.text = translations['t_choose'];
                reg_el.appendChild(option);

                for (let i = 0; i < reg_codes.length; i++) {
                    const option = document.createElement("option");
                    option.value = reg_codes[i];
                    option.text = reg_codes[i] + ": " + (regions[reg_codes[i]] as KeyString)[lang];
                    reg_el.appendChild(option);
                }

                const dis_el = util.htmlElement(disElements[x]);
                const set_el = util.htmlElement(setElements[x]);

                util.listen(regElements[x], "change", function () {

                    const selectedRegion = reg_el.value;
                    if (Number(selectedRegion) > 0) {
                        const dis_codes = regions[selectedRegion].districts;

                        const option = document.createElement("option");
                        option.value = "-9";
                        option.text = translations['t_choose'];
                        dis_el.innerHTML = "";
                        dis_el.appendChild(option);

                        for (let i = 0; i < dis_codes.length; i++) {
                            const option = document.createElement("option");
                            option.value = dis_codes[i];
                            option.text = dis_codes[i] + ": " + (districts[dis_codes[i]] as KeyString)[lang];
                            dis_el.appendChild(option);
                        }
                    }
                })

                util.listen(disElements[x], "change", function () {
                    set_el.innerHTML = "";

                    const selectedDistrict = dis_el.value;
                    if (Number(selectedDistrict) > 0) {
                        const option = document.createElement("option");
                        option.value = "--";
                        option.text = "--";
                        set_el.appendChild(option);

                        const set_codes = districts[selectedDistrict].settlements;

                        if (set_codes.length > 0) {

                            for (let i = 0; i < set_codes.length; i++) {
                                const option = document.createElement("option");
                                option.value = set_codes[i];
                                option.text = set_codes[i] + ": " + (settlements[set_codes[i]] as KeyString)[lang];
                                set_el.appendChild(option);
                            }
                        }
                    }
                })
            }


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
                util.setValue('q2', args.userData.name + " " + args.userData.patronymics + " " + args.userData.surname);
                util.setValue('q3', args.userData.job_title);
                util.setValue('q4', args.userData.profession);
                util.setValue('q5', args.userData.phone);
                util.setValue('q6', args.userData.email);
                regionCode = args.userData.region_code;
            }


            if (args.institutionData) {

                // set default values for institution
                util.setValue('i1', args.institutionData.name);
                util.setValue('i2', args.institutionData.code);
                util.setValue('i3', args.institutionData.address);

                util.setValue('i4a', args.institutionData.region);
                if (args.institutionData.settlement) {
                    util.setValue('i4', args.institutionData.settlement);
                    util.setValue('i4c', args.institutionData.settlement);
                } else {
                    util.setValue('i4', args.institutionData.district);
                    util.setValue('i4c', "--");
                }
                util.setValue('i4b', args.institutionData.district);
                util.setValue('i4d', args.institutionData.settlement_type);
                // Type of institution
                util.setValue('i5', args.institutionData.type);
                institutionType = args.institutionData.type;
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
    obj.extras = {
        region_code: regionCode,
        institution_type: institutionType,
    }
    ipcRenderer.send("saveInstrument", obj);
}
