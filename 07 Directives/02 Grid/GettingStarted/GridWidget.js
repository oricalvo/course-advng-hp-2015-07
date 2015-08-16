/// <reference path="angular.js" />

angular.module("MyApp").directive("grid", function ($interpolate, $compile) {

    var ddo = {
        restrict: "E",
        //template: "<table></table>",

        compile: function (element, attrs) {

            var columns = [];

            element.find("column").each(function () {
                var column = $(this);

                var title = column.attr("title");
                console.log("Title: " + title);

                var template = column.html();
                console.log("Template: " + template);

                columns.push({
                    title: $interpolate(title),
                    template: $compile(template),
                });

            });

            var table = $("<table><thead><tr></tr></thead><tbody></tbody></table>");
            element.html(table);

            var header = table.find("tr");
            var tbody = table.find("tbody");

            return function postLink(scope, element, attrs) {

                columns.forEach(function (column) {
                    var td = $("<td />");
                    td.text(column.title(scope.$parent));

                    header.append(td);
                });

                scope.model.forEach(function (dataItem) {

                    var tr = $("<tr />");
                    tbody.append(tr);

                    columns.forEach(function (column) {
                        var td = $("<td />");
                        tr.append(td);

                        var itemScope = scope.$parent.$new();
                        itemScope.dataItem = dataItem;

                        column.template(itemScope, function (clone) {
                            td.append(clone);
                        });


                    });

                });
            }
        },
        terminal: true,
        scope: {
            model: "=",
        }
    };

    return ddo;
});

