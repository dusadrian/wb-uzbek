import { ipcRenderer } from "electron";
import { questions, questionsOrder } from "./08_pfq_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";
import * as DI from "../../interfaces/database";
import constant from "../../libraries/constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalAny: any = global;
window.require('jquery');
globalAny.jQuery = window.require('jquery');
globalAny.$ = window.require('jquery');
window.require('jquery-ui-dist/jquery-ui');
// window.require('jquery-ui');
import "jquery-ui/ui/i18n/datepicker-ru";
import "jquery-ui/ui/i18n/datepicker-uz";

import { KeyString, regions, districts, settlements, mahallas } from "../../libraries/administrative";

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
let userUUID = '';
let institutionType = '';
let institutionCode = '';
let userRole = '';
let filters: DI.FiltersInterface;

const regElements =  ["reg", ""    ];
const disElements =  ["dis", "pf1b"];
const setElements =  ["",    "pf1c"];
const mahElements =  ["",    "pf1m"];
const typeElements = ["",    "pf1d"];

const general_dates = [
    'ig5' // 'data',
]

const admission_dates = [
    'fc4_c1c', 'fc4_c2c', 'fc4_c3c', 'fc4_c4c', 'fc4_c5c', 'fc4_c6c', 'fc4_c7c', 'fc4_c8c', 'fc4_c9c', 'fc4_c10c'
]

const exit_dates = [
    'fc4_c1f', 'fc4_c2f', 'fc4_c3f', 'fc4_c4f', 'fc4_c5f', 'fc4_c6f', 'fc4_c7f', 'fc4_c8f', 'fc4_c9f', 'fc4_c10f'
]

const date_elements = [...general_dates, ...admission_dates, ...exit_dates];

const validate = [
    ...regElements, ...disElements, "pf1c",
    "pf2", "ex2"
];


export const instrument8 = {
    init: async () => {

        $.datepicker.setDefaults($.datepicker.regional[lang]);
        const jQueryDatepickerConfig = {
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
            minDate: "01/01/1930",
            maxDate: "30/04/2024",
            yearRange: "c-100:c+10",
            firstDay: 1,
            onSelect: function () {
                util.trigger(this.id, "change");
            }
        };

        date_elements.forEach((el) => {
            const config = { ...jQueryDatepickerConfig };
            if (admission_dates.indexOf(el) >= 0) {
                config.minDate = "01/01/2000";
            } else if (exit_dates.indexOf(el) >= 0) {
                config.minDate = "01/05/2024";
                config.maxDate = "31/12/2048";
            }

            $("#" + el).datepicker(config);

            util.listen(el, "change", () => {
                errorHandler.removeError(el, translations['invalid_date']);
                try {
                    $.datepicker.parseDate(
                        jQueryDatepickerConfig.dateFormat,
                        util.htmlElement(el).value
                    )
                } catch (error) {
                    instrument.questions[el].value = '-9';
                    errorHandler.addError(el, translations['invalid_date']);
                }
            });
        });

        util.setValue("data", util.customDate());

        filters = JSON.parse(sessionStorage.getItem('filters'));

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            services = args.services;
            insons = args.insons;


            const institution_code = (filters && filters.institution) ? filters.institution : args.userData.institution_code;

            const inson_user = Object.keys(insons).indexOf(institution_code) >= 0;


            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionsOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {

                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);

                    if (validate.indexOf(item.variable) >= 0) {
                        util.trigger(item.variable, "change");
                    }

                    if (["pf2", "ex2"]. indexOf(item.variable) >= 0) {
                        util.trigger(item.variable, "myChange");
                    }
                }
            }

            if (args.userData) {
                // set default values, if new instrument
                if (!args.questions) {
                    if (inson_user) {
                        util.setValue('reg', "" + insons[institution_code].region);
                        util.setValue('dis', "" + insons[institution_code].district);
                    }
                    else {
                        util.setValue('reg', "" + services[institution_code].region);
                        util.setValue('dis', "" + services[institution_code].district);
                    }

                    // set default values for user
                    util.setValue('q2', args.userData.name + " " + args.userData.patronymics + " " + args.userData.surname);
                    util.setValue('q3', args.userData.job_title ? args.userData.job_title : "--");
                    util.setValue('inst', args.userData.institution_name ? args.userData.institution_name : "--");
                    util.setValue('q4', args.userData.profession ? args.userData.profession : "--");
                    util.setValue('q5', args.userData.phone ? args.userData.phone : "--");
                    util.setValue('q6', args.userData.email ? args.userData.email : "--");
                }

                userRole = args.userData.role_code;
                regionCode = args.userData.region_code;
                userUUID = args.userData.uuid;
                institutionType = args.userData.service_type_code;
                institutionCode = args.userData.institution_code;
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
    if (userRole != constant.ROLE_REGIONAL && userRole != constant.ROLE_NATIONAL) {
        obj.extras = {
            region_code: regionCode,
            user_uuid: userUUID,
            institution_type: institutionType,
            institution_code: institutionCode
        }
    }

    ipcRenderer.send("saveInstrument", obj);
}


