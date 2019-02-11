function stringToOperations(string) {
    let result = 0;
    let length = string.length;
    const spaceArray = [];
    const numberArray = [];
    const operationArray = [];
    // breakdown the string to spaces, operators, and numbers
    for(let i = 0; i < string.length; i++) {
        if(string[i] === ' ') {
            spaceArray.push(string[i]);
        } else {
            const stringPart = parseInt(string[i]);
            if(isNaN(stringPart)) {
                operationArray.push(string[i]);                
            } else {
                numberArray.push(stringPart);
            }
        }
    }
    // update length to not count the spaces
    length -= spaceArray.length;

    for(let i = 0; i < operationArray.length; i++) {
        if(operationArray[i] === '+') {
            result = numberArray[0] + numberArray[1];
        }
    }
    console.log('length', length, typeof length);
    // console.log('space', spaceArray);
    // console.log('op', operationArray);
    // console.log('num', numberArray);

    return result;
}

export default stringToOperations;