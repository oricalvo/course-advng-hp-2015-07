angular.module("MyApp", []).run(function ($compile, $rootScope) {
});

angular.module("MyApp").directive("dir1", function () {
    var ddo = {
        restrict: "E",
        link: {
            pre: function () {
                console.log("dir1:preLink");
            },
            post: function () {
                console.log("dir1:postLink");
            },
        },
        controller: function () {
            console.log("dir1:controller");
        }

        /*compile: function (element) {
            console.log("dir1:compile");

            //return {
            //    pre: function () {
            //        console.log("dir1:preLink");
            //    },
            //    post: function () {
            //        console.log("dir1:postLink");
            //    }
            //};

            return function () {
                console.log("dir1:postLink");
            }
        }*/
    };

    return ddo;
});

angular.module("MyApp").directive("dir2", function () {
    var ddo = {
        restrict: "E",
        link: {
            pre: function () {
                console.log("dir2:preLink");
            },
            post: function () {
                console.log("dir2:postLink");
            },
        },
        controller: function () {
            console.log("dir2:controller");
        }
        /*compile: function (element) {
            console.log("dir2:compile");

            //return {
            //    pre: function () {
            //        console.log("dir2:preLink");
            //    },
            //    post: function () {
            //        console.log("dir2:postLink");
            //    }
            //};

            return function () {
                console.log("dir2:postLink");
            }
        }*/
    };

    return ddo;
});
