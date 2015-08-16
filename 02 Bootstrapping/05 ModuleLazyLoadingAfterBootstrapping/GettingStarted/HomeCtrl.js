/// <reference path="angular.js" />

define(["MyApp", "DataService"], function (myApp) {

    function HomeCtrl($scope, $injector, dataService) {
        $scope.message = "Hello Angular";

        //dataService.getData();

        $scope.lazyLoad = function () {
            require(["Module1"], function (module1) {
                console.log(!!module1);

                angular.lazyLoadModules([module1.name]);

                $injector.get("lazyLoadedService").run();
            });
        }
    }

    myApp.controller("HomeCtrl", HomeCtrl);

});
