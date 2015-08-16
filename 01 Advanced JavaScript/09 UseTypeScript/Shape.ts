import {Helpers} from 'Module1';

module MyApp {
    export class Shape {
        private x;
        y: number;

        constructor(x: number, y: number) {
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

    class Rect extends Shape {
        constructor(x, y, w, h) {
            super(x, y);
        }

        dump() {
            super.dump();
        }
    }

    var s1 = new Shape(5, 11);
    //s1.
}
