import { refreshCards } from '../functions.js';

// import functions and grab DOM elements
//grab the images with radio buttons, the uls for updating state, the buttons,
const turnNumber = document.getElementById('turn-number');
const statesLeft = document.getElementById('states-left');
const statesRight = document.getElementById('states-right');


// initialize state
//init the pokemon list, init the number of pokemon caught, any kinf of init for formatting of the pictures?
refreshCards();

// set event listeners to update state and DOM
//Event listener for change of state on the radio button



//Code to update states, will need generation of list item for each pokemon and also an update to state for that particular pokemon.