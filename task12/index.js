const _ = require('lodash');

function parseArray(arr) {
    const arrSize = _.size(arr);
    let arrayClone = _.cloneDeep(arr);
    const newArr1 = [];
    const newArr2 = [];
    for (let i = 0; i < arrSize/2; i++) {
        // no action to be done if array does not have items
        if (arrayClone.length) {
            const max1 = Math.max(...arrayClone);
            arrayClone = removeItemOnce(arrayClone, max1);
            newArr1.push(max1);
        }
        
        // no action to be done if array does not have items
        if (arrayClone.length) {
            const max2 = Math.max(...arrayClone);
            arrayClone = removeItemOnce(arrayClone, max2);
            newArr2.push(max2);
        }
    }
    return { newArr1, newArr2 };
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

console.log(parseArray([1,2,3,4,5,6])); // { newArr1: [ 6, 4, 2 ], newArr2: [ 5, 3, 1 ] }
console.log(parseArray([1,2,3,4,5,6,7])); // { newArr1: [ 7, 5, 3, 1 ], newArr2: [ 6, 4, 2 ] }
