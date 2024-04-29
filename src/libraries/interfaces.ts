export interface QuestionType {
	name: string;
	type: string;
	value: string;
	disabled: boolean;
	hidden: boolean;
	readonly: boolean;
	order: number;
	active: () => boolean;
	error: string;
	checked?: number;
	skip?: boolean;
}

export interface QuestionObjectType {
	[name: string]: QuestionType
}
export interface SaveInstrumentType {
	instrument_id: number;
	uuid?: string;
	status: string;
	questions: { [id: string]: { value: string } };
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	extras?: any;
	table?: string;
}

export interface InstrumentObjectType {
	debug: boolean;
	instrumentID: number;
	status: string;
	questions: QuestionObjectType;
	questionsOrder: Array<string>;
	trimis: number;
	saveInstrument?: (obj: SaveInstrumentType) => void;
	validateInstrument?: (instrument: QuestionObjectType) => boolean;
	start: (i: number, trimis: number, saveFn: (obj: SaveInstrumentType) => void, validateFn: (obj: QuestionObjectType) => void) => void;
	setQuestions: (questions: QuestionObjectType, order: Array<string>) => void;
	checkEverything: () => void;
	setQuestionValue: (name: string, valoare: string) => void;
	seteazaValoareElement: (name: string, valoare: string, trigger?: boolean) => void;
	checkValue: (event: Event) => void;
	jumpToNextElement: (order: number) => boolean;
	getNextJumpName: (current: QuestionType) => string;
	enableRadioElement: (group: string, val: boolean) => string;
	enableElement: (name: string, val: boolean) => string;
	disableByCondition: () => void;
	removeErrorStyle: (name: string | Array<string>) => void;
	debuging: () => void;
	insertAfter: (referenceNode: Node, newNode: Node) => void;
	getSelectValues: (select: HTMLSelectElement) => string;
	processMyForm: (type: string) => boolean;
	hasValue: (type: string) => boolean;
	setOnlyNumbers: (type: string) => void;
	setOnlyNumbersWithMinus: (type: string) => void;
	setOnlyDouble: (type: string) => void;
	setInputFilter: (element: HTMLElement, fn: (value: string) => boolean) => void;
}

export interface ChestionarType {
	id: number;
	utilizator_id: number;
	judet_id: number;
	status: string;
	uuid: string;
	creat: string;
	actualizat: string;
	completate_id: number;
	variabila: string;
	valoare: string;
}

export interface SaveInstrumentEvenimenteType {
	instrumentID: number;
	uuid?: string;
	payload: { participanti: EvenimentParticipanti[] };
	status: string;
	questions: { [id: string]: { value: string } };
}
export interface SaveInstrumentRezidentProfilType {
	instrumentID: number;
	uuid?: string;
	payload: {
		traseu: TraseuInterface[];
		rezidentID: string;
		rezidentUUID: string;
	};
	status: string;
	questions: { [id: string]: { value: string } };
}

export interface SaveInstrumentRezidentPreconditiiType {
	instrumentID: number;
	uuid?: string;
	payload: {
		rezidentID: string;
		rezidentUUID: string;
	};
	status: string;
	questions: { [id: string]: { value: string } };
}

export interface SaveInstrumentRezidentNecesarType {
	instrumentID: number;
	uuid?: string;
	payload: {
		rezidentID: string;
		rezidentUUID: string;
	};
	status: string;
	questions: { [id: string]: { value: string } };
}

export interface ListaEvenimente {
	id: number;
	min_data1: string;
	min_data2: string;
	min_etapa: string;
	min_tip: string;
	status: string;
}
export interface Eveniment {
	id: number;
	uuid: string;
	status: string;
	min_data1: string;
	min_data2: string;
	min_etapa: string;
	min_tip: string;
	min_inst: string;
	min_adrs: string;
	min_mod1: string;
	min_mod2: string;
	min_mod3: string;
	min_topics: string;
	min_r: string;
	min_fr: string;
	min_datac: string;
	min_telr: string;
	creat: string;
	actualizat: string;
}
export interface EvenimentParticipanti {
	id?: number;
	uuid: string;
	uuid_eveniment?: string;
	id_eveniment?: string;
	nume: string;
	categorie: string;
}

