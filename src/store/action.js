export const CLICK = 'CLICK'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING'
export const SHOW_POKEMON = 'SHOW_POKEMON'
export const CATCH_POKEMON = 'CATCH_POKEMON'

export const fetchPokemonSuccess = pokemons => ({
    type: FETCH_POKEMON_SUCCESS,
    pokemons
})

export const fetchPokemonPending = pokemons => ({
    type: FETCH_POKEMON_PENDING
})

export const showPokemonAction = pokemons => {
    const filteredPokemons = pokemons.filter(pokemon => !pokemon.isCatch);
    //console.log(filteredPokemons)
    
    const max = filteredPokemons.length;
    //console.log(max)

    const random = Math.floor(Math.random() * max);
    //console.log(random)

    const onScreen = filteredPokemons[random];
    //console.log(onScreen)

    return dispatch => {
        dispatch({ type: SHOW_POKEMON, onScreen })
    }
}

export const catchPokemonAction = () => {
    const random = Math.floor(Math.random() * 255);

    return dispatch => {
        dispatch({ type: CATCH_POKEMON, random })
    }
}