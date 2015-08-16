/// <reference path="angular.js" />

(function () {

    function HomeCtrl() {
        BaseCtrl.call(this);

        this.message = "Hello Angular";
    }

    HomeCtrl.prototype = Object.create(BaseCtrl.prototype);

    HomeCtrl.prototype.run = function () {
        this.$location.path("blabla");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
