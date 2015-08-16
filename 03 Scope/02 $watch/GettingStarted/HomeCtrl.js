/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello";

        $scope.data = undefined;

        $scope.$watch("data", function () {
        });

        $scope.$watch("message", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log("CHANGE: " + oldValue + " --> " + newValue);
        });

        window.addEventListener("hashchange", function () {
            console.log("Hash changed");

            $scope.message = "Hash Changed";

            $scope.$apply();
        });

        $scope.$watch(
            function () {
                return window.location.hash;
            },
            function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                console.log("CHANGE: " + oldValue + " --> " + newValue);
            });

        $scope.run = function () {
            //$scope.message += "X";

            window.location.hash = "blabla";

            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
