class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toJSON() {
        return [this.x, this.y];
    }
}

module.exports = Point;