//Create a function that makes three unique random numbers

import { pokedex } from './pokemon.js';

//DOM



function randomNumber() {
    const lengthOfPokedex = 14;
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
        const cardsToDeal = findById(pokedex, threeNewCards[i]);
        const onePokemonCard = buildCard(cardsToDeal);
        cardmat.appendChild(onePokemonCard);
    }
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
        const pokeid = document.querySelectorAll('label');
        
        for (let i = 0; i < pokeid.length; i++) {
            pokeid[i].remove();
        }
        refreshCards();
    });

    return labelOne;
}