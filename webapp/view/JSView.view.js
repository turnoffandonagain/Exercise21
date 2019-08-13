sap.ui.jsview("sap.sapx05.view.JSView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.sapx05.webapp.view.JSView
	 */
	getControllerName: function() {
		return "sap.sapx05.controller.JSView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf sap.sapx05.webapp.view.JSView
	 */
	createContent: function(oController) {
		return new sap.m.Page({
			title: "Exercise 5 - JavaScript View",
			content: [
               new sap.m.Label({id:"lblFirstName", text:"Javascript First Name:"}),
               new sap.m.Input({id:"inpFirstName", value:""}),
               new sap.m.Label({id:"lblLastName", text:"Javascript Last Name:"}),
               new sap.m.Input({id:"inpLastName", value:""})
			]
		});
	}

});