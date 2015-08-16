angular.module("MyApp", []).run(function ($compile, $rootScope) {
    $rootScope.nums = [1, 2, 3];
});

angular.module("MyApp").directive("noCompile", function () {
    console.log("divDirective: ctor");
    var ddo = {

        restrict: "A",
        terminal: true,
        compile: function (element, attrs) {
            console.log("dir:compile");

            return function link(scope, element) {
                console.log("dir:link");
            }
        }
    };

    return ddo;
});


//$(function () {
//    $("input").datepicker();
//});
