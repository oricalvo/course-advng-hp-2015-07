angular.module("MyApp", []).run(function ($compile, $rootScope) {
    $rootScope.nums = [1, 2, 3];
});

angular.module("MyApp").directive("datepicker", function () {
    console.log("divDirective: ctor");
    var ddo = {

        restrict: "E",
        template: "<input/>",
        replace: true,
        compile: function (element, attrs) {
            console.log("dir:compile");

            return function link(scope, element) {
                element.datepicker();

                console.log("dir:link");
            }
        }
    };

    return ddo;
});


//$(function () {
//    $("input").datepicker();
//});
