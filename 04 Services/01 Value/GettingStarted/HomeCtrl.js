/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope, Logger) {
        $scope.message = "Hello Angular";

        Logger.debug("diodiodhuidh");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
