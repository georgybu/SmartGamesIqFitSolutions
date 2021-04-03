const RelativePoint = require("./RelativePoint");
const Point = require("./Point");

class Figure {
    #points = [];
    #id;

    constructor(points = [], id, color = '#000') {
        const getID = () => '_' + Math.random().toString(36).substr(2, 9);
        this.#id = id || getID();
        this.#points = points.map(([x, y]) => new RelativePoint(x, y));
        this.color = color;
    }

    #getSquaredShare() {
        const shape = [];

        this.#points.forEach((point) => {
            if (point instanceof RelativePoint) {
                const {x, y} = point.delta;
                shape[y] = shape[y] || [];
                shape[y][x] = '■';
            }
        });

        const maxWidth = shape.reduce((len, arr) => Math.max(len, arr.length), 0);
        const maxHeight = shape.length;

        for (let i = 0; i < maxHeight; i++) {
            for (let j = 0; j < maxWidth; j++) {
                if (!shape[i][j]) {
                    shape[i][j] = '□';
                }
            }
        }

        return shape;
    }

    #getRotatedPoints(angle) {
        const getPoints = (angle) => {
            switch (angle) {
                case 0:
                    return this.#points.map((p) => new Point(p.delta.x, p.delta.y));
                case 90:
                    return this.#points.map((p) => new Point(-p.delta.y, p.delta.x));
                case 180:
                    return this.#points.map((p) => new Point(-p.delta.x, -p.delta.y));
                case 270:
                    return this.#points.map((p) => new Point(p.delta.y, -p.delta.x));
                default:
                    throw new Error('angle must be: 0, 90, 180 or 270');
            }
        }

        let points = getPoints(angle);

        let negativeX = 0;
        let negativeY = 0;

        points.forEach(p => {
            negativeX = Math.min(p.x, negativeX);
            negativeY = Math.min(p.y, negativeY);
        });

        return points.map(p => [p.x + Math.abs(negativeX), p.y + Math.abs(negativeY)]);
    }

    get points() {
        return this.#points;
    }

    set id(value) {
        this.#id = value;
    }

    get id() {
        return this.#id;
    }

    print(color = '#000') {
        this.#getSquaredShare().forEach(line => {
            console.log(line.join(''));
        });
    }

    rotate(angle, color = '#000') {
        return new Figure(this.#getRotatedPoints(angle), `${this.#id}-${angle}`, this.color || color);
    }

    toJSON() {
        return {
            id: this.#id,
            color: this.color,
            points: this.#points.map(p => ([p.delta.x, p.delta.y]))
        }
    }
}

module.exports = Figure;