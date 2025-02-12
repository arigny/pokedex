import React, { useState } from 'react';
import { PokeGrid } from './components/PokeGrid';
import { Searchbar } from './components/Searchbar';
import { useFetchPokemonQuery } from './hooks/useFetchPokemonQuery';

interface Pokemon {
    id: number;
    name: string;
    japaneseName: string;
    image: string;
    firstType: string;
    secondType: string;
    pokeStats: Record<string, number>;
    evolutionChain: Array<{id: number; name: string}>;
}

const Pokemon = () => {
    // const typeColour = "white";
    const [search, setSearch] = useState('');
    const {pokemonData: pokemons, loading, error} = useFetchPokemonQuery();

    const currentPage = 0;

    const filteredPokemon = () => {
        if (!pokemons) return [];

        if (search.length === 0) {
            return pokemons.slice(currentPage, currentPage + 50);
        }

        const filtered = pokemons.filter(
            (pokemon: Pokemon) => pokemon.name.includes(search.toLowerCase()) || (pokemon.id.toString() === search )
        );

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
