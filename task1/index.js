const _ = require('lodash');

function arr(incomingArray) {
    return _.size(incomingArray) <= 1 ? 0 : Math.max(...incomingArray) - Math.min(...incomingArray)
}

console.log(arr([1, 2, 3, -4])); // 7
console.log(arr([16])); // 0
console.log(arr([])); // 0
console.log(arr([1,0,-1,3])); // 4

