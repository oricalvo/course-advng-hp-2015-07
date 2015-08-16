/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello";

        $scope.items = [{ id: 1 }, { id: 2 }, { id: 3 }];

        $scope.run = function () {
            //$scope.items.push(4);

            //$scope.items[0] = 5;

            $scope.items[0] = { id: 1 };
        }

        $scope.$watchCollection("items", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log("CHANGED: ");
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
