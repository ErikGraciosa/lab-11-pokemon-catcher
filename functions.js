//Create a function that makes three unique random numbers

import { pokedex } from './pokemon.js';

//DOM
const encountersInStorage = 'encountersInStorage';
const numberOfTurns = 'numberOfTurns';
const maxTurns = 10;

function randomNumber() {
    const lengthOfPokedex = pokedex.length;
    return Math.floor(Math.random() * lengthOfPokedex);
}


export function generateThreeUniqueNumbers() {    
    let array = [randomNumber(), randomNumber(), randomNumber()];
     
    while ((array[0] === array[1] || array[1] === array[2] || array[0] === array[2]) === true) {
        array = [randomNumber(), randomNumber(), randomNumber()];
    } 
    return array;
}


function findById(array, id) {
    let objectFound = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            objectFound = array[i];
        }    
    }
    return objectFound;
}


export function refreshCards() {
    const threeNewCards = generateThreeUniqueNumbers();
    const cardmat = document.getElementById('cardmat');
    for (let i = 0; i < threeNewCards.length; i++) {
        const cardToDeal = findById(pokedex, threeNewCards[i]);
        const onePokemonCard = buildCard(cardToDeal);
        
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
    //Add update to html tags here with times encountered
    //
    
    //
    //
    //
    //
    setInLocalStorage(encountersInStorage, localEncounters);
}


function buildCard(pokedexID) {
    //Create the tags
    const labelOne = document.createElement('label');
    const inputOne = document.createElement('input');
    const imgOne = document.createElement('img');
    const nameOne = document.createElement('h2');

    //Updates to properties
    labelOne.setAttribute('id', pokedexID.id);
    imgOne.src = pokedexID.url_image;
    inputOne.setAttribute('type', 'radio');
    inputOne.setAttribute('name', 'pick-pokemon');
    inputOne.setAttribute('hidden', '');
    nameOne.textContent = (pokedexID.pokemon);

    //Appends to html
    labelOne.append(nameOne, inputOne, imgOne);

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
        
        //turn Counter
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
function getFromLocalStorage(key) {
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