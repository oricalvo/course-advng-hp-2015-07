(function () {

    //function Logger(level) {
    //    this.level = level;
    //}

    //Logger.prototype.debug = function (message) {
    //    console.log("Debug " + this.level + ": " + message);
    //}

    //function LoggerProvider() {
    //    this.level = 0;
    //}

    //LoggerProvider.prototype.changeLogLevel = function (level) {
    //    this.level = level;
    //}

    //LoggerProvider.prototype.$get = function () {
    //    return new Logger(this.level);
    //}

    //angular.module("MyApp").provider("Logger", LoggerProvider);

    angular.module("MyApp").provider("Logger", function () {

        console.log("Provider ctor");

        var level;

        this.$get = function () {
            console.log("Logger ctor");

            return {
                debug: function (message) {
                    console.log("Debug " + level + ": " + message);
                }
            };
        }

        this.changeLogLevel = function (_level) {
            level = _level;
        }
    });

})();

