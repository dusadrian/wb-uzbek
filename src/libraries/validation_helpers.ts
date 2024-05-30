import tippy from "tippy.js";
import * as _ from "lodash";

interface ValidationHelpers {
    valueInInterval: (value: number, interval: [min: number, max: number]) => boolean;
}


interface UtilHelpersInterface {
    makeSum: (array: number[]) => number;
    makeSumFromElements: (array: string[]) => number;
    makeSumDecimal: (array: number[]) => string;
    makeInputSumDecimal: (array: string[]) => string;
    getInputNumericValue: (el: string) => number;
    getInputDecimalValue: (el: string) => number;
    inputHasValue: (el: string) => boolean;
    inputsHaveValue: (array: string[]) => boolean;
    anyInputHasValue: (array: string[]) => boolean;
    radioIDs: (name: string) => string[];
    htmlElement: (element: string) => HTMLInputElement;
    setValue: (element: string | string[], value: string | number) => void;
    trigger: (element: string | string[], change: string | string[]) => void;
    listen: (element: string | string[], event: string | string[], callback: () => void) => void;
    customDate: (el?: string) => string;
    standardDate: (date: string) => Date;
    diffDates: (startDate: Date, endDate: Date, type?:string) => number;
    focus: (element: string) => void;
    blur: (element: string) => void;
    addOption: (element: string, value: string, text: string) => void;
    resetSelect: (element: string, value: string, text: string) => void;
    selectValues: (element: string) => string[];
    missing: (x: unknown) => boolean;
    exists: (x: unknown) => boolean;
    repString: (value: string, times: number) => string[];
    repNumber: (value: number, times: number) => Array<number>;
    seq: (from: number, to: number) => number[];
}

interface ValidationMessageType {
    [element: string]: {
        name: string;
        errors: string[];
    }
}
interface ErrorTippyType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [element: string]: Array<any>
}

const validation_messages: ValidationMessageType = {};
const error_tippy: ErrorTippyType = {};

