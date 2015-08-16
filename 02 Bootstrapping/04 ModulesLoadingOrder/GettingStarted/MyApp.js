/// <reference path="angular.js" />

define(["Module1"], function () {

    var myApp = angular.module("MyApp", ["Module1"])
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


