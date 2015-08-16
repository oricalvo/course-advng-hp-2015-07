/// <reference path="angular.js" />

angular.module("MyApp", [])
    .config(function ($locationProvider, $provide) {
        $locationProvider.html5Mode(true);

        $provide.value("myProvider", $locationProvider);
    });
