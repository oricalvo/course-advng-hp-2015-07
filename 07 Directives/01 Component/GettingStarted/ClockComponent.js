/// <reference path="angular.js" />

angular.module("MyApp").directive("clock", function () {

    function ClockController($scope, $attrs, $parse, $interpolate) {

        if ($attrs.name) {
            var fn = $parse($attrs.name);
            if (fn.assign) {
                fn.assign($scope.$parent, this);
            }
        }

        //if ($attrs.model) {
        //    var fn = $parse($attrs.model);



        //    $scope.$watch(fn, function (newValue) {
        //        $scope.title = fn($scope);
        //    });
        //}

        //var fn = $interpolate($attrs.subTitle);
        //$scope.subTitle = fn($scope.$parent);

        $scope.$parent["api"] = {
            stop: function () {
            },
            start: function () {
            }
        };

        setInterval(function () {
            $scope.$apply(function () {
                $scope.onTick();
            });
        }, 1000);

        this.stop = function () {
            console.log("Stop was requested");
        }
    }

    var ddo = {
        templateUrl: function () { return "clock.html"; },
        controller: ClockController,
        scope: {
            title: "=",
            subTitle: "@",
            onTick: "&",
            onInit: "&",
        },
    };

    //function wrapComponent(ddo) {
    //    var templateUrl = ddo.templateUrl;

    //    ddo.templateUrl = function () {
    //        console.log("Component is downloaded");

    //        return templateUrl;
    //    }

    //    var controller = ddo.controller;
    //    ddo.controller = function () {

    //        console.log("Component init completed");

    //    }

    //    return ddo;
    //}

    return ddo;
});

