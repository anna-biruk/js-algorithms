class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
const square1 = new Square(10);
square1.calculatePerimetr();
square1.calculateSquare();

