const fs = require('fs');
const path = require('path');

const saveSolutions = (solutions) => {
    const raw = solutions.map(result => {
        return result.map(({point, figure}) => {
            return {point: point.toJSON(), figure: figure.toJSON()}
        })
    });
    const fileName = '_' + Math.random().toString(36).substr(2, 9);
    fs.writeFileSync(path.join('output', fileName + '.json'), JSON.stringify(raw));
    console.log('Saved to:', fileName + '.json');
}

module.exports = saveSolutions;