const errorHelperFunctions = {
    // https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
    insertAfter: function (referenceNode: Node, newNode: Node): void {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    },

    // Error add / remove ===============================================
    // ==================================================================

    removeError: function (element: string | string[], error: string): void {
        if (!Array.isArray(element)) {
            element = [element];
        }

        element.forEach((item) => {
            // console.log('Remove ==========');
            // console.log(item);
            // console.log(error);
            // console.log('Remove ==========');
            // run remove only if the message exists
            const errIndex = validation_messages[item] !== void 0 ? validation_messages[item].errors.indexOf(error) : -1;

            if (errIndex !== -1) {
                let selectEl = document.getElementById(item);
                let isRadio = false;
                if (selectEl === null) {
                    selectEl = <HTMLElement>document.getElementsByName(item)[0].parentNode.parentNode;
                    isRadio = true;
                }
                if (document.querySelector(".eroare" + item)) {
                    // console.trace(item);
                    // console.log(validation_messages);

                    validation_messages[item].errors.splice(errIndex, 1);

                    if (validation_messages[item].errors.length == 0) {
                        // remove error
                        error_tippy[item][0].destroy();
                        // remove from validation messages
                        delete validation_messages[item];
                        errorHelperFunctions.removeErrorStyle(item, isRadio);
                        document.querySelectorAll(".eroare" + item).forEach((el) => el.classList.remove("eroare" + item));
                    } else {
                        error_tippy[item][0].setContent(validation_messages[item].errors[0]);
                    }
                }
            }
        })
    },
    removeArrayError( array: string[], message: string) {
        array.forEach( item => {
            errorHandler.removeError(item, message);
        })
    },
    addError: function (element: string | string[], error: string): void {
        if (!Array.isArray(element)) {
            element = [element];
        }

        element.forEach((item) => {
            // Debugging -- keep here
            // console.log('Add ==========');
            // console.log(item);
            // console.log(error);
            // console.log('Add ==========');

            let selectEl = document.getElementById(item);
            let isRadio = false;
            if (selectEl === null) {
                selectEl = <HTMLElement>document.getElementsByName(item)[0].parentNode.parentNode;
                isRadio = true;
            }

            if (!document.querySelector(".eroare" + item)) {
                selectEl.classList.add("eroare" + item);

                // !!this may not work if you have multiple error on the item.
                // error_tippy[item] = tippy("#" + item, {
                error_tippy[item] = [
                    tippy(selectEl, {
                        theme: "light-red",
                        placement: "top-start",
                        content: Array.isArray(error) ? errorHelperFunctions.mergeMessages(error) : error,
                        arrow: false,
                        allowHTML: true,
                    }),
                ];
            }

            if (!isRadio) {
                selectEl.classList.add("error-in-field");
            } else {
                selectEl.classList.add("error-in-radio");
            }
            if (validation_messages[item] !== void 0) {
                if (
                    _.findIndex(validation_messages[item].errors, function (e) {
                        return e == error;
                    }) == -1
                ) {
                    if (Array.isArray(error)) {
                        validation_messages[item].errors = Array.from(error);
                    } else {
                        validation_messages[item].errors.push(error);
                    }
                }
            } else {
                validation_messages[item] = {
                    name: item,
                    errors: Array.isArray(error) ? error : [error],
                };
            }

        })
    },
    addArrayError( array: string[], message: string) {
        array.forEach( item => {
            errorHandler.addError(item, message);
        })
    },

    mergeMessages: function (arr: Array<string>): string {
        let resp = "";
        for (const element of arr) {
            resp += "<p class=mb-0 aici>" + element + "</p>";
        }
        return resp;
    },

    removeErrorStyle: function (name: string, isRadio: boolean): void {
        if (isRadio) {
            const jumpID = document.getElementsByName(name)[0].id;
            const el = <HTMLInputElement>document.getElementById(jumpID);
            if (el === null) {
                const x = <HTMLElement>document.getElementsByName(name)[0].parentNode.parentNode;
                x.classList.remove("overrideBorder");
                x.classList.remove("error-in-radio");
            } else {
                const x = <HTMLElement>document.getElementById(jumpID).parentNode.parentNode;
                x.classList.remove("overrideBorder");
                x.classList.remove("error-in-radio");
            }
        } else {
            const element = <HTMLInputElement>document.getElementById(name);
            element.classList.remove("error-in-field");
        }
    },
}
// API - export
export const errorHandler = {
    addError: errorHelperFunctions.addError,
    addArrayError: errorHelperFunctions.addArrayError,
    removeError: errorHelperFunctions.removeError,
    removeArrayError: errorHelperFunctions.removeArrayError,
}

