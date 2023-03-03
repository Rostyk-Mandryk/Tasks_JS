const _ = require('lodash');

const difference = (arr1, arr2) => {
    const array1Uniq = _.difference(arr1, arr2);
    const array2Uniq = _.difference(arr2, arr1);
    // sorted so it's easier to read
    return _.sortBy([...array1Uniq, ...array2Uniq]);
}

console.log(difference([1, 2, 3, 3, 4, 100], [50, 1, 3, 5])); // [ 2, 4, 5, 50, 100 ]

