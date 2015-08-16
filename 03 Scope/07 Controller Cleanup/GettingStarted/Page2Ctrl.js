/// <reference path="angular.js" />

(function () {

    function Page2Ctrl($scope, $rootScope) {
        console.log("Page2");

        var off = $rootScope.$on("hp", function () {
            console.log("HP: page2");
        });

        $scope.$on("$destroy", function () {
            off();
        });
    }

    angular.module("MyApp").controller("Page2Ctrl", Page2Ctrl);

})();
