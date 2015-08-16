/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {
        $scope.taTime = new Date();

        $scope.XXX = "Sub Title";

        $scope.change = function () {
            $scope.taTime = new Date();
        }

        $scope.onTick = function () {
            //console.log("Tick");
            $scope.taTime = new Date();
        }

        setTimeout(function () {
            $scope.clock1.stop();
        }, 100);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
