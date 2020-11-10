import React, { useEffect } from "react";
import "./styles.css";

import { connect } from "react-redux";

import { CLICK, showPokemonAction, catchPokemonAction } from "./store/action"
import fetchPokemons from './store/fetchPokemons'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

import Loader from "./components/Loader"

const App = ({ click, fetchPokemons, pending, showPokemon, pokemons, catchPokemon }) => {
  useEffect(() => { // lance le fetch au chargement
    fetchPokemons()
  }, [fetchPokemons]) // lance fetchPokemons a cahque fois qu'il est modifié

  if (pending) {

    return <Loader />
  }

  return (
    <div className="App">
      <GameBoy
        showPokemon={() => showPokemon(pokemons)}
        catchPokemon={catchPokemon}
      />
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({ pending, pokemons }) => {
  return {
    pending,
    pokemons
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    click: () => dispatch({ type: CLICK }),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
    catchPokemon: () => dispatch(catchPokemonAction())
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(App);