// Rezidenti ======================
export interface SaveInstrumentRezidentType {
	instrumentID: number;
	uuid?: string;
	payload?: { [id: string]: string };
	status: string;
	questions: { [id: string]: { value: string } };
}
export interface ListaRezidenti {
	id: number;
	uuid: string;
	rez1: string;
	rez2: string;
	rez4: string;
	rez5: string;
	rez7: string;
	rez_a5?: string;
	rez_ax?: string;
}

export interface SaveInstrumentPersonalType {
	instrumentID: number;
	uuid?: string;
	status: string;
	questions: { [id: string]: { value: string } };
}

export interface ListaPersonal {
	id: number;
	uuid: string;
	ru1: string;
	ru2: string;
	ru3: string;
	ru4: string;
	ru5: string;
	creat?: string;
	actualizat?: string;
}
export interface ListaPersonalAnexe {
	id: number,
	uuid: string,
	status: string
}
export interface Personal {
	id: number;
	uuid: string;
	ru1: string;
	ru2: string;
	ru3: string;
	ru4: string;
	ru5: string;
	creat: string;
	actualizat: string;
}
// TODO -- to be updated x2
export interface PersonalAnexa21 {
	uuid: string
}
export interface PersonalAnexa23 {
	uuid: string
}


export interface Rezident {
	id: number;
	uuid: string;
	rez1: string;
	rez2: string;
	rez9_dn: string;
	rez4: string;
	rez5: string;
	rez7: string;
	creat: string;
	actualizat: string;
}

export interface ListaRezidentiProfil {
	id: number,
	uuid: string,
	status: string
}

export interface ListaRezidentiPreconditii {
	id: number,
	uuid: string,
	status: string,
	cond1: string,
	cond2: string,
	cond3: string
}

export interface JudeteType {
	[name: string]: SirutaType
}

export interface SirutaType {
	siruta: Array<string>,
	nume: Array<string>
}

export interface JudType {
	[key: string]: {
		nume: string;
		localitati: {
			[key: string]: string
		}
		[key: string]: string | {[key: string]: string}
	}
}

export interface RezidentProfilTraseu {
	uuid: string,
	rez12_l1: string;
	rez12_a1: string;
	rez12_l2: string;
	rez12_a2: string;
	rez12_c: string;
	rez12_d: string;
	rez12_e: string;
}
export interface TraseuInterface {
	uuid: string;
	rez12_l1: string;
	rez12_l1_watch?: string;
	rez12_a1: string;
	rez12_a1_watch?: string;
	rez12_l2: string;
	rez12_l2_watch?: string;
	rez12_a2: string;
	rez12_a2_watch?: string;
	rez12_c: string;
	rez12_c_watch?: string;
	rez12_d: string;
	rez12_d_watch?: string;
	rez12_e: string;
	rez12_e_watch?: string;
	[key: string]: string;
}

interface MainSectionStatus {
	section: string;
	status: string;
}
export interface PlanDI1Sections {
	section1: MainSectionStatus[];
	section2: MainSectionStatus[];
	section3: MainSectionStatus[];
}
export interface ListaTraseeRezidenti {
	uuid_profil: string;
	rez12_l1: string;
	rez12_a1: string;
	rez12_l2: string;
	rez12_a2: string;
}

export interface SaveInstrumentAnexePersonal {
	uuid?: string;
	instrumentID: number;
	status: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload?: any;
	questions: { [id: string]: { value: string } };
}

export interface RUV23e_altul {
	ruv7e_altul: string;
}

export interface NevoiLocuinte {
	uuid: string;
	nl1: string;
	nl2: string;
	nl3: string;
	nl4: string;
	nl5: string;
	nl6: string;
	nl7: string;
	nl8: string;
	nl9: string;
	nl10: string;
	nl11: string;
	nl12: string;
	[key: string]: string;
}

export interface SectiuniNevoiLocuinte {
	existente?: NevoiLocuinte[];
	noi?: NevoiLocuinte[];
	sterse?: Array<string>
}
