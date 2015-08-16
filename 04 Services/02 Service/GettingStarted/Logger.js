(function () {

    function Logger($http) {
        console.log("Logger.ctor");

        this.$http = $http;
    }

    Logger.prototype.debug = function (message) {
        console.log("Debug: " + message);
    }

    Logger.prototype.warn = function () {
    }

    Logger.prototype.error = function () {
    }

    angular.module("MyApp").service("Logger", Logger);
})();
