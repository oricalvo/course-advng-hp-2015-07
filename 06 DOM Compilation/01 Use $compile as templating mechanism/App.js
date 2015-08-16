angular.module("MyApp", []).run(function ($compile, $rootScope) {

    setTimeout(function () {

        var template = $(".template");

        template.remove();

        var linkFn = $compile(template);

        var arr = ["abc", 2, 3, 4];
        var scopes = [];

        $rootScope.$watchCollection(function () {
            return arr;
        }, function (arr) {



            for (var i = 0; i < arr.length; i++) {
                var scope = $rootScope.$new();
                scope.title = "Hello $compile (" + arr[i] + ")";

                scopes.push(scope);

                linkFn(scope, function (clone) {
                    $("body").append(clone);
                });
            }
        });

        $rootScope.$digest();

        setTimeout(function () {
            arr.push(5);

            scopes[0].title = "XXX";

            $rootScope.$digest();
        }, 1000);
    }, 0);

});

