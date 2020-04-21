import {Figure, Point} from './pointAndFigure';

class Circle extends Figure {
    constructor(x, y, radius) {
        super();
        this.center = new Point(x,y);
        this.radius = radius;
        this.p = 3.14;
    }

    getType() {
        return this.constructor.name;
    }

    calculateSquare() {
        return p * Math.sqrt(this.radius);
    }

    calculatePerimeter() {
        return 2 * this.p * this.radius;
    }
}