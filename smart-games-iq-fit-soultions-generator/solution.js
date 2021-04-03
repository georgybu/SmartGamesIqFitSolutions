const solution = (area, sets) => {
    const solutions = [];

    const checkPartInArea = (area, figures, result = [], figuresLength) => {
        if (figures.length === 0) {
            if (result.length === figuresLength) {
                solutions.push(result);
                console.log(new Date().toISOString(), '#', solutions.length);
            }
        } else {
            const figure = figures[0];
            [figure.rotate(0), figure.rotate(90), figure.rotate(180), figure.rotate(270)].forEach(f => {
                area.findPlacesForFigure(f).forEach(point => {
                    const a = area.getAreaWithFigure(f, point, result.length + 1);
                    checkPartInArea(a, figures.slice(1), [...result, {point, figure: f}], figuresLength);
                })
            });
        }
    }

    for (let i = 0; i < sets.length; i++) {
        const figures = sets[i];
        checkPartInArea(area, [...figures], [], figures.length);
    }

    return solutions;
}

module.exports = solution;