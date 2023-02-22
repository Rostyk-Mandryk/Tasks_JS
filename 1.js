// Задача 1
// function arr(nums) {
//     if (nums.length <= 1) {
//       return 0;
//     } else {
//       return Math.max(...nums) - Math.min(...nums);
//     }
//   }
//   console.log(arr([1, 2, 3, -4])); // 7
//   console.log(arr([16])); // 0

// Задача 2

// function filterWordsByLength(string, length) {
//     const words = string.split(' '); // Розбиваємо рядок на масив слів
//     const filteredWords = words.filter(word => word.length > length); // Фільтруємо слова за довжиною
//     return filteredWords;
//   }

// Задача 3

// function solution(str, ending) {
//     return str.endsWith(ending);
//   }
//   console.log(solution('abc', 'bc')); // true
//   console.log(solution('abc', 'd')); // false


// Задача 4

// function averages(arr) {
//     const result = [];
  
//     for (let i = 0; i < arr.length - 1; i++) {
//       const average = (arr[i] + arr[i + 1]) / 2;
//       result.push(average);
//     }
  
//     return result;
//   }
  
//   console.log(averages([2, -2, 2, -2, 2])); // [0, 0, 0, 0]
//   console.log(averages([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]


// Задача 5

// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i].toLowerCase())) {
//         count++;
//       }
//     }
//     return count;
//   }
//   function removeABC(str) {
//     if (!/[abc]/i.test(str)) {
//       return null;
//     }
//     return str.replace(/[abc]/gi, '');
//   }  

//     Задача 6 

// function difference(arr1, arr2) {
//     // об'єднуємо два масиви за допомогою оператора spread
//     const combined = [...arr1, ...arr2];
    
//     // створюємо новий Set, щоб видалити дублікати
//     const unique = new Set(combined);
    
//     // перетворюємо Set знову на масив та сортуємо його
//     const result = [...unique].sort((a, b) => a - b);
    
//     return result;
//   }
  
//   console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//   // ["1", "2", "3", "10", "100"]

// Задача 7

// function swapKeysAndValues(obj) {
//     return Object.entries(obj).reduce((acc, [key, value]) => {
//       acc[value] = key;
//       return acc;
//     }, {});
//   }

// const obj = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};
// const swapped = swapKeysAndValues(obj);
// console.log(swapped);
// // Виведе: {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}
