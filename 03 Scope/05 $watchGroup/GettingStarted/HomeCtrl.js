/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello";
        $scope.counter = 12;

        //$scope.$watchGroup(["message", "counter"], function (newValue, oldValue) {
        //    if (newValue == oldValue) {
        //        return;
        //    }

        //    console.log("CHANGED: ");
        //});

        var obj = {};
        $scope.$watchCollection(
            function () {
                obj.message = $scope.message;
                obj.counter = $scope.counter;

                return obj;
            },
            function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                console.log("CHANGED: ");
            });

        $scope.run = function () {
            //$scope.counter++;

            $scope.message = "XXX";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
