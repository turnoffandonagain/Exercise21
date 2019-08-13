sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/m/Button"
], function(UIComponent, Button) {
	"use strict";

	return UIComponent.extend("sap.sapx05.components.button.Component", {

		metadata: {
			properties: {
				text: "string"
			}
		},

		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
		},
		createContent: function() {
			this.oButton = new Button("btn");
			this.oButton.attachPress(function() {
    			 var firstName = sap.ui.getCore().getModel().getProperty("/firstName");
        		 var lastName = sap.ui.getCore().getModel().getProperty("/lastName");
        		 var message = "First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n";
        		 alert(message);
    		});
    		return this.oButton;
		},
		setText: function(sText) {
			this.oButton.setText(sText);
			this.setProperty("text",sText);
			return this;
		}
	});
	
});