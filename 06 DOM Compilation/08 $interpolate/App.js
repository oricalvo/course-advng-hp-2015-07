angular.module("MyApp", ["ngSanitize"]).run(function ($compile, $interpolate, $rootScope, $sce, $parse) {

    var fn = $interpolate("{{name}}", undefined, $sce.HTML);
    var val = fn({ name: "<script>alert('XSS');</script>" });

    //var val = fn({ name: "<h1>HTML</h1>" });

    $(".placeholder").append(val);

    var expr = "name";

    var fn = $parse(expr);

    var obj = { name: "Ori" };
    fn.assign(obj, "XXX");
    console.log(obj.name);

    console.log("Writable: " + !!fn.assign);

    var fn = $parse("birthday | date");
    var val = fn({ a: { b: { c: 2 } } });
    var val = fn({});
    var val = fn({birthday: new Date()});
    console.log(val);
});