// validari custom

const reg_codes = Object.keys(regions);
for (let x = 0; x < regElements.length; x++) {
    if (regElements[x] != "") {
        util.resetSelect(regElements[x], "-9", translations['t_choose']);

        for (let i = 0; i < reg_codes.length; i++) {
            util.addOption(
                regElements[x],
                reg_codes[i],
                reg_codes[i] + ": " + (regions[reg_codes[i]] as KeyString)[lang]
            );
        }

        util.listen(regElements[x], "change", function () {
            const selectedRegion = util.htmlElement(regElements[x]).value;

            if (Number(selectedRegion) > 0) {
                const dis_codes = regions[selectedRegion].districts;

                util.resetSelect(disElements[x], "-9", translations['t_choose']);
                for (let i = 0; i < dis_codes.length; i++) {
                    util.addOption(
                        disElements[x],
                        dis_codes[i],
                        dis_codes[i] + ": " + (districts[dis_codes[i]] as KeyString)[lang]
                    );
                }

                if (regElements[x] == "reg") {
                    util.resetSelect("pf1b", "-9", translations['t_choose']);
                    for (let i = 0; i < dis_codes.length; i++) {
                        util.addOption(
                            "pf1b",
                            dis_codes[i],
                            dis_codes[i] + ": " + (districts[dis_codes[i]] as KeyString)[lang]
                        );
                    }
                }
            }

            if (setElements[x] != "") {
                util.resetSelect(setElements[x], "-9", translations['t_choose']);
                instrument.questions[setElements[x]].value = "-7";
            }

            if (mahElements[x] != "") {
                util.resetSelect(mahElements[x], "-9", translations['t_choose']);
                instrument.questions[mahElements[x]].value = "-7";
            }
        })
    }

    util.listen(disElements[x], "change", function () {
        const selectedDistrict = util.htmlElement(disElements[x]).value;

        if (setElements[x] != "") {

            util.resetSelect(setElements[x], "-9", translations['t_choose']);
            instrument.questions[setElements[x]].value = "-9";

            if (!instrument.questions[setElements[x]].readonly) {
                instrument.questions[setElements[x]].skip = false;
                util.htmlElement(setElements[x]).disabled = false;
            }

            if (Number(selectedDistrict) > 0) {

                const set_codes = districts[selectedDistrict].settlements;

                if (set_codes.length > 0) {
                    for (let i = 0; i < set_codes.length; i++) {
                        util.addOption(
                            setElements[x],
                            set_codes[i],
                            set_codes[i] + ": " + (settlements[set_codes[i]] as KeyString)[lang]
                        );
                    }
                } else {
                    if (typeElements[x] != "") {
                        util.setValue(typeElements[x], districts[selectedDistrict].type);
                    }
                    instrument.questions[setElements[x]].skip = true;
                    instrument.questions[setElements[x]].value = '-7';
                    util.htmlElement(setElements[x]).disabled = true;
                }
            }
        }

        if (mahElements[x] != "") {
            util.resetSelect(mahElements[x], "-9", translations['t_choose']);
            instrument.questions[mahElements[x]].value = "-7";
        }
    })

    if (setElements[x] != "") {
        util.listen(setElements[x], "change", () => {
            const selectedSettlement = util.htmlElement(setElements[x]).value;

            if (Number(selectedSettlement) > 0 && typeElements[x] != "") {
                // settlement type
                util.setValue(typeElements[x], settlements[selectedSettlement].type);
            }

            if (mahElements[x] != "") {
                util.resetSelect(mahElements[x], "-9", translations['t_choose']);
                instrument.questions[mahElements[x]].value = "-9";

                if (Number(selectedSettlement) > 0) {
                    const mah_codes = settlements[selectedSettlement].mahallas;

                    if (mah_codes.length > 0) {
                        for (let i = 0; i < mah_codes.length; i++) {
                            util.addOption(
                                mahElements[x],
                                mah_codes[i],
                                mah_codes[i] + ": " + mahallas[mah_codes[i]]
                            );
                        }
                    }
                }
            }
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
        }
    });
});


