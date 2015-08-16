/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope, $location) {
        //Logger.debug("controller");

        $scope.message = "Hello Angular";

        $scope.run = function () {
            $location.path("blabla");
        }

        $scope.changeMode = function () {
            myProvider.html5Mode(false);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
