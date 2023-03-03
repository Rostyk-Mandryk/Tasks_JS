function calculateDifference(lostStuffInfo, insurance) {
    const allLostStuffNames = Object.keys(lostStuffInfo);
    if (allLostStuffNames.length === 0) {
        return 'No lost stuff provided';
    }
    const totalPriceOfLostStuff = allLostStuffNames.reduce((accumulator, lostStuffName) => {
        return accumulator += lostStuffInfo[lostStuffName];
    }, 0);
    if (totalPriceOfLostStuff <= insurance) {
        return 'Total price of lost stuff is less than insurance';
    }
    return totalPriceOfLostStuff - insurance;
}

console.log(calculateDifference({ 'baseball hat': 20 }, 5)); // 15
console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); // 11
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); // 1
console.log(calculateDifference({}, 400)); // No lost stuff provided message
console.log(calculateDifference({ skate: 1 }, 400)); // Total price of lost stuff is less than insurance message
