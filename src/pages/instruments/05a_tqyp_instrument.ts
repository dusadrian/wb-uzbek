import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./05a_tqyp_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util } from "../../libraries/validation_helpers";
// import * as DI from "../../interfaces/database";

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
// const translations = locales[lang as keyof typeof locales] as Record<string, string>;
// let services: {[key: string]: DI.Institution};
// let insons: {[key: string]: DI.INSON};


const general_dates = [
    'data', 'ptr4', 'ptr6'
];
const regElements  = ["ptr5b", "ptr8e"];
const disElements  = ["ptr5c", "ptr8f"];
const setElements  = ["ptr5d", "ptr8g"];
const typeElements = ["ptr5e", "ptr8h"];

let regionCode = '';
let institutionType = '';

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
            option.text = locales[lang]['t_choose'];
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
                set_el.innerHTML = "";
                util.htmlElement(typeElements[x]).value = "";
                const selectedRegion = reg_el.value;
                if (Number(selectedRegion) > 0) {
                    const dis_codes = regions[selectedRegion].districts;

                    const option = document.createElement("option");
                    option.value = "-9";
                    option.text = locales[lang]['t_choose'];
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
                util.htmlElement(typeElements[x]).value = "";
                const selectedDistrict = dis_el.value;
                instrument.questions[setElements[x]].skip = false;
                util.htmlElement(setElements[x]).disabled = false;
                set_el.innerHTML = "";
                if (Number(selectedDistrict) > 0) {
                    const set_codes = districts[selectedDistrict].settlements;

                    if (set_codes.length > 0) {
                        const option = document.createElement("option");
                        option.value = "-9";
                        option.text = locales[lang]['t_choose'];
                        set_el.appendChild(option);

                        for (let i = 0; i < set_codes.length; i++) {
                            const option = document.createElement("option");
                            option.value = set_codes[i];
                            option.text = set_codes[i] + ": " + (settlements[set_codes[i]] as KeyString)[lang];
                            set_el.appendChild(option);
                        }
                    }
                    else {
                        const dis_type = settlement_types[districts[selectedDistrict].type];
                        const type_lang = dis_type[lang as keyof typeof dis_type];
                        util.setValue(typeElements[x], type_lang.toString());
                        instrument.questions[setElements[x]].skip = true;
                        instrument.questions[setElements[x]].value = '-7';
                        util.htmlElement(setElements[x]).disabled = true;
                    }
                }
            })
        }



        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            // console.log(args);

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.instrument && args.instrument.length > 0) {
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

            if (args.institutionData) {

                if (Object.keys(regions).indexOf(args.institutionData.region) >= 0) {
                    util.setValue('reg', "" + (regions[args.institutionData.region] as KeyString)[lang]);
                }

                if (Object.keys(districts).indexOf(args.institutionData.district) >= 0) {
                    util.setValue('dis', "" + (districts[args.institutionData.district] as KeyString)[lang]);
                }

                util.setValue("omr9", args.institutionData.name);
                institutionType = args.institutionData.type;
            }

            // two digit day & month
            util.setValue("data", util.customDate());

            console.log(args.userData);

            if (args.userData) {
                // set default values for user
                util.setValue("omr1", args.userData.name);
                util.setValue("omr2", args.userData.patronymics);
                util.setValue("omr3", args.userData.surname);
                util.setValue("omr4", args.userData.job_title);
                util.setValue("omr5", args.userData.profession);
                util.setValue("omr6", args.userData.phone);
                util.setValue("omr7", args.userData.email);
                regionCode = args.userData.region_code;
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
        institution_type: institutionType,
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
            new Date(2024, 5, 1)
        )

        util.setValue("ptr4a", age.toString());
    }
});