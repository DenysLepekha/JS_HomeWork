export class Point {
    constructor (x, y, name) {
     this.x = x;
     this.y = y;
     this.name = name;
    }
}

export class Figure {
constructor() {
if(new.target === Figure) {
    throw new TypeError ("Cannot construct Figure instances directly");
}
}

getType () {}

calculateSquare() {}

calculatePerimeter() {}

}

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


 class EquilateralTriangle extends Triangle {
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
        return this.p * Math.sqrt(this.radius);
    }

    calculatePerimeter() {
        return 2 * this.p * this.radius;
    }
}

class Quadrangle extends Figure {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4, angle) {
        super();
        this.A = new Point(x1, y1);
        this.B = new Point(x2, y2);
        this.C = new Point(x3, y3);
        this.D = new Point(x4, y4);
        this.angle = angle;
        this.sideAB = Math.sqrt(Math.abs((this.B.x * this.B.x - 2*this.B.x*this.A.x + this.A.x*this.A.x) + (this.B.y * this.B.y - 2*this.B.y*this.A.y + this.A.y*this.A.y)));
        this.sideBC = Math.sqrt(Math.abs((this.C.x * this.C.x - 2*this.C.x*this.B.x + this.B.x*this.B.x) + (this.C.y * this.C.y - 2*this.C.y*this.B.y + this.B.y*this.B.y)));
        this.sideCD = Math.sqrt(Math.abs((this.D.x * this.D.x - 2*this.D.x*this.C.x + this.C.x*this.C.x) + (this.D.y * this.D.y - 2*this.D.y*this.C.y + this.C.y*this.C.y)));
        this.sideAD = Math.sqrt(Math.abs((this.D.x * this.D.x - 2*this.D.x*this.A.x + this.A.x*this.A.x) + (this.D.y * this.D.y - 2*this.D.y*this.A.y + this.A.y*this.A.y)));
    }

    getType() {
        return this.constructor.name;
    }

    calculatePerimeter() { 
       return this.sideAB + this.sideBC + this.sideCD + this.sideAD;
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

 class Rhombus extends Quadrangle {
    getType() {
        return 'I am '+ this.constructor.name;
    }
 }

const circle = ShapeFactory(0, 3, 6);
const isoscelesTriangle = ShapeFactory(0, 3, -2, -3, -6, 1);
const equilateralTriangle = ShapeFactory(0, 0, 3, 0, 1.5, 2.598076);
const rightTriangle = ShapeFactory(-1, 0, 3, 0, 3, 3);
const rectangle = ShapeFactory(-3,-2, 3,-2, 3, 2,-3, 2);
const square = ShapeFactory(4,-4, 4,-4, -4, -4,-4, 4, 90);
const rhombus = ShapeFactory(4, 3, 10, 3, 10, 9, 4, 9, 60);
const triangle = ShapeFactory(5, 1, -2, 9, 1, 7);
const quadrangle = ShapeFactory(4, 3, 10, 3, 10, 9, 4, 9, 100);



function ShapeFactory (...args) {
    if (args.length === 3)
    return new Circle(args[0], args[1], args[2]);

    else if (args.length === 6) {
        const triangle = new Triangle(args[0],args[1],args[2],args[3],args[4],args[5]);

        if (triangle.sideAB === triangle.sideAC)
        return new IsoscelesTriangle(args[0],args[1],args[2],args[3],args[4],args[5]);

        else if (triangle.sideAB === Math.round(triangle.sideAC) && Math.round(triangle.sideBC) === triangle.sideAB)
        return new EquilateralTriangle(args[0],args[1],args[2],args[3],args[4],args[5]);

        else if (Math.pow(triangle.sideAC, 2) === (Math.pow(triangle.sideAB, 2) + Math.pow(triangle.sideBC, 2)))
        return new RightTriangle(args[0],args[1],args[2],args[3],args[4],args[5]);

        else return triangle;
    }
    else if (args.length === 9) {
        const quadrangle = new Quadrangle(args[0],args[1],args[2],args[3],args[4],args[5],args[6], args[7],args[8]);

        if (quadrangle.sideAB === quadrangle.sideCD && quadrangle.sideAD === quadrangle.sideBC && quadrangle.sideAB !== quadrangle.sideAD)
        return new Rectangle(args[0],args[1],args[2],args[3],args[4],args[5],args[6], args[7]);

        else if (quadrangle.sideAB === quadrangle.sideBC && quadrangle.sideAD === quadrangle.sideCD && quadrangle.angle === 90)
        return new Square(args[0],args[1],args[2],args[3],args[4],args[5],args[6], args[7], args[8]);

        else if (quadrangle.sideAB === quadrangle.sideBC && quadrangle.sideAD === quadrangle.sideCD && quadrangle.angle <= 90)
        return new Rhombus(args[0],args[1],args[2],args[3],args[4],args[5],args[6], args[7], args[8]);


        else return quadrangle;
    }
}


