/// <reference path="angular.js" />

(function () {

    function HomeCtrl($timeout) {
        this.name = "Hello Angular";
        this.$timeout = $timeout;
    }

    HomeCtrl.prototype.sayHello = function () {
        alert("Hello " + this.name);

        this.$timeout(function () {
        }, 1500);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
