import { getFromLocalStorage, findById } from '../functions.js';
import { pokedex } from '../pokemon.js';

const playAgainButton = document.getElementById('play-again');
const results = document.getElementById('results');
const allTimeSessionsDataLS = 'allTimeSessionsDataLS';


//Need click handler to go back to main page and play again
playAgainButton.addEventListener('click', () => {
    window.location.href = '../';
});

//Chart data build
const allTimePokemon = [];
const allTimeEncounters = [];
const allTimeCaptures = [];
const allTimeLabels = [];
const allTimeSessionsData = getFromLocalStorage(allTimeSessionsDataLS);


//Build pokemon array
for (let i = 0; i < pokedex.length; i++) {
    allTimePokemon.push({ id: pokedex[i].id,
        name: pokedex[i].pokemon,
        encounters: 0,
        captures: 0,
    });      
}


//Add all encounters and captures to pokemon array
for (let i = 0; i < allTimeSessionsData.length; i++) {
    for (let j = 0; j < allTimeSessionsData[i].length; j++) {
        for (let k = 0; k < allTimePokemon.length; k++) {
            if (Number(allTimePokemon[k].id) === Number(allTimeSessionsData[i][j].id)) {
                allTimePokemon[k].captures += allTimeSessionsData[i][j].captures;
                allTimePokemon[k].encounters += allTimeSessionsData[i][j].encounters;
            }
        }
    }
}


//Build arrays for chart
for (let i = 0; i < allTimePokemon.length; i++) {
    allTimeLabels.push(allTimePokemon[i].name);
    allTimeEncounters.push(allTimePokemon[i].encounters);
    allTimeCaptures.push(allTimePokemon[i].captures);
}


//For loop for each index to build the tags and display on page.
for (let i = 0; i < allTimePokemon.length; i++) {
    const singlePokemon = findById(pokedex, Number(allTimePokemon[i].id));
    const li = document.createElement('li');
    const spanEncounter = document.createElement('span');
    const spanCaptured = document.createElement('span');

    li.textContent = singlePokemon.pokemon + ' encountered ';
    spanEncounter.textContent = allTimePokemon[i].encounters + ' time(s), and caught ';
    spanCaptured.textContent = allTimePokemon[i].captures + ' time(s).';
    li.append(spanEncounter, spanCaptured);
    results.append(li);
}

//Chart paste
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {  // eslint-disable-line
    type: 'bar',
    data: {
        labels: allTimeLabels,
        datasets: [{
            label: '# of Encounters',
            data: allTimeEncounters,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderWidth: 1
        }, {
            label: '# of Catches',
            data: allTimeCaptures,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{ 
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//Pie chart
var ctxpie = document.getElementById('pie-chart').getContext('2d');
var myChart = new Chart(ctxpie, {  // eslint-disable-line
    type: 'pie',
    data: {
        labels: allTimeLabels,
        datasets: [{
            label: '# of Encounters',
            data: allTimeEncounters,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderWidth: 1
        }, {
            label: '# of Catches',
            data: allTimeCaptures,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{ 
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});