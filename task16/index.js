
function passwordGenerator() {
    return Math.random().toString(36).slice(-8);
}

console.log(passwordGenerator())

