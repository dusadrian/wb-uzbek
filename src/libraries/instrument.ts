import { QuestionObjectType, QuestionType, InstrumentObjectType } from './interfaces';

const instrumentHelper = {
	setInputType: (name: string, question: QuestionType, valoare: string) => {
		const inputEl = <HTMLInputElement>document.getElementById(name);
		if (valoare == "-7") {
			inputEl.disabled = true;
			question.disabled = true;
		} else if (valoare == "-9") {
			inputEl.value = "";
		} else {
			inputEl.value = valoare;
		}
	},
	setRadioType: (name: string, valoare: string) => {
		const radioEl = document.getElementsByName(name);
		radioEl.forEach((item: HTMLInputElement) => {
			if (valoare == "-7") {
				item.disabled = true;
			} else if (item.value == valoare) {
				item.checked = true;
			}
		});
	},
	setCheckboxType: (name: string, valoare: string) => {
		const checkboxEL = <HTMLInputElement>document.getElementById(name);
		if (checkboxEL !== null) {
			if (valoare == "-7") {
				checkboxEL.checked = false;
			} else if (valoare == "1") {
				checkboxEL.checked = true;
			}
		}
	},
	setSelectType: (name: string, valoare: string) => {
		const selectEl = <HTMLSelectElement>document.getElementById(name);
		for (const element of Array.from(selectEl.options)) {
			if (element.value == valoare) {
				element.selected = true;
			}
		}
		if (valoare == "-7") {
			selectEl.disabled = true;
		}
	},
	setSelectMultipluType: (name: string, valoare: string) => {
		const selectEl = <HTMLSelectElement>document.getElementById(name);

		if (valoare == "-7") {
			selectEl.disabled = true;
		} else {
			const selectedEl = valoare.split(",");
			for (const element of Array.from(selectEl.options)) {
				if (selectedEl.includes(element.value)) {
					element.selected = true;
				}
			}
		}
	}
}

