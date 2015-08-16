/// <reference path="angular.js" />

define(["MyApp", "DataService"], function (myApp) {

    function HomeCtrl($scope, dataService) {
        $scope.message = "Hello Angular";

        //dataService.getData();
    }

    myApp.controller("HomeCtrl", HomeCtrl);

});
