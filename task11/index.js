const _ = require('lodash');

function isOneStringAnothersCyclicShift (baseString, stringToCheck) {
    const baseArray = baseString.split('');
    const arrayToCheck = stringToCheck.split('');
    // if not same size - no cyclic permutation
    if (_.size(baseArray) !== _.size(arrayToCheck)) {
        return false;
    }
    return arePermutations(baseArray, arrayToCheck);
}

function arePermutations(arr1,arr2)
    {
        // Arrays cannot be permutations of
        // one another unless they are
        // of the same length
        if (arr1.length != arr2.length)
            return false;
        
        // Creates an empty hashMap hM
        let hM = new Map();
  
        // Traverse through the first array
        // and add elements to hash map
        for (let i = 0; i < arr1.length; i++)
        {
            let x = arr1[i];
            if (!hM.has(x))
                hM.set(x, 1);
            else
            {
                let k = hM[x];
                hM.set(x, k+1);
            }
        }
  
        // Traverse through second array and
        // check if every element is
        // present in hash map
        for (let i = 0; i < arr2.length; i++)
        {
            let x = arr2[i];
  
            // If element is not present in
            // hash map or element
            // is not present less number of times
            if (!hM.has(x) || hM[x] == 0)
                return false;
  
            let k = hM[x];
            hM.set(x, k-1);
        }
        return true;
}

console.log(isOneStringAnothersCyclicShift('abcdefg', 'bcdefg')); // false
console.log(isOneStringAnothersCyclicShift('abcdefg', 'cdefgab')); // true
console.log(isOneStringAnothersCyclicShift('abcdefg', 'gfedcba')); // true
console.log(isOneStringAnothersCyclicShift('abcdefg', 'something')); // false
