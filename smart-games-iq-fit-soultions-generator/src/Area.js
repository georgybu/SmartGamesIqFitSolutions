const Figure = require("./Figure");
const RelativePoint = require("./RelativePoint");
const Point = require("./Point");

class Area {
    #area = [];

    constructor(matrix) {
        this.#area = matrix;
    }

    #checkFigure(figure, x, y) {
        if (figure instanceof Figure) {
            for (let i = 0; i < figure.points.length; i++) {
                const point = figure.points[i];
                if (point instanceof RelativePoint) {

                    if (Array.isArray(this.#area[y + point.delta.y])) {
                        if (this.#area[y + point.delta.y][x + point.delta.x] !== 0) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            }
            return true;
        }

        throw new Error('figure should be instanceof Figure');
    }

    #getAreaShape() {
        const blankSquare = '□';

        const shape = [];

        for (let y = 0; y < this.#area.length; y++) {
            for (let x = 0; x < this.#area[y].length; x++) {
                shape[y] = shape[y] || [];
                shape[y][x] = this.#area[y][x] || '□';
            }
        }

        return shape;
    }

    findPlacesForFigure(figure) {
        const solutions = [];
        for (let y = 0; y < this.#area.length; y++) {
            for (let x = 0; x < this.#area[y].length; x++) {
                if (this.#checkFigure(figure, x, y)) {
                    solutions.push(new Point(x, y));
                }
            }
        }
        return solutions;
    }

    print() {
        this.#getAreaShape().forEach(line => console.log(line.join('')));
        console.log();
    }

    hasEmptySlots() {
        for (let y = 0; y < this.#area.length; y++) {
            for (let x = 0; x < this.#area[y].length; x++) {
                if (this.#area[y][x] === 0) {
                    return true;
                }
            }
        }

        return false;
    }

    getAreaWithFigure(figure, point, figureIndex = 0) {
        const char = 'abcdefghijklmnopqrstuvwxyz'.split('')[figureIndex];
        const matrix = this.#area.map(l => [...l]);
        if (figure instanceof Figure) {
            for (let i = 0; i < figure.points.length; i++) {
                const p = figure.points[i];
                if (p instanceof RelativePoint) {
                    matrix[point.y + p.delta.y][point.x + p.delta.x] = char;
                }
            }
        }
        return new Area(matrix);
    }

    printAreaWithFigure(figure, point) {
        const shape = this.#getAreaShape();

        if (figure instanceof Figure) {
            for (let i = 0; i < figure.points.length; i++) {
                const p = figure.points[i];
                if (p instanceof RelativePoint) {
                    shape[point.y + p.delta.y][point.x + p.delta.x] = '▣';
                }
            }
        }

        shape.forEach(line => console.log(line.join('')));
        console.log();
    }

    getSize() {
        return this.#area.reduce((acc, currLine) => acc + currLine.length, 0);
    }
}

module.exports = Area;