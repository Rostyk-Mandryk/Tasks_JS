const _ = require('lodash');

const endsWithCheck = (string, target) => _.endsWith(string, target);

console.log(endsWithCheck('abc', 'bc')); // true
console.log(endsWithCheck('abc', 'b')); // false
