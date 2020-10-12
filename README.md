# lab-11-pokemon-catcher

Group planning with moises, shane, sam, darren, erik.

## What should user experience?

## HTML - start page(not necessary)
- Start button
- Image

## HTML - Game page
- 3 photos
- 3 radio buttons
- 3 mutually exclusive choices
- At top of page should update how many total pokemon have been caught so far.
- A clear/reset button to refresh the game page
- Home button(not necessary)
- Stats page button


## HTML - Results page
- Display list of pokemon with:
  - Times encountered with names
  - display number captured with names
  - display names of pokemon who were encountered but never captured

## JS - game page
- States to track:
  - Track how many rounds played, tracked by captures, capture required each turn and game ends at 10 captures/rounds. After 10 turns send user to results page.
  
- The data model: 
        pokemon('the-id'): 'magikarp',
        encountered: 1,
        captured: 1,

- When page loads
  - Some kind of function to display 3 random pokemon images, must be unique.
    - Math.random(), could start with three confirmed random numbers then go get the indices that coorespond.
    - Build array first. const array = [];
      array[0] = MAth.random() * 10
      array[1] = math.random() * 10
      compare array[0] === array[1] then do something.
    - Then link array of numbers to pokedex to build a pokemon array.
    - Loop through the radio buttons and but the pokemon array onto the radio buttons in html.
    -Increment the encounters of each pokemon loaded.

- User interaction (click radio button)
  - User click, can use "changed" event listener the following should happen:
    - Find id of the html radio button get, e.target.value
    - Find pokemon with e.target.value and increment 'captures' by one.
    - Update the # of the turn.
    - update encounters
    - Need to check if turn equals 10 then game ends
    - 3 new pokemon
    
  
- User interaction (click reset button)
  - clear local storage (state)
  - reset the game 
  
        
 The pokedex to reference:       {"_id":"5cef3501ef6005a77cd4fd17","pokemon":"bulbasaur","id":1,"species_id":1,"height":7,"weight":69,"base_experience":64,"type_1":"grass","type_2":"poison","attack":49,"defense":49,"hp":45,"special_attack":65,"special_defense":65,"speed":45,"ability_1":"overgrow","ability_2":"NA","ability_hidden":"chlorophyll","color_1":"#78C850","color_2":"#A040A0","color_f":"#81A763","egg_group_1":"monster","egg_group_2":"plant","url_image":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png","generation_id":1,"evolves_from_species_id":"NA","evolution_chain_id":1,"shape_id":8,"shape":"quadruped","pokebase":"bulbasaur","pokedex":"http://www.pokemon.com/us/pokedex/bulbasaur"},

## JS - Results page
  - Display state of encounters, captures, display names of pokemon who were encountered but never captured

## CSS
 - salt to taste
