function invertObject(incomingObject) {
    const objectToReturn = {};
    for(var key in incomingObject){
        objectToReturn[incomingObject[key]] = key;
    }
    return objectToReturn;
}

const testObj = { red: '#FF0000', green: '#00FF00', white: '#FFFFFF' };
console.log(invertObject(testObj)); // { '#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white' }
console.log(testObj); // incoming object was not changed


