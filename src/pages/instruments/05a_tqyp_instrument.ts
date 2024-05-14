import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./05a_tqyp_variables";
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
import { KeyString, KeyStringNumber, regions, districts, settlements } from "../../libraries/administrative";
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


const general_dates = [
    'ptr4', 'ptr6' // 'data',
];
const regElements = ["str3a", "ptr5b", "ptr8e"];
const disElements = ["str3b", "ptr5c", "ptr8f"];
const setElements = ["str3c", "ptr5d", "ptr8g"];
const typeElements = ["", "ptr5e", "ptr8h"];

let regionCode = '';
let userUUID = '';
let institutionType = '';
let institutionCode = '';

export const instrument5a = {
    init: async () => {

        const flatpickrConfig: {
            enableTime: boolean;
            dateFormat: string;
            minDate: string;
            maxDate: string;
            locale?: typeof Russian | typeof UzbekLatin
        } = {
            enableTime: false,
            dateFormat: "d/m/Y",
            minDate: "01/01/1990",
            maxDate: '30/04/2024'
        }

        if (lang == "uz") {
            flatpickrConfig.locale = UzbekLatin;
        }

        if (lang == "ru") {
            flatpickrConfig.locale = Russian;
        }

        general_dates.forEach((el) => {
            if (el == "ptr6") {
                flatpickrConfig.minDate = "01/01/2022";
            }
            flatpickr(util.htmlElement(el), flatpickrConfig);
        });

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
                if (setElements[x] != "") {
                    set_el.innerHTML = "";
                }
                if (typeElements[x] != "") {
                    util.htmlElement(typeElements[x]).value = "";
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

                    if (Number(selectedDistrict) > 0) {
                        const set_codes = districts[selectedDistrict].settlements;

                        if (set_codes.length > 0) {
                            const option = document.createElement("option");
                            option.value = setElements[x] == "str3c" ? "--" : "-9";
                            option.text = setElements[x] == "str3c" ? "--" : translations['t_choose'];
                            set_el.appendChild(option);

                            for (let i = 0; i < set_codes.length; i++) {
                                const option = document.createElement("option");
                                option.value = set_codes[i];
                                option.text = set_codes[i] + ": " + (settlements[set_codes[i]] as KeyString)[lang];
                                set_el.appendChild(option);
                            }
                        } else {
                            if (typeElements[x] != "") {
                                util.setValue(typeElements[x], "" + districts[selectedDistrict].type);
                            }

                            const option = document.createElement("option");
                            option.value = "--";
                            option.text = "--";
                            set_el.appendChild(option);

                            instrument.questions[setElements[x]].skip = true;
                            util.htmlElement(setElements[x]).disabled = true;
                            util.setValue(setElements[x], "--");
                        }
                    }
                }
            })
        }



        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            console.log(args);
            services = args.services;
            insons = args.insons;
            const institution_code = args.userData.institution_code;
            const inson_user = Object.keys(insons).indexOf(institution_code) >= 0;


            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.instrument && args.instrument.length > 0) {
                console.log(args.instrument);

                instrumentID = parseInt(args.instrument[0].id);

                for (const item of args.instrument) {

                    const index = [...regElements, ...disElements].indexOf(item.variable);
                    // regiunea este intotdeauna inaintea districtului
                    // un event de change pe regiune populeaza districtul, iar un event
                    // de change pe district populeaza settlement-ul
                    // trigger change event
                    instrument.seteazaValoareElement(item.variable, item.value, index >= 0);
                }
            }

            // set default values, IRRESPECTIVE of the instrument

            // two digit day & month
            util.setValue("data", util.customDate());

            if (args.userData) {
                let institution_name = "--";

                // set default values for user
                regionCode = args.userData.region_code;
                userUUID = args.userData.uuid;
                institutionType = args.userData.service_type_code;
                institutionCode = args.userData.institution_code;

                util.setValue("str1", institution_code);
                util.setValue("str3c", "--");
                util.setValue("str4", "-9");
                if (inson_user) {
                    const inson = { ...insons[args.userData.institution_code]} as KeyStringNumber;
                    institution_name = "" + inson['name_'+ lang];
                    util.setValue("str3a", insons[institution_code].region);
                    util.setValue("str3b", insons[institution_code].district);
                } else {
                    const serviciu = { ...services[institution_code] } as KeyStringNumber;
                    institution_name = '' + serviciu['name_'+ lang];
                    util.setValue("str3a", services[institution_code].region);
                    util.setValue("str3b", services[institution_code].district);
                    const type = services[institution_code].type;
                    if (["11", "12", "13", "14", "15", "16", "17"].indexOf(type) >= 0) {
                        util.setValue("str4", type);
                    }
                    if (services[institution_code].settlement) {
                        util.setValue("str3c", services[institution_code].settlement);
                    }
                }

                util.setValue("str2", institution_name);
                util.setValue("omr1", args.userData.name ? args.userData.name : "--");
                util.setValue("omr2", args.userData.patronymics ? args.userData.patronymics : "--");
                util.setValue("omr3", args.userData.surname ? args.userData.surname : "--");
                util.setValue("omr4", args.userData.job_title ? args.userData.job_title : "--");
                util.setValue("omr5", args.userData.profession ? args.userData.profession : "--");
                util.setValue("omr6", args.userData.phone ? args.userData.phone : "--");
                util.setValue("omr7", args.userData.email ? args.userData.email : "--");
            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.ptr1.value == '-9' || _questions.ptr2a.value == '-9' || _questions.ptr2b.value == '-9' || _questions.ptr2c.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: PTR1, PTR2A, PTR2B, PTR2C!" });
        const elPin = document.getElementById("ptr1");
        elPin.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            elPin.focus();
        }, 1000);
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "tqyp";
    obj.extras = {
        region_code: regionCode,
        user_uuid: userUUID,
        institution_type: institutionType,
        institution_code: institutionCode,
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

util.listen("ptr4", "myChange", () => {
    if (instrument.questions.ptr4.value != "-9") {
        const age = util.diffDates(
            util.standardDate(instrument.questions.ptr4.value),
            new Date("2024-05-01")
        )

        util.setValue("ptr4a", age.toString());
    }
});