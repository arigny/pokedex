import React, { useEffect, useState } from 'react';
import { PokeCard } from './PokeCard';
import { usePokemons } from './hooks/usePokemons';

interface IPokemon {
    id: number;
    name: string;
    image: string;
    firstType: string;
    secondType: string;
}

// function Pokemon({id, name, image, type}:IPokemon) {
function Pokemon() {
    // const [name, setName] = useState<any>('' || []);
    // const [type, setType] = useState('');
    // const [image, setImage] = useState('');
    // const [id, setId] = useState(0);

    // useEffect(() => {
    //     getPokemon(1)
    // })

    // const getPokemon = async (id: number): Promise<void> => {
    //     const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     const pokemon: any = await data.json()
    //     const pokemonType: string = pokemon.types
    //         .map((poke: any) => poke.type.name)
    //         .join(", ")
    //     const pokemonAbilities: string = pokemon.abilities
    //         .map((poke: any) => poke.ability.name)
    //         .join(", ")
    //     console.log(pokemonAbilities)

    //     const transformedPokemon = {
    //         id: pokemon.id,
    //         name: pokemon.name,
    //         image: `${pokemon.sprites.other['official-artwork'].front_default}`,
    //         firstType: pokemonType,
    //         secondType: pokemonType,
    //     }

    //     setId(transformedPokemon.id);
    //     setName(transformedPokemon.name);
    //     setType(transformedPokemon.firstType);
    //     setImage(transformedPokemon.image);
    //     const res = showPokemon(transformedPokemon)
    //     console.log(res)
    // }

    // const showPokemon = (pokemon: IPokemon): string => {
    //     let output: string = `${pokemon.id} ${pokemon.name} ${pokemon.firstType} ${pokemon.image}`
    //     return output
    // }

    // getPokemon(736);
    // const typeColour = "#FF5733";
    const typeColour = "white";
    const { pokemons } = usePokemons();

    return (
        <div className="card-grid">
            {pokemons.map((pokemon: any) => <PokeCard id={pokemon.id} name={pokemon.name} image={pokemon.image} firstType={pokemon.firstType} secondType={pokemon.secondType} />)}
        </div>
    )
}

export default Pokemon;