class DataSet {
    constructor(area, parts) {
        this.area = area;
        this.parts = parts;
    }

    #getFigureSets(parts, areaSize) {
        const result = [];
        let iterations = 0;

        const getFigureSets = (parts, figures = [], totalPoints = 0) => {
            iterations++;

            if (parts.length === 0) {
                if (totalPoints === areaSize) {
                    result.push(figures);
                }
            } else {
                const part = parts[0];
                for (let i = 0; i < part.figures.length; i++) {
                    const figure = part.figures[i];
                    getFigureSets(
                        parts.slice(1),
                        [...figures, figure],
                        totalPoints + figure.points.length
                    );
                }
            }
        }

        getFigureSets([...parts]);

        console.log('iterations', iterations + 1);
        console.log('figureSets', result.length);
        return result;
    }

    getData() {
        const {area, parts} = this;
        console.time('getFigureSets');
        const sets = this.#getFigureSets(parts, area.getSize());
        console.timeEnd('getFigureSets');
        return {area, parts, sets};
    }
}

module.exports = DataSet;