util.listen("pf2", "myChange", () => {
    const value = Number(util.htmlElement("pf2").value);
    const elements = ["a", "b", "c", "d", "cn", "e", "f", "g"];

    if (value > 0 && value <= 10) {
        util.htmlElement("fc4header").classList.remove("hidden");
        util.htmlElement("fc4text").classList.remove("hidden");
    } else if (!util.htmlElement("fc4header").classList.contains("hidden")) {
        util.htmlElement("fc4header").classList.add("hidden");
        util.htmlElement("fc4text").classList.add("hidden");
    }

    for (let i = 0; i < 10; i++) {
        for (let e = 0; e < elements.length; e++) {
            const classlist = util.htmlElement("c" + (i + 1) + elements[e]).classList;
            if (i < value) {
                classlist.remove("hidden");
            } else if (!classlist.contains("hidden")) {
                classlist.add("hidden");
            }
        }
    }

    const message = translations['Value_up_to_ten'];

    errorHandler.removeError("pf2", message);
    if (value > 10) {
        for (let i = 0; i < 10; i++) {
            for (let e = 0; e < elements.length; e++) {
                const classlist = util.htmlElement("c" + (i + 1) + elements[e]).classList;
                if (!classlist.contains("hidden")) {
                    classlist.add("hidden");
                }
            }
        }
        errorHandler.addError("pf2", message);
        setTimeout(() => {
            util.trigger("pf1c", "change");
        }, 100);
    }
})



util.listen("ex2", "myChange", () => {
    const value = Number(util.htmlElement("ex2").value);
    const elements = ["a", "b", "c", "d", "cn", "e", "f", "g"];

    const ex3 = util.htmlElement("ex3text").classList;
    if (value > 0 && value <= 10) {
        ex3.remove("hidden");
        util.htmlElement("ex3table").classList.remove("hidden");
    } else if (!ex3.contains("hidden")) {
        ex3.add("hidden");
        util.htmlElement("ex3table").classList.add("hidden");
    }

    for (let i = 0; i < 10; i++) {
        for (let e = 0; e < elements.length; e++) {
            const classlist = util.htmlElement("c" + (i + 1) + "row").classList;
            if (i < value) {
                classlist.remove("hidden");
            } else if (!classlist.contains("hidden")) {
                classlist.add("hidden");
            }
        }
    }

    const message = translations['Value_up_to_ten'];

    errorHandler.removeError("ex2", message);
    if (value > 10) {
        for (let i = 0; i < 10; i++) {
            for (let e = 0; e < elements.length; e++) {
                const classlist = util.htmlElement("c" + (i + 1) + "row").classList;
                if (!classlist.contains("hidden")) {
                    classlist.add("hidden");
                }
            }
        }

        errorHandler.addError("ex2", message);
        setTimeout(() => {
            util.trigger("ex1-1", "change");
        }, 100);
    }
})
