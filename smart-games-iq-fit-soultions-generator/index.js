const DataSet = require("./src/DataSet");
const Solution = require("./src/Solution");

const {area, parts} = require('./data');
const {sets} = new DataSet(area, parts).getData();

const solution = new Solution();
console.time('solution');
const result = solution.solve(area, sets);
console.timeEnd('solution');

console.log('solutions', result.length);
solution.save(result);
