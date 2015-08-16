(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Ng";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
