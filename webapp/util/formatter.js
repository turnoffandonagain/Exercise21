sap.ui.define([], function() {
	"use strict";
	return {
		formatTitleCase: function(sVal) {
			if (!sVal) {
				return;
			}
			return sVal.replace(/\w\S*/g,
				function(txt) {
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
		},
		generateDescription: function(gender, firstName, lastName, occupation) {
			if (gender && firstName && lastName && occupation) {
				if (gender === "male") {
					return "Mr. " + firstName + " " + lastName + " works as " + occupation;
				} else {
					return "Ms. " + firstName + " " + lastName + " works as " + occupation;
				}
			}
			return null;
		}
	};
});