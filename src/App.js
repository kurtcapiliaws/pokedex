import React from 'react';
import PokemonBattle from './PokemonBatlle';
import Pokedex from './Pokedex';
import './styles.css';

function getRandomPokemons(excludePokemons = []) {
  const allPokemons = Pokedex.defaultProps.pokemonData;
  const availablePokemons = allPokemons.filter(pokemon => !excludePokemons.includes(pokemon));
  const shuffledPokemons = availablePokemons.sort(() => 0.5 - Math.random());
  return shuffledPokemons.slice(0, 4);
}

function App() {
  const player1Pokemons = getRandomPokemons();
  const player2Pokemons = getRandomPokemons(player1Pokemons);

  return (
    <div>
      <PokemonBattle
        player1Pokemons={player1Pokemons}
        player2Pokemons={player2Pokemons}
        
      />
    </div>
  );
}


export default App;