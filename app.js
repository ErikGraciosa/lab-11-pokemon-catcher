import { generateThreeUniqueNumbers } from './functions.js';
import { pokedex } from './pokemon.js';

const turnNumber = document.getElementById('turn-number');
const statesLeft = document.getElementById('states-left');
const statesRight = document.getElementById('states-right');
const cardmat = document.getElementById('cardmat');



// import functions and grab DOM elements
//grab the images with radio buttons, the uls for updating state, the buttons,


// initialize state
//init the pokemon list, init the number of pokemon caught, any kinf of init for formatting of the pictures?




// set event listeners to update state and DOM
//Event listener for change of state on the radio button

//This function will create elements and put them into the "pokemon-cards" div, if want to check previous three carts then will need to pass it what is in local storage.
function buildCard(pokedexID) {
    //Create the tags
    const labelOne = document.createElement('label');
    const inputOne = document.createElement('input');
    const imgOne = document.createElement('img');
    const nameOne = document.createElement('h2');
    // const labelTwo = document.createElement('label');
    // const inputTwo = document.createElement('input');
    // const imgTwo = document.createElement('img');
    // const nameTwo = document.createElement('h2');
    // const labelThree = document.createElement('label');
    // const inputThree = document.createElement('input');
    // const imgThree = document.createElement('img');
    // const nameThree = document.createElement('h2');


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

    return labelOne;
}


//Dynamic Draw
const threeNewCards = generateThreeUniqueNumbers();


//Feed this the pokedex and the id to get the pokedox object
function findById(array, id) {
    let objectFound = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            objectFound = array[i];
        }    
    }
    return objectFound;
}


//Generate the individual cards
const cardOne = findById(pokedex, threeNewCards[0]);
const cardTwo = findById(pokedex, threeNewCards[1]);
const cardThree = findById(pokedex, threeNewCards[2]);


//Build array to feed into for loop, this can be refactored with above to generate the card in the for loop.
const cardsToDeal = [cardOne, cardTwo, cardThree];
for (let i = 0; i < cardsToDeal.length; i++) {
    const onePokemonCard = buildCard(cardsToDeal[i]);
    cardmat.appendChild(onePokemonCard);
}