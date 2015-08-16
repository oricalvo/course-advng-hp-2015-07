var MyApp = MyApp || {};

MyApp.Shape = (function () {

    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }

    Shape.prototype.dump = function () {
        console.log("X = " + this.x);
        console.log("Y = " + this.y);
    }

    Shape.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    return Shape;
})();