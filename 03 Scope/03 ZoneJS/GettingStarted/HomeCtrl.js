/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {

        $scope.run = function () {
            setTimeout(function () {
                console.log("Inside setTimeout");

                $scope.message = "XXX";
            }, 1500);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
