import {Figure, Point} from './pointAndFigure';

class Quadrangle extends Figure {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
        super();
        this.A = new Point(x1, y1);
        this.B = new Point(x2, y2);
        this.C = new Point(x3, y3);
        this.D = new Point(x4, y4);
        this.sideAB = Math.sqrt(Math.abs((this.B.x * this.B.x - 2*this.B.x*this.A.x + this.A.x*this.A.x) + (this.B.y * this.B.y - 2*this.B.y*this.A.y + this.A.y*this.A.y)));
        this.sideBC = Math.sqrt(Math.abs((this.C.x * this.C.x - 2*this.C.x*this.B.x + this.B.x*this.B.x) + (this.C.y * this.C.y - 2*this.C.y*this.B.y + this.B.y*this.B.y)));
        this.sideCD = Math.sqrt(Math.abs((this.D.x * this.D.x - 2*this.D.x*this.C.x + this.C.x*this.C.x) + (this.D.y * this.D.y - 2*this.D.y*this.C.y + this.C.y*this.C.y)));
        this.sideAD = Math.sqrt(Math.abs((this.D.x * this.D.x - 2*this.D.x*this.A.x + this.A.x*this.A.x) + (this.D.y * this.D.y - 2*this.D.y*this.A.y + this.A.y*this.A.y)));
    }

    getType() {
        return this.constructor.name;
    }

    calculatePerimeter() { 
       return this.sideAB + this.sideAC + this.sideBC + this.sideAD;
    }

    calculateSquare() {
        const semiPerimeter = (this.calculatePerimeter()) /2;
        return Math.sqrt(Math.abs((semiPerimeter - this.sideAB) * (semiPerimeter - this.sideBC) * (semiPerimeter - this.sideCD) * (semiPerimeter - this.sideAD)));
    }
 }

 class Rectangle extends Quadrangle {
     calculatePerimeter() { 
        return (this.sideAB + this.sideBC) * 2;
     }

    calculateSquare() {
       return this.sideAB * this.sideBC;
    }
 }

 class Square extends Quadrangle {
     calculatePerimeter() { 
        return this.sideAB * 4;
     }

    calculateSquare() {
        return Math.pow(this.sideAB, 2);
     }
 }

 class rhombus extends Quadrangle {
    getType() {
        return 'I am '+ this.constructor.name;
    }
 }

