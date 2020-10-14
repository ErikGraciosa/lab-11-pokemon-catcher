//Create a function that makes three unique random numbers
function randomNumber() {
    const lengthOfPokedex = 15;
    return Math.floor(Math.random() * lengthOfPokedex);
}

export function generateThreeUniqueNumbersArchive() {
    let array = [randomNumber(), randomNumber(), randomNumber()];
    let i = 0;

    if (array[0] === array[1] || array[1] === array[2] || array[0] === array[2]) {
        console.log('this is before the recursive call ' + array);
        i++;
        array.splice(0, 3, generateThreeUniqueNumbersArchive());
    } else {
        return array;
    }
    
    console.log('this is after the recursive call ' + array);
    if (i === 0) {
        return array;
    } else {
        const weirdObject = [array[0][0], array[0][1], array[0][2]];
        console.log('the weird object ' + weirdObject);
        return weirdObject;
    }
    
}