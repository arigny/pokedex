import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

function App() {

  const getPokemon = async (id: number): Promise<IPokemon> => {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon: any = await data.json()
    const pokemonType: string = pokemon.types
        .map((poke: any) => poke.type.name)
        .join(", ")
    const pokemonAbilities: string = pokemon.abilities
        .map((poke: any) => poke.ability.name)
        .join(", ")
    console.log(pokemonAbilities)
    // setName(pokemon.name)
    const transformedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        // image: `${pokemon.sprites.front_default}`,
        image: `${pokemon.sprites.other['official-artwork'].front_default}`,
        type: pokemonType,
    }

    return transformedPokemon
}

  const temp = getPokemon(2);

  return (
    <div className="App">
      <header className="App-header">
      <Pokemon />
      {/* <Pokemon id={2} name={'b'} type={'fire'} image={'img'}/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
