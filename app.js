import { refreshCards, playAgain } from '../functions.js';

//Grab the reset button, set variables for localstorage names
const buttonReset = document.getElementById('button-reset');
const encountersInStorage = 'encountersInStorage';
const numberOfTurns = 'numberOfTurns';

//Clear local storage of items to start a fresh game
localStorage.removeItem(encountersInStorage);
localStorage.removeItem(numberOfTurns);
refreshCards();

//Event listener for change of state on the radio button
buttonReset.addEventListener('click', playAgain);
