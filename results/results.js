import { playAgain, getFromLocalStorage, findById } from '../functions.js';
import { pokedex } from '../pokemon.js';
const playAgainButton = document.getElementById('play-again');
const results = document.getElementById('results');

//Add results page here
//Will need to generate html tags



const encountersInStorage = 'encountersInStorage';
const localEncounters = getFromLocalStorage(encountersInStorage) || 'No pokemon caught';


//For loop for each index to build the tags and display on page.
for (let i = 0; i < localEncounters.length; i++) {
    
    const singlePokemon = findById(pokedex, Number(localEncounters[i].id));
    

    const li = document.createElement('li');
    const spanEncounter = document.createElement('span');
    const spanCaptured = document.createElement('span');

    li.textContent = singlePokemon.pokemon + ' encountered ';
    spanEncounter.textContent = localEncounters[i].encounters + ' time(s), and caught ';
    spanCaptured.textContent = localEncounters[i].captures + ' time(s).';
    li.append(spanEncounter, spanCaptured);
    results.append(li);
}

//Need click handler to go back to main page and play again

playAgainButton.addEventListener('click', playAgain);


//Chart paste
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {  // eslint-disable-line
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});