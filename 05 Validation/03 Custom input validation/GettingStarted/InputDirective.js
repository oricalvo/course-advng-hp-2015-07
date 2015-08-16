(function () {

    angular.module("MyApp").directive("input", function () {
        var ddo = {
            restrict: "E",
            require: "?ngModel",
            compile: function (element, attrs) {
                if (attrs.type == "date") {
                    attrs.type = "text";
                    element.attr("type", "text");
                }

                return function link(scope, element, attrs, ngModel) {

                    ngModel.$validators.date = function (value) {
                        //console.log("DateDirective: " + value);

                        if (value instanceof Date) {
                            return true;
                        }

                        return false;
                    }

                    ngModel.$parsers.push(function (value) {
                        if (value != "1/1/2000") {
                            return undefined;
                        }

                        return new Date();
                    });

                    ngModel.$formatters.push(function (modelValue) {
                        if (modelValue instanceof Date) {
                            return "1/1/2000";
                        }

                        return "";
                    });

                    console.log(!!ngModel);
                }
            }
        };

        return ddo;
    });

})();
