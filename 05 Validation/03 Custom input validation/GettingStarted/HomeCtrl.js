/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {

        $scope.birthday = new Date(2000, 0, 1);

        $scope.run = function () {

            if ($scope.form1.$invalid) {
                console.log("INVALID: form");
                return;
            }

            console.log("VALID");

            console.log("Save to server: " + (typeof $scope.birthday));
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
