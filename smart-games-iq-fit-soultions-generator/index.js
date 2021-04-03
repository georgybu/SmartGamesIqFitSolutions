const dataSets = require('./dataSets');
const getFigureSets = require('./getFigureSets');
const saveSolutions = require('./saveSolutions');
const solution = require('./solution');

const {area, parts} = dataSets.ds5;

console.time('getFigureSets');
const sets = getFigureSets(parts, area.getSize());
console.timeEnd('getFigureSets');

console.time('solution');
const result = solution(area, sets);
console.timeEnd('solution');

console.log('solutions', result.length);
saveSolutions(result);
