/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope, $injector, $http, $q) {
        $scope.run = function () {
            getData().then(function () {
                console.log("OK");

                getData().then(function () {
                    console.log("Second");
                }).catch(function (err) {
                    console.log("ERROR: " + err.message);
                });

            }).catch(function (err) {
                console.log("ERROR: " + err.message);
            });
        }

        var contacts = null;
        function getData() {
            if (contacts != null) {
                return $q.when(contacts);
            }

            return $http.get("/contacts.html").then(function (_contacts) {

                //return $q.reject(new Error("Invalid contacts returned from server"));
                

                //return [1, 2, 3];
                return contacts = _contacts;
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();