// Validation functions
export const validate: ValidationHelpers = {
    valueInInterval: (value: number, interval: [min: number, max: number]) => {
        if (value >= interval[0] && value <= interval[1]) {
            return true;
        }
        return false;
    }
}
// Util functions
export const util: UtilHelpersInterface = {
    makeSum: (array: number[]) => {
        return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    makeSumFromElements: (array: string[]): number => {
        const elements = new Array(array.length);
        for (let i = 0; i < array.length; i++) {
            const value = util.getInputNumericValue(array[i]);
            elements[i] = (value >= 0) ? value : 0;
        }
        return(util.makeSum(elements));
    },
    makeSumDecimal: (array: number[]) => {
        return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);
    },
    makeInputSumDecimal: (array: string[]) => {
        let suma = 0;
        array.forEach(item => {
            suma += util.getInputDecimalValue(item);
            // console.log(util.getInputDecimalValue(item));
            // console.log(suma);


        })
        return suma.toFixed(2);
    },

    getInputNumericValue: (el: string) => {
        const input = document.getElementById(el) as HTMLInputElement;
        if (input !== null) {
            return Number(input.value);
        }
        return 0;
    },
    getInputDecimalValue: (el: string) => {
        const input = document.getElementById(el) as HTMLInputElement;
        if (input !== null) {
            return !isNaN(parseFloat(input.value)) ? parseFloat(input.value) : 0;
        }
        return 0;
    },
    inputHasValue: (el: string) => {
        const input = util.htmlElement(el);
        if (input.value != '') {
            return true;
        }
        return false;
    },
    inputsHaveValue: (array: string[]) => {

        const response: boolean[] = [];
        array.forEach(el => {
            const input = util.htmlElement(el);
            if (input.value != '') {
                response.push(true);
            } else {
                response.push(false);
            }
        });
        return response.every(item => item === true);
    },
    anyInputHasValue: (array: string[]) => {
        let response: boolean = false;
        array.forEach(el => {
            const input = util.htmlElement(el);
            if (input.value != '') {
                response = true;
            }
        });
        return response;
    },

    radioIDs: (name) => {
        return Array.from(document.querySelectorAll('input[name=' + name + ']')).map((el) => el.id);
    },
    htmlElement: (element) => {
        return document.getElementById(element) as HTMLInputElement;
    },
    setValue: (element, value) => {
        if (!Array.isArray(element)) {
            element = [element];
        }
        element.forEach((el) => {
            util.htmlElement(el).value = value.toString();
            util.trigger(el, "change");
        });
    },
    trigger: (element, change) => {
        if (!Array.isArray(element)) {
            element = [element];
        }

        if (!Array.isArray(change)) {
            change = [change];
        }

        if (element.length !== change.length) {
            change = util.repString(change[0], element.length);
        }

        for (let i = 0; i < element.length; i++) {
            util.htmlElement(element[i]).dispatchEvent(new Event(change[i]));
        }
    },
    listen: (element, event, callback) => {
        if (!Array.isArray(element)) {
            element = [element];
        }

        if (!Array.isArray(event)) {
            event = [event];
        }

        if (element.length !== event.length) {
            event = util.repString(event[0], element.length);
        }

        for (let i = 0; i < element.length; i++) {
            if (util.htmlElement(element[i]) !== null) {
                util.htmlElement(element[i]).addEventListener(event[i], callback);
            } else {
                console.log("Element not found: " + element[i]);
            }
        }
    },

    customDate: (el?: string) => {
        if (el) {
            return el.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1')
        } else {
            return new Date().getDate().toString().padStart(2, '0') + "/" +
            (new Date().getMonth() + 1).toString().padStart(2, '0') + "/" +
            new Date().getFullYear().toString()
        }
    },
    standardDate: (date) => {
        const eldate = date.split('/');
        if (eldate.length == 2) {
            return new Date(Number(eldate[1]), Number(eldate[0]) - 1, 1);
        }
        // const stdate = new Date(Number(eldate[2]), Number(eldate[1]) - 1, Number(eldate[0]));
        return new Date(date.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1'));
    },
    diffDates: (startDate, endDate, type?) => {
        if (!type) {
            type = "years";
        }

        let yearDiff = endDate.getFullYear() - startDate.getFullYear();
        let monthDiff = endDate.getMonth() - startDate.getMonth();
        const dayDiff = endDate.getDate() - startDate.getDate();

        if (type == "years") {
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                yearDiff--;
            }
            return(yearDiff);
        }
        else if (type == "months") {
            monthDiff += yearDiff * 12;
            if (dayDiff < 0) {
                monthDiff--;
            }
            return(monthDiff);
        }
    },
    focus: (element) => {
        const el = util.htmlElement(element);
        el.scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });
        el.focus();
    },
    blur: (element) => {
        util.htmlElement(element).blur();
    },
    addOption: (element: string, value: string, text: string) => {
        const option = document.createElement("option");
        option.value = value;
        option.text = text;
        util.htmlElement(element).appendChild(option);
    },
    resetSelect: (element: string, value: string, text: string) => {
        util.htmlElement(element).innerHTML = "";
        util.addOption(element, value, text);
    },
    selectValues: (element: string) => {
        const item = document.getElementById(element) as HTMLSelectElement;
        return Array.from(item.options).map((el) => el.value);
    },


    missing: function (x) {
        return x === void 0 || x === undefined;
    },

    exists: function (x) {
        return x !== void 0 && x !== undefined;
    },

    repString: function(value, times) {
        return new Array(times).fill(value);
    },

    repNumber: function(value, times) {
        return new Array(times).fill(value);
    },

    seq: function (from, to) {
        const length = to - from + 1;
        const result = new Array(length);
        for (let i = 0; i < length; i++) {
            result[i] = from + i;
        }
        return result;
    },
}

