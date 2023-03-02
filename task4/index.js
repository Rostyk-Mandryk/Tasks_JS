const _ = require('lodash');

function getAverages(incomingArray) {
    const resultingArray = [];
    incomingArray.forEach((item, index, items) => {
        const nextItem = items[index + 1];
        if (!_.isUndefined(nextItem)) {
            resultingArray.push(_.mean([item, items[index + 1]]));
        }
    });
    return resultingArray;
}

console.log(getAverages([2, -2, 2, -2, 2])); // [0, 0, 0, 0]
console.log(getAverages([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]
