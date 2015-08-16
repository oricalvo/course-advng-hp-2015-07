/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope, $rootScope) {
        $scope.page = "page1";

        $scope.run = function () {
            $scope.page = ($scope.page == "page1" ? "page2" : "page1");
        }

        $scope.emit = function () {
            $rootScope.$emit("hp");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
