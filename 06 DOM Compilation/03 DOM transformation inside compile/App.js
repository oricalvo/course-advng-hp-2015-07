angular.module("MyApp", []).run(function ($compile, $rootScope) {
    $rootScope.nums = [1, 2, 3];
});

angular.module("MyApp").directive("input", function () {
    console.log("divDirective: ctor");
    var ddo = {

        restrict: "E",
        compile: function (element, attrs) {
            console.log("dir:compile");

            var hasDatepicker = attrs.hasOwnProperty("datepicker");

            return function link(scope, element) {
                if (hasDatepicker) {
                    element.datepicker();
                }

                console.log("dir:link");
            }
        }
    };

    return ddo;
});


//$(function () {
//    $("input").datepicker();
//});
