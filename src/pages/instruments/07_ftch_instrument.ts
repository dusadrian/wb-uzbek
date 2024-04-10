import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./01_cpis_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";

import * as _flatpickr from 'flatpickr';
import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flatpickr: FlatpickrFn = _flatpickr as any;
import { Russian } from "flatpickr/dist/l10n/ru";
import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";
import { administrative, Administrative } from "../../libraries/administrative";

export const instrument7 = {
    init: async () => {

        const lang = localStorage.getItem("language");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const flatpickrConfig: { enableTime: boolean; dateFormat: string; locale?: any } = {
            enableTime: false,
            dateFormat: "d/m/Y",
        }

        if (lang == "uz") {
            flatpickrConfig.locale = UzbekLatin;
        }
        if (lang == "ru") {
            flatpickrConfig.locale = Russian;
        }

        flatpickr((<HTMLInputElement>document.getElementById('lk3')), flatpickrConfig);

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
