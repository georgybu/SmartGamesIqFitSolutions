class RelativePoint {
    #deltaX;
    #deltaY;

    constructor(x = 0, y = 0) {
        this.#deltaX = x;
        this.#deltaY = y;
    }

    get delta() {
        return {
            x: this.#deltaX,
            y: this.#deltaY,
        }
    }

    toString() {
        return `x: ${this.#deltaX}, y: ${this.#deltaY}`;
    }
}

module.exports = RelativePoint;