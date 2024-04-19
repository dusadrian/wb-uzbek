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
    radioIDs: (name: string) => string[];
    htmlElement: (element: string) => HTMLInputElement;
    setValue: (element: string, value: string) => void;
    trigger: (element: string, change: string) => void;
    triggerArray: (elements: Array<string>, changes: string | Array<string>) => void;
    listen: (element: string, event: string, callback: () => void) => void;
    listenArray: (elements: Array<string>, events: string | Array<string>, callback: () => void) => void;
    standardDate: (date: string) => Date;
    diffDates: (startDate: Date, endDate: Date, type?:string) => number;
    focus: (element: string) => void;
    blur: (element: string) => void;
    missing: (x: unknown) => boolean;
    exists: (x: unknown) => boolean;
    repString: (value: string, times: number) => Array<string>;
    repNumber: (value: number, times: number) => Array<number>;
    seq: (from: number, to: number) => number[];
}

interface ValidationMessageType {
    [element: string]: {
        name: string;
        errors: Array<string>;
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

    removeError: function (element: string, error: string): void {
        // console.log('Remove ==========');
        // console.log(element);
        // console.log(error);
        // console.log('Remove ==========');
        // run remove only if the message exists
        const errIndex = validation_messages[element] !== void 0 ? validation_messages[element].errors.indexOf(error) : -1;

        if (errIndex !== -1) {
            let selectEl = document.getElementById(element);
            let isRadio = false;
            if (selectEl === null) {
                selectEl = <HTMLElement>document.getElementsByName(element)[0].parentNode.parentNode;
                isRadio = true;
            }
            if (document.querySelector(".eroare" + element)) {
                // console.trace(element);
                // console.log(validation_messages);

                validation_messages[element].errors.splice(errIndex, 1);

                if (validation_messages[element].errors.length == 0) {
                    // remove error
                    error_tippy[element][0].destroy();
                    // remove from validation messages
                    delete validation_messages[element];
                    errorHelperFunctions.removeErrorStyle(element, isRadio);
                    document.querySelectorAll(".eroare" + element).forEach((el) => el.classList.remove("eroare" + element));
                } else {
                    error_tippy[element][0].setContent(validation_messages[element].errors[0]);
                }
            }
        }
    },
    removeArrayError( array: string[], message: string) {
        array.forEach( item => {
            errorHandler.removeError(item, message);
        })
    },
    addError: function (element: string, error: string): void {
        // Debugging -- keep here
        // console.log('Add ==========');
        // console.log(element);
        // console.log(error);
        // console.log('Add ==========');

        let selectEl = document.getElementById(element);
        let isRadio = false;
        if (selectEl === null) {
            selectEl = <HTMLElement>document.getElementsByName(element)[0].parentNode.parentNode;
            isRadio = true;
        }

        if (!document.querySelector(".eroare" + element)) {
            selectEl.classList.add("eroare" + element);

            // !!this may not work if you have multiple error on the element.
            // error_tippy[element] = tippy("#" + element, {
            error_tippy[element] = [
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
        if (validation_messages[element] !== void 0) {
            if (
                _.findIndex(validation_messages[element].errors, function (e) {
                    return e == error;
                }) == -1
            ) {
                if (Array.isArray(error)) {
                    validation_messages[element].errors = Array.from(error);
                } else {
                    validation_messages[element].errors.push(error);
                }
            }
        } else {
            validation_messages[element] = {
                name: element,
                errors: Array.isArray(error) ? error : [error],
            };
        }
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
        const input = (document.getElementById(el) as HTMLInputElement);
        if (input.value != '') {
            return true;
        }
        return false;
    },
    inputsHaveValue: (array: string[]) => {

        const response: boolean[] = [];
        array.forEach(el => {
            const input = (document.getElementById(el) as HTMLInputElement);
            if (input.value != '') {
                response.push(true);
            } else {
                response.push(false);
            }
        });
        return response.every(item => item === true);
    },

    radioIDs: (name) => {
        return Array.from(document.querySelectorAll('input[name=' + name + ']')).map((el) => el.id);
    },
    htmlElement: (element) => {
        return document.getElementById(element) as HTMLInputElement;
    },
    setValue: (element, value) => {
        util.htmlElement(element).value = value;
        util.trigger(element, "change");
    },
    trigger: (element, change) => {
        util.htmlElement(element).dispatchEvent(new Event(change));
    },
    triggerArray: (elements, changes) => {
        let change;
        if (Array.isArray(changes)) {
            if (elements.length !== changes.length) {
                change = util.repString(changes[0], elements.length);
            } else {
                change = [...changes];
            }
        } else {
            change = util.repString(changes, elements.length);
        }

        for (let i = 0; i < elements.length; i++) {
            util.trigger(elements[i], change[i]);
        }
    },
    listen: (element, event, callback) => {
        util.htmlElement(element).addEventListener(event, callback);
    },
    listenArray: (elements, events, callback) => {
        let event;
        if (Array.isArray(events)) {
            if (elements.length !== events.length) {
                event = util.repString(events[0], elements.length);
            } else {
                event = [...events];
            }
        } else {
            event = util.repString(events, elements.length);
        }

        for (let i = 0; i < elements.length; i++) {
            util.htmlElement(elements[i]).addEventListener(event[i], callback);
        }
    },
    standardDate: (date) => {
        // const eldate = date.split('/');
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
        util.htmlElement(element).focus();
    },
    blur: (element) => {
        util.htmlElement(element).blur();
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
