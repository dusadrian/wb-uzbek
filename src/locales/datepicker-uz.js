/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Adrian Dusa (dusa.adrian@gmail.com). */
( function( factory ) {
	"use strict";

	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
} )( function( datepicker ) {
"use strict";

datepicker.regional.uz = {
	closeText: "Bajarildi",
	prevText: "Oldingi ",
	nextText: " Keyingisi",
	currentText: "Bugun",
	monthNames: [ "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr" ],
	monthNamesShort: [ "Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek" ],
	dayNames: [ "Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba" ],
	dayNamesShort: [ "Yak", "Dus", "Ses", "Cho", "Pay", "Jum", "Sha" ],
	dayNamesMin: [ "Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh" ],
	weekHeader: "Hafta",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.uz );

return datepicker.regional.uz;

} );
