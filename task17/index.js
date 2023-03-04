const _ = require('lodash');

function parseArray(arr) {
    const arraySize = arr.length;
    const minArray1 = [];
    const minArray2 = [];
    for (let i = 0; i < arraySize/2; i++) {
        if (arr.length) {
            const min1 = Math.min(...arr);
            arr = removeItemOnce(arr, min1);
            minArray1.push(min1);
        }

        if (arr.length) {
            const min2 = Math.min(...arr);
            arr = removeItemOnce(arr, min2);
            minArray2.push(min2);
        }
    }

    const reversedMinArray2 = _.reverse(minArray2);
    return [...minArray1, ...reversedMinArray2];
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

console.log(parseArray([1, 2, 3, 4, 5, 6, 7, 8])); // [1, 3, 5, 7, 8, 6, 4, 2]
console.log(parseArray([1, 2, 3, 4, 5, 6, 7])); // [1, 3, 5, 7, 6, 4, 2]
console.log(parseArray([3, 10, 100, 60, 30, 20])); // [3, 20, 60, 100, 30, 10]
