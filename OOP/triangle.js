import {Figure, Point} from './pointAndFigure';

class Triangle extends Figure {
    constructor(x1, y1, x2, y2, x3, y3) {
        super();
        this.A = new Point(x1, y1);
        this.B = new Point(x2, y2);
        this.C = new Point(x3, y3);
        this.sideAB = Math.sqrt(Math.abs((this.B.x * this.B.x - 2*this.B.x*this.A.x + this.A.x*this.A.x) + (this.B.y * this.B.y - 2*this.B.y*this.A.y + this.A.y*this.A.y)));
        this.sideAC = Math.sqrt(Math.abs((this.C.x * this.C.x - 2*this.C.x*this.A.x + this.A.x*this.A.x) + (this.C.y * this.C.y - 2*this.C.y*this.A.y + this.A.y*this.A.y)));
        this.sideBC = Math.sqrt(Math.abs((this.C.x * this.C.x - 2*this.C.x*this.B.x + this.B.x*this.B.x) + (this.C.y * this.C.y - 2*this.C.y*this.B.y + this.B.y*this.B.y)));
    }

    getType() {
        return this.constructor.name;
    }

    calculatePerimeter() { 
       return this.sideAB + this.sideAC + this.sideBC;
    }

    calculateSquare() {
        const semiPerimeter = (this.calculatePerimeter()) /2;
        return Math.sqrt(Math.abs(semiPerimeter * (semiPerimeter - this.sideAB) * (semiPerimeter - this.sideAC) * (semiPerimeter - this.sideBC)));
    }
}


class EquilateralTriangleTriangle extends Triangle {
   getType() {
        return 'I am '+ this.constructor.name;
    }

    calculateSquare() {
        return (Math.pow(this.sideAB, 2) * Math.sqrt(3)) / 4;
    }
}

class IsoscelesTriangle extends Triangle {
   calculateSquare() {
       return (this.sideAC / 4) * Math.sqrt(Math.abs(4 * Math.pow(this.sideAB,2) - Math.pow(this.sideAC,2)));
   }
 }

 class RightTriangle extends Triangle {
    calculateSquare() {
        return (this.sideAB * this.sideAC) / 2;
    }
 }



