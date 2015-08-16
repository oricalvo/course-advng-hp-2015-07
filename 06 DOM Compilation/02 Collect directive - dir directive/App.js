angular.module("MyApp", []).run(function ($compile, $rootScope) {

    setTimeout(function () {

        var template = $("<div><h1>{{title}}</h1></div>");

        var linkFn = $compile(template);

        var scope = $rootScope.$new();
        scope.title = "Hello $compile";

        linkFn(scope);

        $rootScope.$digest();

        console.log(template[0].outerHTML);
    }, 0);
});
