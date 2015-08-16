(function () {
    angular.module("MyApp").factory("Logger", function () {

        var myData = [];

        function debug(message) {
            console.log("Debug: " + message);
        }

        function warn(message) {
        }

        function error(message) {
        }

        return {
            debug: debug,
            warn: warn,
            error: error,
        };

    });
})();
