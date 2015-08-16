/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {
        $scope.titleName = "Name";
        $scope.titleEMail = "E-Mail";

        $scope.contacts = [
            { id: 1, name: "Ori", email: "ori@gmail.com" },
            { id: 2, name: "Roni", email: "roni@gmail.com" },
        ];
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
