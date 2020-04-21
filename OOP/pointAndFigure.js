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

