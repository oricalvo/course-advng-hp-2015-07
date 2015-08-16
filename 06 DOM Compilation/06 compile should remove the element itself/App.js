angular.module("MyApp", []).run(function ($compile, $rootScope) {
    $rootScope.nums = [1, 2, 3];
});

angular.module("MyApp").directive("dir1", function () {
    var ddo = {
        restrict: "E",
        compile: function (element) {
            console.log("dir:compile");

            element.remove();

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
