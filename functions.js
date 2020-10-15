import { pokedex } from './pokemon.js';

//DOM
const encountersInStorage = 'encountersInStorage';
const numberOfTurns = 'numberOfTurns';
const maxTurns = 10;
const allTimeSessionsDataLS = 'allTimeSessionsDataLS';

function randomNumber() {
    //Pull in previous random numbers and remove from set of numbers to pull from, genererate random number to pull by index from the restricted array of numbers.
    const oldRandoms = getFromLocalStorage('arrayRandomNums') || [];
    const startingLengthArray = [];

    pokedex.forEach((index) => {
        startingLengthArray.push(index.id);
    });

    for (let i = 0; i < oldRandoms.length; i++) {
        for (let j = 0; j < startingLengthArray.length; j++) {
            if (oldRandoms[i] === startingLengthArray[j]) {
                
                startingLengthArray.splice(j, 1);
            }
        }
    }
    
    const indexToReturn = Math.floor(Math.random() * startingLengthArray.length);
    return startingLengthArray[indexToReturn];
}

//String for key into local storage
const arrayRandomNums = 'arrayRandomNums';

//Three random numbers function
export function generateThreeUniqueNumbers() {  
    let array = [randomNumber(), randomNumber(), randomNumber()];
    
    //Get the previous last random numbers
    const oldRandoms = getFromLocalStorage(arrayRandomNums);
    
    while ((array[0] === array[1] || array[1] === array[2] || array[0] === array[2]) === true) {
        array = [randomNumber(), randomNumber(), randomNumber()];
    } 

    const booleanArray = [];
    const sixNumbers = array.concat(oldRandoms);
    for (let i = 0; i < sixNumbers.length; i++) {
        for (let j = 0; j < sixNumbers.length; j++) {
            const booleanCheck = sixNumbers[i] === sixNumbers[j];
            if (!(i === j)) {
                booleanArray.push(booleanCheck);
            }
        }
    }
    
    const uniqueCheck = checkIfTrue(booleanArray);
    
    setInLocalStorage('areSixNumbersUnique', uniqueCheck);

    setInLocalStorage(arrayRandomNums, array);
    return array;
}

//This function will return TRUE if all numbers unique, will return FALSE if numbers not unique
function checkIfTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            return false;
        }   
    }
    return true;     
}


export function findById(array, id) {
    let objectFound = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            objectFound = array[i];
        }    
    }
    return objectFound;
}


export function refreshCards() {
    let threeNewCards = generateThreeUniqueNumbers();
    
    const cardmat = document.getElementById('cardmat');
    for (let i = 0; i < threeNewCards.length; i++) {
        const cardToDeal = findById(pokedex, threeNewCards[i]);
        const onePokemonCard = buildCard(cardToDeal, i);
        
        cardmat.appendChild(onePokemonCard);
    }
    //Grab the id's of the cards delt
    const labels = document.querySelectorAll('label');
    
    //Update encountered state
    const localEncounters = getFromLocalStorage(encountersInStorage) || [];
    for (let j = 0; j < labels.length; j++) {
        const isInLocalEncounters = findById(localEncounters, labels[j].id);
        if (isInLocalEncounters === null) {
            const addPokemonToEncounters = {
                id: labels[j].id,
                encounters: 1,
                captures: 0,
            }; 
            localEncounters.push(addPokemonToEncounters);
        } else {
            isInLocalEncounters.encounters++;
        }
    }
    
    //Compare present labels to the localEncounters to retrieve encounters and captures
    for (let k = 0; k < labels.length; k++) {
        const divName = 'div' + k;        
        const card = document.getElementById(divName);
        for (let z = 0; z < localEncounters.length; z++) {
            if (localEncounters[z].id === labels[k].id) {
                card.textContent = `${localEncounters[z].captures} capture(s), ${localEncounters[z].encounters} encounter(s).`;
            }
        }
    }
    setInLocalStorage(encountersInStorage, localEncounters);
}


function buildCard(pokedexID, index) {
    //Create the tags
    const labelOne = document.createElement('label');
    const inputOne = document.createElement('input');
    const imgOne = document.createElement('img');
    const nameOne = document.createElement('h2');
    const timesEncountered = document.createElement('div');
    
    const divName = 'div' + index;

    //Updates to properties
    labelOne.setAttribute('id', pokedexID.id);
    imgOne.src = pokedexID.url_image;
    inputOne.setAttribute('type', 'radio');
    inputOne.setAttribute('name', 'pick-pokemon');
    inputOne.setAttribute('hidden', '');
    nameOne.textContent = (pokedexID.pokemon);

    //Placeholder for text content after local storage grabbed to update with enc/capture.
    timesEncountered.setAttribute('id', divName);
    
    //Appends to html
    labelOne.append(nameOne, inputOne, imgOne, timesEncountered);

    //Will need eventlistener here to detect click or change state of radio button
    inputOne.addEventListener('change', () => {
        //Update captured state here on click
        const localEncounters = getFromLocalStorage(encountersInStorage);
        for (let i = 0; i < localEncounters.length; i++) {
            if (localEncounters[i].id === labelOne.id) {
                localEncounters[i].captures++;
            }
        }
        setInLocalStorage(encountersInStorage, localEncounters);
        
        //Turn Counter
        let turnCounter = getFromLocalStorage(numberOfTurns) || [];
        if (turnCounter < maxTurns - 1) {
            turnCounter++;
            setInLocalStorage(numberOfTurns, turnCounter);
        } else {
            turnCounter++;
            setInLocalStorage(numberOfTurns, turnCounter);
            window.location.href = './results';
        }

        //Update the page with captures listed
        const pokemonCaught = document.getElementById('pokemon-caught');
        pokemonCaught.textContent = `You have caught ${turnCounter} pokemon!`;

        //Removes the html tags before the refresh or else appends and more than 3 cards shown.
        const pokeid = document.querySelectorAll('label');
        for (let i = 0; i < pokeid.length; i++) {
            pokeid[i].remove();
        }
        refreshCards();
    });
    return labelOne;
}


//Local Storage functions
export function getFromLocalStorage(key) {
    // remember, we need to parse any values get from local storage
    const savedData = localStorage.getItem(key);
    const savedDataParsed = JSON.parse(savedData);
    return savedDataParsed;
}


// this function will not return anything
function setInLocalStorage(key, value) {
    // remember, we need to stringify any values we want to set into local storage
    const dataAsString = JSON.stringify(value);    
    localStorage.setItem(key, dataAsString);
}


//Reset game
export function playAgain() {
    allTimeSessions();
    localStorage.removeItem(encountersInStorage);
    localStorage.removeItem(numberOfTurns);
    window.location.href = './';
}

//Function to grab single game local storage and put into alltime
export function allTimeSessions() {
    const allTimeSessionsData = getFromLocalStorage(allTimeSessionsDataLS) || [];
    const singleGameData = getFromLocalStorage(encountersInStorage) || [];
    allTimeSessionsData.push(singleGameData);

    setInLocalStorage(allTimeSessionsDataLS, allTimeSessionsData);
}