import { ipcRenderer } from "electron";
import { questions, questionOrder } from "./04_qmr_variables";
import instrument from "../../libraries/instrument";
import { QuestionObjectType, SaveInstrumentType } from "../../libraries/interfaces";

// import * as _flatpickr from 'flatpickr';
// import { FlatpickrFn } from 'flatpickr/dist/types/instance';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const flatpickr: FlatpickrFn = _flatpickr as any;
// import { Russian } from "flatpickr/dist/l10n/ru";
// import { UzbekLatin } from "flatpickr/dist/l10n/uz_latn";

export const instrument4 = {
    init: async () => {

        // const lang = localStorage.getItem("language");

        // // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // const flatpickrConfig: { enableTime: boolean; dateFormat: string; locale?: any } = {
        //     enableTime: false,
        //     dateFormat: "d/m/Y",
        // }

        // if (lang == "uz") {
        //     flatpickrConfig.locale = UzbekLatin;
        // }
        // if (lang == "ru") {
        //     flatpickrConfig.locale = Russian;
        // }

        // flatpickr((<HTMLInputElement>document.getElementById('lk3')), flatpickrConfig);

        // TODO: de modificat activatorii pentru district si localitate, implicit -7
        // iar la localitate, daca districtul nu are localitati, sa ramana dezactivat




        ipcRenderer.on("instrumentDataReady", (_event, args) => {
console.log('am ajuns aici');

            // set instrument question !!!!!!
            instrument.setQuestions(questions, questionOrder);
            let instrumentID = null;

            if (args.questions && args.questions.length > 0) {
                instrumentID = parseInt(args.id);

                for (const item of args.questions) {
                    instrument.seteazaValoareElement(item.variable, item.value);
                   }

            }
            instrument.start(instrumentID, instrument.trimis, saveChestionar, validateChestionar);
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateChestionar = (_questions: QuestionObjectType) => {
    return true;
};

const saveChestionar = (obj: SaveInstrumentType): void => {
    obj.table = "cpis";
    ipcRenderer.send("saveInstrument", obj);
}
