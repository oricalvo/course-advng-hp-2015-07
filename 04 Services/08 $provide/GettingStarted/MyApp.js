/// <reference path="angular.js" />


angular.module("MyApp", []).config(function ($provide) {
    $provide.value("DI", $provide);
});

