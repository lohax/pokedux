import {fetchPokemonSuccess, fetchPokemonPending} from './action'
const numberOfPokemons = 151

const urls = [] // tableau des toutes les urls de pokemons

for(let  i = 1; i<= numberOfPokemons; i++){
    urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
}

const requests = urls.map(url => fetch(url)) // le map créé un tableau de requetes en passant une a une chaques url

export default () => {
    return dispatch => {
        dispatch(fetchPokemonPending())

        Promise.all(requests) // il met en pause tout le code jusqu'a ce que l'ensemble des requetes soient executées
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(pokemons => pokemons.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            captureRate: pokemon.capture_rate,
            isCatch: false,
            img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
            //img:`http://pokeapi.co/media/sprites/pokemon/${pokemon.id}.png`
        })))
        .then(pokemons => dispatch(fetchPokemonSuccess(pokemons)))
    }
}