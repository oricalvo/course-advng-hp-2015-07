(function () {

    function HomeCtrl($scope) {
        $scope.title1 = "Dir 1";
        $scope.title2 = "Dir 2";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
