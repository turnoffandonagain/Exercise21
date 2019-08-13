sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/sapx05/util/formatter",
	"sap/m/MessageBox"
], function(Controller,formatter,MessageBox) {
	"use strict";

	return Controller.extend("sap.sapx05.controller.View1", {
	  formatter: formatter,
	  onInit: function() {
	  	var data = {};
	  	data.firstName="Goode";
	  	data.lastName="Student";
	  	data.date = new Date();
	  	var model = new sap.ui.model.json.JSONModel(data);
	  	model.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
	  	sap.ui.getCore().setModel(model);
	  	
	  	var selectionData = {
		"selection":"Please Select",
		"data": [{"text":"Alisha","key":"Alisha"},
				{"text":"Burt","key":"Burt"},
				{"text":"Candice","key":"Candice"},
				{"text":"Donald","key":"Donald"},
				{"text":"Erika","key":"Erika"},
				{"text":"Frank","key":"Frank"},
				{"text":"Goode","key":"Goode"}]
		};
		var model2 = new sap.ui.model.json.JSONModel(selectionData);
		model2.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
		this.byId("inpFirstName").setModel(model2, "selections");
		sap.ui.getCore().getModel().setData({
			firstName: this.byId("inpFirstName").getModel("selections").getProperty("/selection")
		}, true);
		
		// Exercise 14
		var uri = "/destinations/Northwinds/V3/northwind/northwind.svc/";
		var model3 = new sap.ui.model.odata.ODataModel(uri, true);
		this.byId("oDataTable").setModel(model3);
		
		// Exercise 17
		    // Add in section to add the sorter and filter
		//var itemBinding = sap.ui.getCore().byId("idView1--inpFirstName").getBinding("items");
		var itemBinding = this.getView().byId("inpFirstName").getBinding("items");
		var sorter=[];
		    // "text" is the field to sort on, true - is for descending, false is for no grouping
		sorter.push(new sap.ui.model.Sorter("text",true,false));
		itemBinding.sort(sorter);
		    // As a second part of the exercise, we will add a filter to only show names in the list from "D" or later
		var filter = [];
		filter.push(new sap.ui.model.Filter("text",sap.ui.model.FilterOperator.BT, "D", "H"));
		itemBinding.filter(filter);
		
		// Exercise 18
		var tableData = { "teamMembers":[
            {"firstName":"Clark", "lastName":"Kent", "gender":"male", "occupation":"Superman"},
            {"firstName":"Donald", "lastName":"Duck", "gender":"male", "occupation":"a millionare"},
            {"firstName":"Marge", "lastName":"Simpson", "gender":"female", "occupation":"a housewife"},
            {"firstName":"Jane", "lastName":"Marple", "gender":"female", "occupation":"a detective"},
            {"firstName":"Tony", "lastName":"Stark", "gender":"male", "occupation":"Ironman"},
            {"firstName":"James", "lastName":"Kirk", "gender":"male", "occupation":"a Starfleet captain"},
            {"firstName":"Hermione", "lastName":"Granger", "gender":"female", "occupation":"a witch"}]};
        var model4 = new sap.ui.model.json.JSONModel(tableData);
      //  sap.ui.getCore().byId("idView1--calcTable").setModel(model4);
      this.getView().byId("calcTable").setModel(model4);
            // New code to calculate the number of rows in this table
       // var count = sap.ui.getCore().byId("idView1--calcTable").getBinding("rows").getLength();
        var count = this.getView().byId("calcTable").getBinding("rows").getLength();
       // sap.ui.getCore().byId("idView1--calcTable").setVisibleRowCount(count);
         this.getView().byId("calcTable").setVisibleRowCount(count);
        
        // Exercise 19
        // var i18nModel = new sap.ui.model.resource.ResourceModel({
        // 	bundleUrl: "./i18n/i18n.properties",
        // 	locale: sap.ui.getCore().getConfiguration().getLanguage()
        // });
        // sap.ui.getCore().setModel(i18nModel,"i18n");
	  },
	  onChange: function(oControlEvent) {
	  	sap.ui.getCore().getModel().setProperty("/lastName",
	  	  formatter.formatTitleCase(sap.ui.getCore().getModel().getProperty("/lastName")));
	  },
      onBtnClick: function() {
      	var firstName = this.byId("inpFirstName").getValue();
		var lastName = this.byId("inpLastName").getValue();
		//var HTMLfirstName = sap.ui.getCore().byId("idView1--vHTML--inpFirstName").getValue();
		var HTMLfirstName = this.getView().byId("vHTML--inpFirstName").getValue();
		//var HTMLlastName = sap.ui.getCore().byId("idView1--vHTML--inpLastName").getValue();
		var HTMLlastName = this.getView().byId("vHTML--inpLastName").getValue();
		//var JSfirstName = sap.ui.getCore().byId("inpFirstName").getValue(); // This should really be idView1--vJS--inpFirstName
		var JSfirstName = this.getView().byId("inpFirstName").getValue(); // This should really be idView1--vJS--inpFirstName
		
		//var JSlastName = sap.ui.getCore().byId("inpLastName").getValue(); // This should really be idView1--vJS--inpLastName
		var JSlastName = this.getView().byId("inpLastName").getValue(); // This should really be idView1--vJS--inpLastName
		
		//var JSONfirstName = sap.ui.getCore().byId("idView1--vJSON--inpFirstName").getValue();
		var JSONfirstName = this.getView().byId("vJSON--inpFirstName").getValue();
		//var JSONlastName = sap.ui.getCore().byId("idView1--vJSON--inpLastName").getValue();
		var JSONlastName = this.getView().byId("vJSON--inpLastName").getValue();
		
		var message = this.getView().getModel("i18n").getProperty("FirstName") + " " + firstName + "\n" +
		              this.getView().getModel("i18n").getProperty("LastName")  + " " + lastName + "\n" + 
		               "HTML First: " + HTMLfirstName + "\n" + "HTML Last: " + HTMLlastName + "\n" +
		               "JS First: " + JSfirstName + "\n" + "JS Last: " + JSlastName + "\n" +
		               "JSON First: " + JSONfirstName + "\n" + "JSON Last: " + JSONlastName;
		MessageBox.show(message, {
			icon: MessageBox.Icon.SUCCESS, // default
			title: "Button Pressed",
			actions: MessageBox.Action.CLOSE,
			verticalScrolling: false,
			horizontalScrolling: false
		});
      }
	});

});