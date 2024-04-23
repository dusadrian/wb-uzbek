import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./07_ftch_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";
import { util, errorHandler } from "../../libraries/validation_helpers";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
// import { regions, districts, settlements, settlement_types } from "../../libraries/administrative";


const general_dates = [
    'ifp2', 'ifm4', 'ift4' // 'data' completat automat
]

const admission_dates = [
    'fc4_c1c', 'fc4_c2c', 'fc4_c3c', 'fc4_c4c', 'fc4_c5c'
]


export const instrument7 = {
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

        [...general_dates, ...admission_dates].forEach(el => {
            let config;
            if (el == "ifp2") {
                config = { ...flatpickrConfig, minDate: "01/01/1950" };
            } else if (admission_dates.indexOf(el) >= 0) {
                config = { ...flatpickrConfig, minDate: "01/01/1990" };
                config.maxDate = "30/04/2024";
            } else { // if (el != "data") completata automat
                config = { ...flatpickrConfig, minDate: "01/01/1930" };
            }
            flatpickr(util.htmlElement(el), config);
        });



        ipcRenderer.on("instrumentDataReady", (_event, args) => {
console.log(args);

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.questions[0].id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                }
            }

            // set default values, IRRESPECTIVE of the instrument

            // two digit day & month
            util.setValue("data", util.customDate());
            if (args.userData) {
                util.setValue('q2', args.userData.first_name + " " + args.userData.patronymics + " " + args.userData.last_name);
                util.setValue('q3', args.userData.position);
                util.setValue('q4', args.userData.profession);
                util.setValue('q5', args.userData.phone);
                util.setValue('q6', args.userData.email);
            }

            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}


const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.ifm1.value == '-9' || _questions.ifm2.value == '-9' || _questions.ifm3.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: IFM1, IFM2, IFM3!" });
        const el = util.htmlElement("ifm1");
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            el.focus();
        }, 1000);
        return false;
    }

    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "ftch";
    ipcRenderer.send("saveInstrument", obj);
}



// validari custom

util.listen("ifp2", "myChange", () => {
    if (instrument.questions.ifp2.value != "-9") {

        const years = util.diffDates(
            util.standardDate(instrument.questions.ifp2.value),
            new Date(2024, 5, 1),
            "years"
        )

        const months = util.diffDates(
            util.standardDate(instrument.questions.ifp2.value),
            new Date(2024, 5, 1),
            "months"
        )

        util.setValue('ifp2am', months.toString());
        util.setValue('ifp2ay', years.toString());
    }
});


util.listen("ifm4", "myChange", () => {
    if (instrument.questions.ifm4.value != "-9") {

        const age = util.diffDates(
            util.standardDate(instrument.questions.ifm4.value),
            new Date(2024, 5, 1),
            "years"
        )

        util.setValue('ifm4_age', age.toString());

    }
});


util.listen("ift4", "myChange", () => {
    if (instrument.questions.ift4.value != "-9") {

        const age = util.diffDates(
            util.standardDate(instrument.questions.ift4.value),
            new Date(2024, 5, 1),
            "years"
        )

        util.setValue('ift4_age', age.toString());
    }
});



const ifp4 = ['ifp4a', 'ifp4b'];
const ifp = [...ifp4, 'ifp5'];

util.listen(ifp, ["myChange"], () => {
    if (util.inputsHaveValue(ifp)) {
        const message = "IFP5 <= IFP4a + IFP4b";
        const error = util.getInputNumericValue('ifp5') > util.makeSumFromElements(ifp4);

        errorHandler.removeError(ifp, message);
        if (error) {
            errorHandler.addError(ifp, message);
        }

        return error;
    }
});


const fc = ['fc1', 'fc3'];
util.listen(fc, ["myChange"], () => {
    if (util.inputsHaveValue(fc)) {
        const message = "FC3 <= FC1";
        const error = util.getInputDecimalValue('fc3') > util.getInputDecimalValue('fc1');
        errorHandler.removeError(fc, message);
        if (error) {
            errorHandler.addError(fc, message);
        }
    }
});
