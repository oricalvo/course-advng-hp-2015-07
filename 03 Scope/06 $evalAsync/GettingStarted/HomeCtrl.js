/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello";
        $scope.counter = 12;

        $scope.$watch("counter",
            function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                $scope.$evalAsync(function () {
                    console.log("CHANGED: counter");
                });
            });

        $scope.$watch("message", 
            function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                console.log("CHANGED: message");
            });

        $scope.run = function () {
            $scope.counter++;
            $scope.message = "XXX";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
