const doesBrickFit = (a, b, c, w, h) => {
    if (a <= w && c <= h) {
        return true;
    }
    return false;
};

console.log(doesBrickFit(1, 1, 1, 1, 1)); // true
console.log(doesBrickFit(1, 2, 1, 1, 1)); // true
console.log(doesBrickFit(1, 2, 2, 1, 1)); // false
