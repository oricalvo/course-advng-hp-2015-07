import { Helpers } from 'Module1';
var MyApp;
(function (MyApp) {
    class Shape {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            setTimeout(() => {
                this.x = 10;
            }, 1000);
            Helpers.run();
        }
        dump() {
            console.log(this.x + ", " + this.y);
        }
    }
    MyApp.Shape = Shape;
    class Rect extends Shape {
        constructor(x, y, w, h) {
            super(x, y);
        }
        dump() {
            super.dump();
        }
    }
    var s1 = new Shape(5, 11);
})(MyApp || (MyApp = {}));
