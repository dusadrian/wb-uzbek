import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./01_cpis_variables";
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

import * as en from "../../locales/en.json";
import * as uz from "../../locales/uz.json";
import * as ru from "../../locales/ru.json";
const locales: { [key: string]: typeof en | typeof uz | typeof ru} = {
    'en': en,
    'uz': uz,
    'ru': ru
}

const lang = localStorage.getItem("language");


const general_dates = [
    'lk3', 'cm3', 'ct3', 'cg1c', 'cg3b', 'sa1'
];

const sh3_start_dates = [
    'sh3_s1a', 'sh3_s2a', 'sh3_s3a', 'sh3_s4a', 'sh3_s5a', 'sh3_s6a', 'sh3_s7a', 'sh3_s8a', 'sh3_s9a', 'sh3_s10a', 'sh3_csa'
];

const sh3_end_dates = [
    'sh3_s1d', 'sh3_s2d', 'sh3_s3d', 'sh3_s4d', 'sh3_s5d', 'sh3_s6d', 'sh3_s7d', 'sh3_s8d', 'sh3_s9d', 'sh3_s10d', 'sh3_csd'
];


export const instrument1 = {
    init: async () => {


        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const flatpickrConfig: { enableTime: boolean; dateFormat: string; maxDate: string; locale?: any } = {
            enableTime: false,
            dateFormat: "d/m/Y",
            maxDate: "31/03/2024"
        }

        if (lang == "uz") {
            flatpickrConfig.locale = UzbekLatin;
        }

        if (lang == "ru") {
            flatpickrConfig.locale = Russian;
        }

        const date_elements = [...general_dates, ...sh3_start_dates, ...sh3_end_dates];

        const flatpickr_elements = date_elements.map((el) => flatpickr((<HTMLInputElement>document.getElementById(el)), flatpickrConfig));

        // TODO: de modificat activatorii pentru district si localitate, implicit -7
        // iar la localitate, daca districtul nu are localitati, sa ramana dezactivat

        const regElements = ["lk14b", "cm3b", "cm10c", "cm11c", "ct3b", "ct10c", "ct11c", "cg10c", "cg11c", "sa3a"];
        const disElements = ["lk14c", "cm3c", "cm10d", "cm11d", "ct3c", "ct10d", "ct11d", "cg10d", "cg11d", "sa3b"];
        const atuElements = ["lk14d", "cm3d", "cm10e", "cm11e", "ct3d", "ct10e", "ct11e", "cg10e", "cg11e", "sa3c"];

        const regions = Object.keys(administrative);
        for (let x = 0; x < regElements.length; x++) {
            const regel = document.getElementById(regElements[x]);
            for (let i = 0; i < regions.length; i++) {
                const option = document.createElement("option");
                option.value = regions[i];
                const reg = administrative[regions[i]];
                let name = "";
                if (lang == "uz") {
                    name = reg.uz;
                } else if (lang == "ru") {
                    name = reg.ru;
                } else {
                    name = reg.en;
                }

                option.text = name;
                regel.appendChild(option);
            }

            const district = document.getElementById(disElements[x]);
            const atu = document.getElementById(atuElements[x]);

            regel.addEventListener("change", function () {
                const selectedRegion = (<HTMLSelectElement>regel).value;
                const districts = administrative[selectedRegion].districts;
                const diskeys = Object.keys(districts);
                district.innerHTML = "";
                atu.innerHTML = "";
                const option = document.createElement("option");
                option.value = "-9";
                if (lang == "uz") {
                    option.text = "--- tanlang ---";
                } else if (lang == "ru") {
                    option.text = "--- выбирать ---";
                } else {
                    option.text = "--- choose ---";
                }

                district.appendChild(option);

                const option2 = document.createElement("option");
                option2.value = "-9";
                if (lang == "uz") {
                    option2.text = "--- tanlang ---";
                } else if (lang == "ru") {
                    option2.text = "--- выбирать ---";
                } else {
                    option2.text = "--- choose ---";
                }
                atu.appendChild(option2);

                for (let i = 0; i < diskeys.length; i++) {
                    const option = document.createElement("option");
                    option.value = diskeys[i];
                    let name = "";
                    if (lang == "uz") {
                        name = districts[diskeys[i]].uz;
                    } else if (lang == "ru") {
                        name = districts[diskeys[i]].ru;
                    } else {
                        name = districts[diskeys[i]].en;
                    }
                    option.text = name;
                    district.appendChild(option);
                }

            })

            district.addEventListener("change", function () {
                const selectedRegion = (<HTMLSelectElement>regel).value;
                const selectedDistrict = (<HTMLSelectElement>district).value;
                const atus = administrative[selectedRegion].districts[selectedDistrict].settlements;
                const atukeys = Object.keys(atus);
                atu.innerHTML = "";
                const option = document.createElement("option");
                option.value = "-9";
                if (lang == "uz") {
                    option.text = "--- tanlang ---";
                } else if (lang == "ru") {
                    option.text = "--- выбирать ---";
                } else {
                    option.text = "--- choose ---";
                }
                atu.appendChild(option);
                for (let i = 0; i < atukeys.length; i++) {
                    const option = document.createElement("option");
                    option.value = atukeys[i];
                    let name = "";
                    if (lang == "uz") {
                        name = atus[atukeys[i]].uz;
                    } else if (lang == "ru") {
                        name = atus[atukeys[i]].ru;
                    } else {
                        name = atus[atukeys[i]].en;
                    }
                    option.text = name;
                    atu.appendChild(option);
                }
            })
        }

        ipcRenderer.on("instrumentDataReady", (_event, args) => {

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                    const ireg = regElements.indexOf(item.variable);
                    if (ireg > -1) {
                        const regel = document.getElementById(regElements[ireg]);
                        regel.dispatchEvent(new Event("change"));
                    }
                    const idis = disElements.indexOf(item.variable);
                    if (idis > -1) {
                        const disel = document.getElementById(disElements[idis]);
                        disel.dispatchEvent(new Event("change"));
                    }

                    // seteaza valorile pentru elementele de tip data
                    for (let i = 0; i < date_elements.length; i++) {
                        if (item.variable == date_elements[i]) {
                            if (item.value != "-9") {
                                flatpickr_elements[i].setDate(item.value);
                            }
                        }
                    }
                }
            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {

    if (_questions.pin.value == '-9' || _questions.lk1a.value == '-9' || _questions.lk1b.value == '-9' || _questions.lk1c.value == '-9') {
        ipcRenderer.send("showDialogMessage", { type: "error", message: "The following fields are mandatory: PIN, LK1a, LK1b, LK1c!" });
        const elPin = document.getElementById("pin");
        elPin.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(function () {
            elPin.focus();
        }, 1000);
        return false;
    }

    return true;
};


const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "cpis";
    ipcRenderer.send("saveInstrument", obj);
}


document.querySelectorAll('input[name="cm1a"]').forEach((elem) => {
    elem.addEventListener("myChange", function() {
        const val = this.value;

        if (val == "1") {
            const cm1c1 = document.getElementById("cm1c-1-disabled") as HTMLInputElement;
            if (cm1c1) {
                cm1c1.removeAttribute("disabled");
                cm1c1.id = "cm1c-1";
            }
        }
        else if (val == "2") {
            const cm1c1 = document.getElementById("cm1c-1") as HTMLInputElement;
            cm1c1.setAttribute("disabled", "true");
            if (cm1c1.checked) {
                cm1c1.checked = false;
                instrument.questions["cm1c"].value = "-9";
            }

            cm1c1.id = "cm1c-1-disabled";
        }
        else {
            const cm1c1 = document.getElementById("cm1c-1") as HTMLInputElement;
            const cm1c2 = document.getElementById("cm1c-2") as HTMLInputElement;
            const cm1c3 = document.getElementById("cm1c-3") as HTMLInputElement;
            cm1c1.checked = false;
            cm1c2.checked = false;
            cm1c3.checked = true;
            instrument.questions["cm1c"].value = "3";
        }
    });
});


document.querySelectorAll('input[name="ct1a"]').forEach((elem) => {
    elem.addEventListener("myChange", function() {
        const val = this.value;

        if (val == "1") {
            const ct1c1 = document.getElementById("ct1c-1-disabled") as HTMLInputElement;
            if (ct1c1) {
                ct1c1.removeAttribute("disabled");
                ct1c1.id = "ct1c-1";
            }
        }
        else if (val == "2" || val == "4") {
            const ct1c1 = document.getElementById("ct1c-1") as HTMLInputElement;
            ct1c1.setAttribute("disabled", "true");
            if (ct1c1.checked) {
                ct1c1.checked = false;
                instrument.questions["ct1c"].value = "-9";
            }

            ct1c1.id = "ct1c-1-disabled";
        }
        else {
            const ct1c1 = document.getElementById("ct1c-1") as HTMLInputElement;
            const ct1c2 = document.getElementById("ct1c-2") as HTMLInputElement;
            const ct1c3 = document.getElementById("ct1c-3") as HTMLInputElement;
            ct1c1.checked = false;
            ct1c2.checked = false;
            ct1c3.checked = true;
            instrument.questions["ct1c"].value = "3";
        }
    });
});

const lk3 = document.getElementById('lk3') as HTMLInputElement;
const lk13a = document.getElementById('lk13a') as HTMLInputElement;
const sa1 = document.getElementById('sa1') as HTMLInputElement;

lk3.addEventListener("myChange", function () {
    if (instrument.questions.lk3.value != "-9") {
        const bdate = instrument.questions.lk3.value.split('/');
        const birthDate = new Date(Number(bdate[2]), Number(bdate[1]) - 1, Number(bdate[0]));
        const collectionRoundDate = new Date(2024, 3, 1);

        let age = collectionRoundDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = collectionRoundDate.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && collectionRoundDate.getDate() < birthDate.getDate())) {
            age--;
        }

        lk13a.value = age.toString();
        instrument.questions["lk13a"].value = age.toString();

        sa1.dispatchEvent(new Event('myChange'));
    }
});


