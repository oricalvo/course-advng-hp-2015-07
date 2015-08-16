/// <reference path="angular.js" />

define(["MyApp"], function (myApp) {

    function DataService() {
        console.log("DataService.ctor");

        this.getData = function () {
            console.log("DataService.getData");
        }
    }

    myApp.service("dataService", DataService);

});
