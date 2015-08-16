/// <reference path="angular.js" />

define(["MyApp"], function (myApp) {

    function DataService() {
        this.getData = function () {
            console.log("DataService.getData");
        }
    }

    myApp.service("dataService", DataService);

});
