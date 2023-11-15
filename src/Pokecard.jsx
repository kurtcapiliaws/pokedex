import React from 'react';
import './styles.css';

function Pokecard({ id, name, type, base_experience }) {
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  
  return (
    <div className="CardBody">
      <div className="Pokecard">
        <div className="Pokecard-inner">
          <div className="Pokecard-face Pokecard-front">
            <img src={imageUrl} alt={name} className='pokeimg'/> 
          </div>
          
            <div className="Pokecard-face Pokecard-back">
            <div className='overlay'>
              <h3 className="shiro">{name}</h3>
              <p className="shiro">Type: {type}</p>
              <p className="shiro">Experience:{base_experience}</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokecard;