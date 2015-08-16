var MyApp = MyApp || {};

MyApp.Rect = (function (Shape) {

    function Rect(x, y, w, h) {
        Shape.call(this, x, y);
        //Shape.apply(this, [x, y]);

        this.width = w;
        this.height = h;
    }

    //function Dummy() { }
    //Dummy.prototype = Shape.prototype;
    //Rect.prototype = new Dummy();
        
    Rect.prototype = Object.create(Shape.prototype);

    Rect.prototype.dump = function () {

        Shape.prototype.dump.call(this);

        console.log("Width = " + this.width);
        console.log("Height = " + this.height);
    }

    //for (var methodName in Shape.prototype) {
    //    Rect.prototype[methodName] = Shape.prototype[methodName];
    //}

    //Rect.prototype.dump = Shape.prototype.dump;

    return Rect;
})(MyApp.Shape);