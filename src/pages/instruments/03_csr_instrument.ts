import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./03_csr_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";
import * as DI from "../../interfaces/database";
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalAny: any = global;
window.require('jquery');
globalAny.jQuery = window.require('jquery');
globalAny.$ = window.require('jquery');
window.require('jquery-ui-dist/jquery-ui');
// window.require('jquery-ui');
import "jquery-ui/ui/i18n/datepicker-ru";
import "jquery-ui/ui/i18n/datepicker-uz";

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

let regionCode = '';
let userUUID = '';
let institutionType = '';
let institutionCode = '';


const e2e7 = ["e2", "e7"]; // date elements

export const instrument3 = {
    init: async () => {

        $.datepicker.setDefaults( $.datepicker.regional[ lang ] );
        const jQueryDatepickerConfig = {
            changeMonth: true,
            constrainInput: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
            minDate: "01/01/1930",
            maxDate: "30/04/2024",
            yearRange: "c-100:c+10",
            firstDay: 1,
            onSelect: function() {
                util.trigger(this.id, "change");
            }
        };

        e2e7.forEach((el) => {
            $("#" + el).datepicker(jQueryDatepickerConfig);

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

        ipcRenderer.on("instrumentDataReady", (_event, args) => {
            // console.log(args);

            const regElements = ["i4a"];
            const disElements = ["i4b"];
            const setElements = ["i4c"];


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

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                }

            }

            // set default values, IRRESPECTIVE of the instrument

            // two digit day & month
            util.setValue("q1", util.customDate());

            if (args.userData) {
                let institution_name = "";
                util.setValue('i2', "" + institution_code);

                if (inson_user) {
                    const inson = { ...insons[args.userData.institution_code]} as KeyStringNumber;
                    institution_name = "" + inson['name_'+ lang];
                    util.setValue('i3', "--");
                    util.setValue('i4', insons[institution_code].district);
                    util.setValue('i4a', insons[institution_code].region);
                    util.setValue('i4b', insons[institution_code].district);
                    util.setValue('i4c', "--");
                    util.setValue('i4d', "-7");
                    util.setValue('i5', "--");
                }
                else {
                    const serviciu = { ...services[institution_code] } as KeyStringNumber;
                    institution_name = '' + serviciu['name_'+ lang];
                    util.setValue('i3', services[institution_code].address ? services[institution_code].address : "--");
                    util.setValue('i4a', services[institution_code].region);
                    util.setValue('i4b', services[institution_code].district);
                    const settlement = services[institution_code].settlement;
                    util.setValue('i4', settlement ? settlement : services[institution_code].district);
                    util.setValue('i4c', settlement ? settlement : "--");
                    util.setValue('i4d', "" + services[institution_code].settlement_type);
                    util.setValue('i5', services[institution_code].type ? services[institution_code].type : "--");
                }

                util.setValue('i1', institution_name ? institution_name : "--");
                util.setValue('q2', args.userData.name + " " + args.userData.patronymics + " " + args.userData.surname);
                util.setValue('q3', args.userData.job_title ? args.userData.job_title : "--");
                util.setValue('q4', args.userData.profession ? args.userData.profession : "--");
                util.setValue('q5', args.userData.phone ? args.userData.phone : "--");
                util.setValue('q6', args.userData.email ? args.userData.email : "--");
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

    if (_questions.j1.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: J1!" });
        const elPin = document.getElementById("j1");
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
        user_uuid: userUUID,
        institution_type: institutionType,
        institution_code: institutionCode,
    }
    ipcRenderer.send("saveInstrument", obj);
}



const j8 = document.getElementsByName('j8') as NodeListOf<HTMLInputElement>;

j8.forEach(item => {
    item.addEventListener('change', function () {
        if (item.checked) {
            if (item.value == "1" || item.value == "2") {
                util.setValue('euid', uuidv4());
            } else {
                util.setValue('euid', '');
            }
        }
    });
});



e2e7.forEach(item => {
    util.listen(item, "myChange", () => {
        const e2 = util.htmlElement("e2").value;
        const e7 = util.htmlElement("e7").value;

        if (util.inputsHaveValue(e2e7)) {
            instrument.questions['e2'].value = e2;
            instrument.questions['e7'].value = e7;

            const message = translations['must_be_earlier'].replace("X", "e2").replace("Y", "e7");

            errorHandler.removeError(e2e7, message);

            if (util.standardDate(e2) > util.standardDate(e7)) {
                errorHandler.addError(e2e7, message);
                instrument.questions['e2'].value = '-9';
                instrument.questions['e7'].value = '-9';
            }
        }
    })
})