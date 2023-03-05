
function parseString(str) {
    const arrayOfWords = str.split(' ');
    const arrayOfWordsWithHiddenUrls = arrayOfWords.map((word) => {
        if (validURL(word)) {
            return '[RESTRICTED_URL]';
        }
        if (checkIfEmail(word)) {
            return '[RESTRICTED_EMAIL]';
        }
        if (isNumberWithMoreThan3Chars(word)) {
            return null;
        }
        return word;
    }).filter(word => word);
    const capitalizedArrayOfWords = arrayOfWordsWithHiddenUrls.map(word => capitalizeFirstLetter(word));
    return capitalizedArrayOfWords.join(' ');
}

function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

/* Check if string is email */
function checkIfEmail(str) {
  // Regular expression to check if string is email
  const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  return regexExp.test(str);
}

function isNumberWithMoreThan3Chars(str) {
    const strSize = str.length;
    let isNum = /^\d+$/.test(str);
    return strSize > 3 && isNum ? true : false;
}

function capitalizeFirstLetter(string) {
    if (string === '[RESTRICTED_EMAIL]' || string === '[RESTRICTED_URL]') {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(parseString('Hello MY NaMe is JACKson')); // Hello My Name Is Jackson
console.log(parseString('Hello MY NaMe is jackson@gmail.com JackSon')); // Hello My Name Is [RESTRICTED_EMAIL] Jackson
console.log(parseString('Hello MY NaMe is https://jackson.com JackSon jackson@gmail.com')); // Hello My Name Is [RESTRICTED_URL] Jackson [RESTRICTED_EMAIL]
console.log(parseString('Hello MY NaMe is JACKson 123')); // Hello My Name Is Jackson 123
console.log(parseString('Hello MY NaMe is JACKson 1234')); // Hello My Name Is Jackson


