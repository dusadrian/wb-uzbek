import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./08_pfq_variables";
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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            const element = document.getElementById(el) as HTMLInputElement;
            let config;
            if (admission_dates.indexOf(el) >= 0) {
                config = { ...flatpickrConfig, minDate: "01/01/2000" };
                config.maxDate = "30/04/2024";
            } else if (exit_dates.indexOf(el) >= 0) {
                config = { ...flatpickrConfig, minDate: "01/05/2024" };
                config.maxDate = "31/12/2048";
            } else {
                config = { ...flatpickrConfig, minDate: "01/01/1930" };
            }
            return flatpickr(element, config);
        });

        const today = new Date();
        flatpickr_elements[date_elements.indexOf('data')].setDate(today);
        document.getElementById("data").dispatchEvent(new Event('change'));


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

            } else {
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
            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.ig1.value == '-9' || _questions.ig2.value == '-9' || _questions.ig3.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: IG1, IG2, IG3!" });
        const el = document.getElementById("ig1");
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
    ipcRenderer.send("saveInstrument", obj);
}


// validari custom

function validate_ig5() {
    if (instrument.questions.ig5.value != "-9") {

        const age = util.diffDates(
            util.standardDate(instrument.questions.ig5.value),
            new Date(2024, 5, 1),
            "years"
        )

        const ig5_age = document.getElementById('ig5_age') as HTMLInputElement;
        ig5_age.value = age.toString();
        instrument.questions["ig5_age"].value = age.toString();

        return true;
    }
}

util.eventListener("ig5", "myChange", validate_ig5, ["ig5_age"], ["change"]);

const pf4 = ['pf4a', 'pf4b'];
const pf = [...pf4, 'pf5'];
function validate_pf() {
    if (util.inputsHaveValue(pf)) {
        const message = "PF5 <= PF4a + PF4b";
        const error = util.getInputNumericValue('pf5') > util.makeSumFromElements(pf4);

        errorHandler.removeArrayError(pf, message);
        if (error) {
            errorHandler.addArrayError(pf, message);
        }

        return error;
    }
}

pf.forEach((el) => {
    util.eventListener(el, "myChange", validate_pf);
});

