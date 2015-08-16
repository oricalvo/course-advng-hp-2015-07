/// <reference path="angular.js" />

angular.module("MyApp", [])
    .config(function ($locationProvider, $provide, LoggerProvider) {
        $locationProvider.html5Mode(true);

        LoggerProvider.changeLogLevel(2);

        $provide.value("myProvider", $locationProvider);
    })
    .run(function (blabla) {
    });


angular.module("MyApp").service("blabla", function () {
    console.log("blabla ctor");
});