sa1.addEventListener("myChange", function() {
    if (instrument.questions.lk3.value != "-9" && instrument.questions.sa1.value != "-9") {
        const bdate = instrument.questions.lk3.value.split('/');
        const edate = instrument.questions.sa1.value.split('/');

        const systemEntry = new Date(Number(edate[2]), Number(edate[1]) - 1, Number(edate[0]));
        const birthDate = new Date(Number(bdate[2]), Number(bdate[1]) - 1, Number(bdate[0]));

        let age = systemEntry.getFullYear() - birthDate.getFullYear();
        const monthDiff = systemEntry.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && systemEntry.getDate() < birthDate.getDate())) {
            age--;
        }

        if (!Number.isNaN(age)) {
            const sa1a = document.getElementById('sa1a') as HTMLInputElement;
            sa1a.value = age.toString();
            instrument.questions["sa1a"].value = age.toString();
            sa1a.dispatchEvent(new Event('myChange'));
        }
    }
});

const sa1a = document.getElementById('sa1a') as HTMLInputElement;
sa1a.addEventListener("myChange", function() {
    const qeduc21 = document.getElementById('qeduc2-1') as HTMLInputElement;
    const qeduc22 = document.getElementById('qeduc2-2') as HTMLInputElement;
    const qeduc27disabled = document.getElementById("qeduc2-7-disabled") as HTMLInputElement;
    const age = Number(instrument.questions["sa1a"].value);

    if (age < 7) {
        qeduc21.checked = false;
        qeduc22.checked = false;
        qeduc27disabled.checked = true;
        instrument.questions["qeduc2"].value = "7";
    }
    else {
        if (qeduc27disabled.checked) {
            instrument.questions["qeduc2"].value = "-9";
            qeduc27disabled.checked = false;
        }
    }
})


