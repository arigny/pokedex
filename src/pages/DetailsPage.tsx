import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const DetailsPage = () => {
  const state = useLocation().state;
  const capitalizedName = state.name.slice(0,1).toUpperCase() + state.name.slice(1);

  let id: string;
  const padId = () => {
    const idLength = state.id.toString().length;
    if (idLength === 1) {
        id = "00" + state.id.toString();
    }
    else if (idLength === 2) {
        id = "0" + state.id.toString();
    }
    else {
      id = state.id.toString();
    }
    return id;
}

  return (
    <div style={{textDecoration: 'none', color: 'black'}}>
      <p>{capitalizedName} #{padId()}</p>
      <p>HP: {state.pokeStats.hp}</p>
      <p>Attack: {state.pokeStats.attack}</p>
      <p>Defense: {state.pokeStats.defense}</p>
      <p>Sp Attack: {state.pokeStats.specialAttack}</p>
      <p>Sp Defense: {state.pokeStats.specialDefense}</p>
      <p>Speed: {state.pokeStats.speed}</p>
      <Link to={{pathname: '/'}} style={{textDecoration: 'none'}}>Back to search</Link>
    </div>
  )
}
