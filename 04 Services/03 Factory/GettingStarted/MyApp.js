/// <reference path="angular.js" />

angular.module("MyApp", [])
    .value("Logger", window.Logger)
    .run(function (Logger) {
        Logger.debug("run");
    });
