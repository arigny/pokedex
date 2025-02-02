import React, { useState } from 'react';
import { PokeGrid } from './components/PokeGrid';
import { Searchbar } from './components/Searchbar';
import { usePokemons } from './hooks/usePokemons';

interface Pokemon {
    id: number;
    name: string;
    image: string;
    firstType: string;
    secondType: string;
    pokeStats: any;
}

const Pokemon = () => {
    // const typeColour = "white";
    const { isLoading, pokemons } = usePokemons();
    const [search, setSearch] = useState('');

    const currentPage = 0;

    const filteredPokemon = () => {
        if (!pokemons) return [];

        if (search.length === 0) {
            return pokemons.slice(currentPage, currentPage + 50);
        }

        const filtered = pokemons.filter(
            (pokemon: Pokemon) => pokemon.name.includes(search.toLowerCase()) || (pokemon.id.toString() === search )
        );

        console.log({filtered});
        return filtered
    }

    return (
        <div>
            <Searchbar search={search} setSearch={setSearch}/>
            <PokeGrid pokemons={filteredPokemon()} />
        </div>
    )
}

export default Pokemon;