const qhouse = ['qhouse4a', 'qhouse4b'];
qhouse.forEach((el) => {
    const elem = document.getElementById(el) as HTMLInputElement;
    elem.addEventListener("myChange", function() {
        if (instrument.questions.qhouse4a.value != "-9" && instrument.questions.qhouse4b.value != "-9") {
            const qhouse4 = document.getElementById('qhouse4') as HTMLInputElement;
            qhouse4.value = (Number(instrument.questions.qhouse4a.value) + Number(instrument.questions.qhouse4b.value)).toString();
            instrument.questions["qhouse4"].value = qhouse4.value;
        }
    });
});


//qhouse4 = qhouse4a + qhouse4b
const qhouse4Array = ['qhouse4a', 'qhouse4b'];
const qhouse4ArrayFull = [...qhouse4Array, 'qhouse4'];
qhouse4ArrayFull.forEach(item => {
    (document.getElementById(item) as HTMLInputElement).addEventListener('change', () => {
        if (util.inputsHaveValue(qhouse4ArrayFull)) {
            const qhouse4 = util.getInputNumericValue('qhouse4');

            if (qhouse4 != Number(util.makeInputSumDecimal(qhouse4Array))) {
                errorHandler.addArrayError(qhouse4Array, '4 = 4a + 4b')
            } else {
                errorHandler.removeArrayError(qhouse4Array, '4 = 4a + 4b')
            }
        }
    })
});

const sh1 = document.getElementById('sh1') as HTMLInputElement;

sh1.addEventListener("myChange", function() {
    const sh1value = Number(util.getInputDecimalValue('sh1'));
    const error = locales[lang]['Value_up_to_ten'];
    if (sh1value > 10) {
        instrument.questions["sh1"].value = '-9';
        errorHandler.addError('sh1', error);
    }
    else {
        instrument.questions["sh1"].value = sh1value.toString();
        errorHandler.removeError('sh1', error);
    }

    // dupa ce dispare eroarea, mai trebuie facut un dispatch change pe orice element
    // ca sa treaca prin activatorii de la tabelul sh3
    const sh2 = document.getElementById('sh2-1');
    sh2.dispatchEvent(new Event('change'));
    sh2.focus();
    sh2.blur();
    document.getElementsByName('sh2')[0].scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
});


sh3_start_dates.forEach((startel) => {
    const index = sh3_start_dates.indexOf(startel);
    const endel = sh3_end_dates[index]
    const start = document.getElementById(startel) as HTMLInputElement;
    const end = document.getElementById(endel) as HTMLInputElement;

    const check = function() {
        if (util.inputsHaveValue([startel, endel])) {

            const startdate = new Date(start.value.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1'));
            const enddate = new Date(end.value.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1'));

            const error = locales[lang]['Start_before_end'];

            if (startdate > enddate) {
                errorHandler.addArrayError([startel, endel], error);
                instrument.questions[startel].value = '-9';
                instrument.questions[endel].value = '-9';
            }
            else {
                errorHandler.removeArrayError([startel, endel], error);
                instrument.questions[startel].value = start.value;
                instrument.questions[endel].value = end.value;
            }
        }
    }

    start.addEventListener("myChange", check);
    end.addEventListener("myChange", check);
});