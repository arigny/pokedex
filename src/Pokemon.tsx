import React, { useState } from 'react';
import { PokeCard } from './components/PokeCard';
import { Searchbar } from './components/Searchbar';
import { usePokemons } from './hooks/usePokemons';

interface Pokemon {
    id: number;
    name: string;
    image: string;
    firstType: string;
    secondType: string;
}

const Pokemon = () => {


    // getPokemon(736);
    // const typeColour = "#FF5733";
    const typeColour = "white";
    const { pokemons } = usePokemons();
    const [search, setSearch] = useState('');

    const currentPage = 0;

    const filteredPokemon = () => {
        if (search.length === 0) {
            return pokemons.slice(currentPage, currentPage + 50);
        }

        const filtered = pokemons.filter(
            (pokemon: Pokemon) => pokemon.name.includes(search.toLowerCase()) || (pokemon.id.toString() === search )
            // (pokemon: Pokemon) => pokemon.name.includes(search.toLowerCase()) || pokemon.id.toString().includes(search)
        );

        console.log({filtered});
        return filtered
    }

    return (
        <div>
            <Searchbar search={search} setSearch={setSearch}/>
            <div className="card-grid">
                {filteredPokemon().map((pokemon: Pokemon) => <PokeCard key={pokemon.id} {...pokemon} />)}
            </div>
        </div>
    )
}

export default Pokemon;