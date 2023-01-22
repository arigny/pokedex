import React, { useEffect, useState } from 'react';
import { PokeCard } from './PokeCard';

interface IPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

// function Pokemon({id, name, image, type}:IPokemon) {
function Pokemon() {
    const [name, setName] = useState<any>('' || []);
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [id, setId] = useState(0);

    useEffect(() => {
        getPokemon(1)
    })

    const getPokemon = async (id: number): Promise<void> => {
        const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemon: any = await data.json()
        const pokemonType: string = pokemon.types
            .map((poke: any) => poke.type.name)
            .join(", ")
        const pokemonAbilities: string = pokemon.abilities
            .map((poke: any) => poke.ability.name)
            .join(", ")
        console.log(pokemonAbilities)

        const transformedPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            image: `${pokemon.sprites.other['official-artwork'].front_default}`,
            type: pokemonType,
        }

        setId(transformedPokemon.id);
        setName(transformedPokemon.name);
        setType(transformedPokemon.type);
        setImage(transformedPokemon.image);
        const res = showPokemon(transformedPokemon)
        console.log(res)
    }

    const showPokemon = (pokemon: IPokemon): string => {
        let output: string = `${pokemon.id} ${pokemon.name} ${pokemon.type} ${pokemon.image}`
        return output
    }

    // getPokemon(736);
    // const typeColour = "#FF5733";
    const typeColour = "white";
    return (
        <div className="cards">
            <PokeCard id={id} name={name} image={image} type={type} />
        </div>
    )
}

export default Pokemon;