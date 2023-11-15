import React, { useState, useEffect } from 'react';
import Pokedex from './Pokedex';
import './styles.css';

// Utility function to calculate total experience
const calculateTotalExp = (pokemons) => {
  return pokemons.reduce((totalExp, pokemon) => totalExp + pokemon.health, 0);
};

function PokemonBattle({ player1Pokemons, player2Pokemons }) {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const determineWinner = () => {
      const player1Exp = calculateTotalExp(player1Pokemons);
      const player2Exp = calculateTotalExp(player2Pokemons);

      if (player1Exp > player2Exp) {
        setWinner('Player 1');
      } else if (player2Exp > player1Exp) {
        setWinner('Player 2');
      } else {
        setWinner('It\'s a tie!');
      }
    };

    determineWinner();
  }, [player1Pokemons, player2Pokemons]);

  return (
    <div className='overlay'>
      <div className='firstP'>
        <h3>Ash's Pokémon</h3>
        <p>Total Experience: {calculateTotalExp(player1Pokemons)}</p>
        <Pokedex pokemonData={player1Pokemons} />
      </div>
      <div><h1>VERSUS</h1></div>
      <div className='secondP'>
        <Pokedex pokemonData={player2Pokemons} />
        <p>Total Experience: {calculateTotalExp(player2Pokemons)}</p>
        <h3>Gray's Pokémon</h3>
      </div>

      {winner && <h2>The winner is: <span className='winner'>{winner}</span></h2>}
    </div>
  );
}

export default PokemonBattle;