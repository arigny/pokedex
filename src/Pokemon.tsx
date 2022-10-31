import React, { useEffect, useState } from 'react';
import { isPlusToken } from 'typescript';

interface IPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

// function Pokemon({id, name, image, type}:IPokemon) {
function Pokemon() {
    // const [error, setError] = useState('');
    const [name, setName] = useState('' || []);
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        // getPokemon(1)
        getPokemon(2)
    })
    // }, [])

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


    // const data = fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         } else {
    //             throw new Error("Sorry something went wrong")
    //         }
    //     })
    //     .then(users => {
    //         console.log(users.abilities['0']['ability']['name']);
    //         console.log(users.abilities['1']['ability']['name']);
    //         // console.log(users)
    //         return users;
    //     })
        // .catch(error => {
        //     setError(error.message)
        // })

    // return <div>{`${id}, ${name}, ${type}, ${image}`}</div>

    getPokemon(736);
    return (
        <div>
            <p>{id} | {name} | {type}</p>
            {/* <img src={image} /> */}
        </div>
    )
}

export default Pokemon;