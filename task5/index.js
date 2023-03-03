// 5.1
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
// if has index - letter is there
const isVowel = char => VOWELS.indexOf(char.toLowerCase()) !== -1;

function countVowels(string) {
    const allStringLetters = string.split('');
    return allStringLetters.reduce((accumulator, letter) => {
        if (isVowel(letter)) {
            accumulator += 1;
        }
        return accumulator;
    }, 0);
}

console.log(countVowels('Calebration')); // 5
console.log(countVowels('Palm')); // 1
console.log(countVowels('I am Rostyk')); // 3 (letter y is not a vowel)


// 5.2
function removeABC(str) {
    const abcRegex = /[abc]/i;
    return !abcRegex.test(str) ? null : str.replace(/[abc]/gi, '');
}

console.log(removeABC('This might be a bit hard')); //
console.log(removeABC('hello world')); //
