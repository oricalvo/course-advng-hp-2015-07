/// <reference path="angular.js" />

define([], function () {

    var myApp = angular.module("MyApp", [])
        .config(function () {
            console.log("MyApp.config");
        })
        .run(function () {
            console.log("MyApp.run");
        })
        .provider("provider1", function () {
            console.log("MyApp.provider1");

            this.$get = function () {
                return {};
            };
        });

    return myApp;
});


