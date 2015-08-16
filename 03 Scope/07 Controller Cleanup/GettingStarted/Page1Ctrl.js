/// <reference path="angular.js" />

(function () {

    function Page1Ctrl($scope, $rootScope) {
        console.log("Page1");

        var off = $rootScope.$on("hp", function () {
            console.log("HP: page1");
        });

        $scope.$on("$destroy", function () {
            off();
        });
    }

    angular.module("MyApp").controller("Page1Ctrl", Page1Ctrl);

})();
