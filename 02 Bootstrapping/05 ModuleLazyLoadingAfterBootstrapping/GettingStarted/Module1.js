/// <reference path="angular.js" />

define([], function () {
    var module1 = angular.module("Module1", [])
        .config(function () {
            console.log("Module1.config");
        })
        .run(function () {
            console.log("Module1.run");
        })
        .provider("provider2", function () {
            console.log("Module1.provider2");

            this.$get = function () {
                return {};
            };
        })
        .service("lazyLoadedService", function () {
            this.run = function () {
                console.log("lazyLoadedService.run");
            }
        });

    return module1;
});


