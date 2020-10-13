//Create a function that makes three unique random numbers


function randomNumber() {
    const lengthOfPokedex = 15;
    return Math.floor(Math.random() * lengthOfPokedex);
}

export function generateThreeUniqueNumbers() {    
    let array = [randomNumber(), randomNumber(), randomNumber()];
        
    while ((array[0] === array[1] || array[1] === array[2] || array[0] === array[2]) === true) {
        array = [randomNumber(), randomNumber(), randomNumber()];
    } 
    return array;
}

//The function still completes twice, doesn't look like it stays in a serial path. 