/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";

        $scope.$watch(function () {
            $scope.vf = {
                name: getVF('name'),
                password: getVF('password'),
            };
        });

        function getVF(field) {
            var form = $scope.form1;
            if (!form) {
                return false;
            }

            return form[field].$invalid && (form.$submitted || form[field].$touched);
        }

        //console.log(!!$scope.form1);

        $scope.run = function () {

            if ($scope.form1.name.$invalid) {
                console.log("INVALID: name");
                return;
            }

            if ($scope.form1.$invalid) {
                console.log("INVALID: form");
                return;
            }

            console.log("VALID");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
