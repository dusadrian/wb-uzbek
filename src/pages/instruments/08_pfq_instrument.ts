import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./08_pfq_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";
import * as DI from "../../interfaces/database";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { KeyString, regions, districts, settlements } from "../../libraries/administrative";

import * as en from "../../locales/en.json";
import * as uz from "../../locales/uz.json";
import * as ru from "../../locales/ru.json";
const locales: { [key: string]: typeof en | typeof uz | typeof ru } = {
    'en': en,
    'uz': uz,
    'ru': ru
}
const lang = localStorage.getItem("language");
const translations = locales[lang as keyof typeof locales] as Record<string, string>;
let services: { [key: string]: DI.Institution };
let insons: { [key: string]: DI.INSON };

let regionCode = '';
let institutionType = '';
let userUUID = '';

const regElements = ["reg", "pf1a"];
const disElements = ["dis", "pf1b"];
const setElements = ["", "pf1c"];
const typeElements = ["", "pf1d"];

const general_dates = [
    'data', 'ig5'
]

const admission_dates = [
    'fc4_c1c', 'fc4_c2c', 'fc4_c3c', 'fc4_c4c', 'fc4_c5c'
]

const exit_dates = [
    'fc4_c1f', 'fc4_c2f', 'fc4_c3f', 'fc4_c4f', 'fc4_c5f'
]

export const instrument8 = {
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
            maxDate: "30/04/2024"
        }

        if (lang == "uz") {
            flatpickrConfig.locale = UzbekLatin;
        }
        if (lang == "ru") {
            flatpickrConfig.locale = Russian;
        }

        const date_elements = [...general_dates, ...admission_dates, ...exit_dates];

        const flatpickr_elements = date_elements.map((el) => {
            const element = util.htmlElement(el);
            let config;
            if (admission_dates.indexOf(el) >= 0) {
                config = { ...flatpickrConfig, minDate: "01/01/2000" };
                config.maxDate = "30/04/2024";
            } else if (exit_dates.indexOf(el) >= 0) {
                config = { ...flatpickrConfig, minDate: "01/05/2024" };
                config.maxDate = "31/12/2048";
            } else if (el != "data") {
                config = { ...flatpickrConfig, minDate: "01/01/1930" };
            }
            return flatpickr(element, config);
        });

        const today = new Date();
        flatpickr_elements[date_elements.indexOf('data')].setDate(today);
        util.trigger("data", "change");


        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            services = args.services;
            insons = args.insons;
            const institution_code = args.userData.institution_code;
            const inson_user = Object.keys(insons).indexOf(institution_code) >= 0;


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
                    if (typeElements[x] != "") {
                        util.htmlElement(typeElements[x]).value = "";
                    }

                    if (setElements[x] != "") {
                        set_el.innerHTML = "";
                    }

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
                    if (typeElements[x] != "") {
                        util.htmlElement(typeElements[x]).value = "";
                    }
                    const selectedDistrict = dis_el.value;

                    if (setElements[x] != "") {
                        instrument.questions[setElements[x]].skip = false;
                        util.htmlElement(setElements[x]).disabled = false;
                        set_el.innerHTML = "";
                    }

                    if (Number(selectedDistrict) > 0) {
                        const option = document.createElement("option");
                        option.value = "-9";
                        option.text = translations['t_choose'];

                        if (setElements[x] != "") {
                            const set_codes = districts[selectedDistrict].settlements;

                            if (set_codes.length > 0) {
                                set_el.appendChild(option);

                                for (let i = 0; i < set_codes.length; i++) {
                                    const option = document.createElement("option");
                                    option.value = set_codes[i];
                                    option.text = set_codes[i] + ": " + (settlements[set_codes[i]] as KeyString)[lang];
                                    set_el.appendChild(option);
                                }
                            }
                            else {
                                if (typeElements[x] != "") {
                                    util.setValue(typeElements[x], "" + districts[selectedDistrict].type);
                                }
                                instrument.questions[setElements[x]].skip = true;
                                instrument.questions[setElements[x]].value = '-7';
                                util.htmlElement(setElements[x]).disabled = true;
                            }
                        }
                    }
                })
            }

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                }

            } else {
                if (args.userData) {
                    if (inson_user) {
                        util.setValue('reg', "" + insons[institution_code].region);
                        util.setValue('dis', "" + insons[institution_code].district);
                    }
                    else {
                        util.setValue('reg', "" + services[institution_code].region);
                        util.setValue('dis', "" + services[institution_code].district);
                        institutionType = services[institution_code].type;
                    }

                    // set default values for user
                    util.setValue('q2', args.userData.name + " " + args.userData.patronymics + " " + args.userData.surname);
                    util.setValue('q3', args.userData.job_title ? args.userData.job_title : "--");
                    util.setValue('inst', args.userData.institution_name ? args.userData.institution_name : "--");
                    util.setValue('q4', args.userData.profession ? args.userData.profession : "--");
                    util.setValue('q5', args.userData.phone ? args.userData.phone : "--");
                    util.setValue('q6', args.userData.email ? args.userData.email : "--");
                    regionCode = args.userData.region_code;
                    userUUID = args.userData.uuid;
                }
            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.ig1.value == '-9' || _questions.ig2.value == '-9' || _questions.ig3.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: IG1, IG2, IG3!" });
        const el = util.htmlElement("ig1");
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            el.focus();
        }, 1000);
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "pfq";
    obj.extras = {
        region_code: regionCode,
        institution_type: institutionType,
        user_uuid: userUUID
    }
    ipcRenderer.send("saveInstrument", obj);
}


// validari custom

// settlement type
for (let i = 0; i < setElements.length; i++) {
    if (setElements[i] != "" && typeElements[i] != "") {
        util.listen(setElements[i], "change", () => {
            const value = util.htmlElement(setElements[i]).value;
            util.setValue(typeElements[i], settlements[value].type);
        })
    }
}


util.listen("ig5", "myChange", () => {
    if (instrument.questions.ig5.value != "-9") {

        const age = util.diffDates(
            util.standardDate(instrument.questions.ig5.value),
            new Date("2024-05-01"),
            "years" // optional, default
        )

        const ig5_age = util.htmlElement('ig5_age');
        ig5_age.value = age.toString();
        util.trigger("ig5_age", "change");

        return true;
    }
});

const pf4 = ['pf4a', 'pf4b'];
const pf = [...pf4, 'pf5'];

pf.forEach((el) => {
    util.listen(el, "myChange", () => {
        if (util.inputsHaveValue(pf)) {
            const message = "PF5 <= PF4a + PF4b";
            const error = util.getInputNumericValue('pf5') > util.makeSumFromElements(pf4);

            errorHandler.removeError(pf, message);
            if (error) {
                errorHandler.addError(pf, message);
            }

            return error;
        }
    });
});
