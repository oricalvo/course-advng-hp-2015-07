/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope, $injector, DI) {
        $scope.run = function () {

            //DI.resolve("LazyService", function (lazyService) {
            //});

            DI.service("LazyService", function () {
            });

            var service = $injector.get("LazyService");
            console.log(!!service);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
