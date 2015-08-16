/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";

        $scope.run = function () {
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
