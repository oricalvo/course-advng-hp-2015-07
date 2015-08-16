/// <reference path="angular.js" />


angular.module("MyApp", [])
    .config(function ($injector) {
        $injector.get("$locationProvider");
    })
    .run(function ($injector) {

        f.$inject = ["$http"];
        function f(a) {
            console.log("Hello F");
            console.log(!!a);
        }

        $injector.get("$location");

        $injector.invoke(f);

        $injector.invoke(["$http", function (a) {
            console.log("Hello Anon");
            console.log(!!a);
        }]);
    });

