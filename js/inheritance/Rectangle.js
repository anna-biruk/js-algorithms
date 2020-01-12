class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculatePerimetr() {
        const sum = (this.height + this.width) * 2;
        console.log(`Sum perimetr: ${sum}`);
    }

    calculateSquare() {
        const square = this.width * this.height;
        console.log(`Square ${square}`);
    }
}

