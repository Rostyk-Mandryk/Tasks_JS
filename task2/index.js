const _ = require('lodash');

function wordsFilter(string, maxWordLength) {
    const wordsArray = _.split(_.trim(string), ' ');
    return _.filter(wordsArray, (word) => word.length > maxWordLength)
}

console.log(wordsFilter('I am test string with words', 4)); // [ 'string', 'words' ]
console.log(wordsFilter('I am tes string with words', 2)); // [ 'tes', 'string', 'with', 'words' ]