const instrument: InstrumentObjectType = {
	debug: false,
	instrumentID: 0,
	status: "Parțial",
	questions: {},
	questionsOrder: [],
	trimis: 0,
	start: function (i: number, trimis: number, saveFn, validateFn): void {
		instrument.debug = false;
		instrument.instrumentID = i;
		instrument.trimis = trimis;
		instrument.saveInstrument = saveFn;
		instrument.validateInstrument = validateFn.bind(null, instrument.questions);

		// select all elements and add listener
		const inputElements = document.querySelectorAll("input[type^=text], input[type^=number], input[type^=radio], input[type^=checkbox], select, textarea");
		inputElements.forEach(function (item) {
			item.addEventListener("change", function (event) {
				instrument.checkValue(event);
			});

			const aaa = <HTMLInputElement>item;
			if (aaa.name != "") {
				// Set only numbers for element on the page ------------------------------------------
				if (instrument.questions[aaa.name] !== void 0 && instrument.questions[aaa.name].type === "number") {
					instrument.setOnlyNumbers(aaa.name);
				}
				// Set only numbers for element on the page ------------------------------------------
				if (instrument.questions[aaa.name] !== void 0 && instrument.questions[aaa.name].type === "double") {
					instrument.setOnlyDouble(aaa.name);
				}
			}
		});

		// add listeners for buttons
		const salveaza = document.getElementById("salveazaForm");
		if (salveaza !== null) {
			salveaza.addEventListener("click", function () {
				instrument.processMyForm("salveaza");
			});
		}
		const finalizeaza = document.getElementById("finalizeazaForm");
		if (finalizeaza !== null) {
			finalizeaza.addEventListener("click", function () {
				instrument.processMyForm("finalizeaza");
			});
		}
		// pass through activators once
		instrument.checkEverything();
		// attach debug listener to button
		instrument.debuging();
	},
	setQuestions: function (questions: QuestionObjectType, order: Array<string>): void {
		instrument.questions = questions;
		instrument.questionsOrder = order;
	},
	// check everything
	checkEverything: function () {
		instrument.disableByCondition();
	},
	setQuestionValue(name: string, valoare: string) {
		const question = instrument.questions[name];
		if (question !== void 0) {
			question.value = valoare;
		}
	},
	seteazaValoareElement: function (name: string, valoare: string): void {
		const question = instrument.questions[name];

		if (question !== void 0) {
			try {
				question.value = valoare;

				switch (question.type) {
					case 'input':
					case 'textarea':
					case 'number':
					case 'double':
						instrumentHelper.setInputType(name, question, valoare);
						break;
					case 'radio':
						instrumentHelper.setRadioType(name, valoare);
						break;
					case 'checkbox':
						instrumentHelper.setCheckboxType(name, valoare);
						break;
					case 'select':
						instrumentHelper.setSelectType(name, valoare);
						break;
					case 'select-multiple':
						instrumentHelper.setSelectMultipluType(name, valoare);
						break;
				}

			} catch (error) {
				console.log(question);
				console.log(valoare);
				console.log(error);
			}
		}
	},
	// verify the clicked value
	checkValue: function (event: Event): void {
		const htmlEl = <HTMLInputElement | HTMLSelectElement>event.target;
		// if element has no name do nothing
		if (htmlEl.name === "" || htmlEl.name === "goToSection") {
			return;
		}

		const question = instrument.questions[htmlEl.name];
		// is element in variables?
		if (question === undefined) {
			return;
		}
		// set obj elements value
		if (question.type === "checkbox") {
			if (htmlEl instanceof HTMLInputElement && htmlEl.checked) {
				question.value = "1";
			} else {
				question.value = "0";
			}
		} else if (["input", "double", "select", "texarea"].includes(question.type)) {
			question.value = htmlEl.value == "" ? "-9" : htmlEl.value;
		} else if (question.type === "number") {
			question.value = htmlEl.value == "" ? "-9" : htmlEl.value;
		} else if (question.type === "select-multiple") {
			question.value = instrument.getSelectValues(<HTMLSelectElement>htmlEl);
		} else {
			question.value = htmlEl.value;
		}

		// for all
		instrument.disableByCondition();

		if (question.value !== "-9") {
			instrument.removeErrorStyle(question.name);
		}

		// jump on the next element
		instrument.jumpToNextElement(question.order);

		// dispatch myChange event - after the element has changed
		event.target.dispatchEvent(new Event("myChange"));
	},
	// get next element
	jumpToNextElement: function (order: number): boolean {
		const prevtype = instrument.questions[instrument.questionsOrder[order]].type;

		if (prevtype == "radio") {
			const prevElDOm = document.getElementsByName(instrument.questionsOrder[order]);
			prevElDOm.forEach((item) => {
				item.blur();
			});
		} else {
			document.getElementById(instrument.questionsOrder[order]).blur();
		}

		if (instrument.questionsOrder[order + 1]) {

			let jumpName;
			const nextEl = instrument.questions[instrument.questionsOrder[order + 1]];

			if (nextEl.type == "radio") {
				if (instrument.questions[nextEl.name].disabled) {
					jumpName = instrument.getNextJumpName(nextEl);
					if (jumpName === void 0) {
						return false;
					}
				} else {
					jumpName = document.getElementsByName(nextEl.name)[0].id;
				}

				document.getElementById(jumpName).scrollIntoView({
					behavior: "auto",
					block: "center",
					inline: "nearest",
				});

			} else {

				let nextElDOM = document.getElementById(nextEl.name);
				jumpName = "";

				if (nextEl.type === "input" && (nextEl.hidden || nextEl.readonly || nextEl.disabled)) {
					jumpName = instrument.getNextJumpName(nextEl);

					if (jumpName === void 0) {
						return false;
					}

					nextElDOM = document.getElementById(jumpName);
					// no more elements?
					if (nextElDOM == null) {
						return false;
					}
				}

				// https://stackoverflow.com/questions/46795955/how-to-know-scroll-to-element-is-done-in-javascript
				let scrollTimeout: ReturnType<typeof setTimeout>;
				const ff = function () {
					clearTimeout(scrollTimeout);
					scrollTimeout = setTimeout(function () {
						window.removeEventListener("scroll", ff);
					}, 100);
				};

				window.addEventListener("scroll", ff);

				if (nextElDOM !== null) {
					const basename = jumpName.split("_")[0];
					if (basename == "" || (instrument.questions[basename] && instrument.questions[basename].type != "radio")) {
						nextElDOM.focus();
						if (nextEl.type == "checkbox") {
							nextElDOM.blur();
						}
					}

					nextElDOM.scrollIntoView({
						behavior: "auto",
						block: "center",
						inline: "center",
					});
				}
			}
		}
	},
	getNextJumpName: function (current: QuestionType): string {
		let jumpName = "";

		for (let i = current.order + 1; i < instrument.questionsOrder.length; i++) {
			if (!instrument.questions[instrument.questionsOrder[i]].disabled) {
				const nextEl = instrument.questions[instrument.questionsOrder[i]];

				jumpName = nextEl.name;
				if (nextEl.type == "radio") {
					jumpName = document.getElementsByName(nextEl.name)[0].id;
				}
				return jumpName;
			}
		}
		return void 0;
	},
	// enable radio group elements
	enableRadioElement: function (group: string, val: boolean): string {
		const elements = document.getElementsByName(group);
		const parent = elements[0].parentNode.parentNode;
		let response = "-9";
		// element has error?
		if (parent !== null && (<HTMLDivElement>parent).classList.contains("error-in-radio")) {
			return response;
		}
		elements.forEach(function (item: HTMLInputElement) {
			if (item.checked === true) {
				response = item.value;
				item.dispatchEvent(new Event("afterChange"));
			}
			item.disabled = val;
		});
		if (val) {
			instrument.removeErrorStyle(group);
		}
		return response;
	},
	enableElement: function (name: string, val: boolean): string {
		const elDOM = <HTMLInputElement | HTMLSelectElement>document.getElementById(name);
		let newVal = "-9";
		if (elDOM !== null && !elDOM.classList.contains("error-in-field")) {
			elDOM.disabled = val;
			newVal = elDOM.value;

			// if checkbox is on or off
			if (elDOM instanceof HTMLInputElement && elDOM.type === "checkbox") {
				newVal = elDOM.checked ? "1" : "0";
			}

			// if element is input and value == '' set -9
			// if (elDOM.type === 'text' || elDOM.type === 'select-one') {
			if (["text", "textarea", "hidden", "number"].indexOf(elDOM.type) >= 0) {
				newVal = elDOM.value == "" ? "-9" : elDOM.value;
			}
			// multiselect
			if (elDOM.type === "select-multiple") {
				newVal = instrument.getSelectValues(<HTMLSelectElement>elDOM);
			}
			elDOM.dispatchEvent(new Event("afterChange"));
		}
		return newVal;
	},

	// recheck if something has changed - clicked back
	disableByCondition: function (): void {
		const keys = instrument.questionsOrder;
		for (const element of keys) {
			const key = element;
			if (instrument.questions[key].skip) {
				continue;
			}

			const is = instrument.questions[key].active();

			if (is) {
				try {
					if (instrument.questions[key].type == "radio") {
						// verificam daca nu este readonly, altfel nu il mai activam
						const make = !!instrument.questions[key].readonly;
						instrument.questions[key].disabled = make;
						instrument.questions[key].value = instrument.enableRadioElement(key, make);
					// } else if (key != "codchest" && key != "uat_siruta" && key != "jud_siruta") { // nu mai e nevoie dar ca exemplu
					} else {
						// verificam daca nu este readonly, altfel nu il mai activam
						const make = !!instrument.questions[key].readonly;
						instrument.questions[key].disabled = make;
						instrument.questions[key].value = instrument.enableElement(key, make);
					}
				} catch (err) {
					console.log(key);
					throw new Error(err);
				}
			} else if (instrument.questions[key].type == "radio") {
				instrument.enableRadioElement(key, true);
				instrument.questions[key].disabled = true;
				instrument.questions[key].value = "-7";
			} else {
				instrument.enableElement(key, true);
				instrument.questions[key].disabled = true;
				instrument.questions[key].value = "-7";
			}
		}
	},
	removeErrorStyle: function (name: string): void {
		if (instrument.questions[name].type == "radio") {
			const el = <HTMLElement>document.getElementsByName(name)[0].parentNode.parentNode;
			el.classList.remove("overrideBorder");
		} else {
			document.getElementById(name).classList.remove('inputErrorStyle');
		}
	},
	debuging: function (): void {
		// Debugging
		const debug = document.getElementById("debugForm");
		if (debug !== null) {
			debug.addEventListener("click", function debug() {
				if (instrument.debug) {
					const allVariables = document.querySelectorAll(".debugSpan");
					allVariables.forEach((element) => {
						element.remove();
					});
					instrument.debug = false;
				} else {
					for (const item of instrument.questionsOrder) {
						if (instrument.questions[item].type === "radio") {
							const rEl = document.querySelectorAll("input[name=" + item + "]");
							if (rEl.length != 0) {
								rEl.forEach((element: HTMLInputElement) => {
									const span = document.createElement("span");
									span.innerText = instrument.questions[item].name + " | " + element.value;
									span.classList.add("debugSpan");
									instrument.insertAfter(element, span);
								});
							}
						}
						if (["input", "number", "double", "checkbox", "select", "textarea"].indexOf(instrument.questions[item].type) >= 0) {
							const el = document.getElementById(item);
							if (el !== null) {
								const span = document.createElement("span");
								span.innerText = instrument.questions[item].name;
								span.classList.add("debugSpan");
								instrument.insertAfter(el, span);
							}
						}
					}
					instrument.debug = true;
				}
			});
		}
	},
	// https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
	insertAfter: function (referenceNode: Node, newNode: Node): void {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	},
	//https://stackoverflow.com/questions/11821261/how-to-get-all-selected-values-from-select-multiple-multiple
	getSelectValues: function (select: HTMLSelectElement): string {
		const result = [];
		const options = select?.options;

		for (let i = 0, iLen = options.length; i < iLen; i++) {
			const opt = options[i];

			if (opt.selected) {
				result.push(opt.value || opt.text);
			}
		}

		if (result.length > 0) {
			return result.join(",");
		} else {
			// nothing selected
			return "-9";
		}
	},

	processMyForm: function (type: string): boolean {
		// default este partial
		if (type === "finalizeaza") {
			for (const key in instrument.questions) {
				const question = instrument.questions[key];

				if (question.skip) {
					continue;
				}
				// am scos  && instrument.questions[key].disabled != 1
				// pentru ca exista input-uri disabled (cum sunt totalurile) care pot fi diferite de nu stiu ce alt camp si au eroare...
				// aici detectez ca are eroare cu .error insa nu mai intra in if() pentru ca .disabled este 1, nu != 1
				if ((question.value === "" || Number(question.value) == -9 || question.error != "") && !question.hidden) {
					if (question.type == "radio") {
						const rEl = <HTMLInputElement>document.getElementsByName(question.name)[0].parentNode.parentNode;
						rEl.classList.add("overrideBorder");
					} else {
						document.getElementById(question.name).classList.add('inputErrorStyle');
					}
					if (question.order == 0) {
						instrument.jumpToNextElement(question.order);
					} else {
						instrument.jumpToNextElement(question.order - 1);
					}
					return false;
				}
			}
			instrument.status = "Finalizat";
		}

		// custom validation
		if (!instrument.validateInstrument(instrument.questions)) {
			return;
		}


		const valori: { [id: string]: { value: string } } = {};
		for (const key in instrument.questions) {
			valori[key] = {
				value: instrument.questions[key].value,
			};
		}
		instrument.saveInstrument({
			instrument_id: instrument.instrumentID,
			status: instrument.status,
			questions: valori,
		});
	},

	// ========== HELPERS =============================
	//================================================
	hasValue: function (item) {
		if (instrument.questions[item].value != "-7") {
			if (instrument.questions[item].type == "checkbox") {
				return instrument.questions[item].value == "0";
			}
			if (instrument.questions[item].type == "input") {
				return instrument.questions[item].value == "" || instrument.questions[item].value == "-9";
			}
		}
		// is disable so we do not care
		return false;
	},

	setOnlyNumbers: function (item: string): void {
		instrument.setInputFilter(document.getElementById(item), function (value: string): boolean {
			return /^\d*$/.test(value);
		});
	},
	setOnlyNumbersWithMinus: function (item: string): void {
		instrument.setInputFilter(document.getElementById(item), function (value) {
			return /^-?\d*$/.test(value);
		});
	},
	setOnlyDouble: function (item) {
		instrument.setInputFilter(document.getElementById(item), function (value) {
			if (value.endsWith("..") || value.endsWith(".,")) {
				const x = value.split("");
				x.splice(-1);
				value = x.join("");
				(<HTMLInputElement>document.getElementById(item)).value = value;
				return false;
			}
			if (value.endsWith(",")) {
				const x = value.split("");
				x.splice(-1);
				x.push(".");
				value = x.join("");
				(<HTMLInputElement>document.getElementById(item)).value = value;
			}
			if (value === "" || value.endsWith(".")) {
				return true;
			}
			return /^\d*\.?\d{1,2}$/.test(value);
		});
	},
	setInputFilter: function (textbox: HTMLElement, inputFilter: (value: string) => boolean): void {
		// https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
		// Restricts input for the given textbox to the given inputFilter function.
		["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
			textbox.addEventListener(event, function () {
				if (inputFilter(this.value)) {
					this.oldValue = this.value;
					this.oldSelectionStart = this.selectionStart;
					this.oldSelectionEnd = this.selectionEnd;
					// TODO -- check next line if it is okay: https://eslint.org/docs/rules/no-prototype-builtins
				} else if (Object.prototype.hasOwnProperty.call(this, "oldValue")) {
					this.value = this.oldValue;
					this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
				} else {
					this.value = "";
				}
			});
		});
	},
};

export default instrument;
