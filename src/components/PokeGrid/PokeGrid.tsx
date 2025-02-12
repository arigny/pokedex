import { PokeCard } from '../PokeCard';

import './PokeGrid.css';

interface Pokemon {
    id: number | string;
    name: string;
    japaneseName: string;
    image: string;
    firstType: string;
    secondType: string;
    pokeStats: Record<string, number>;
    evolutionChain: Array<{id: number; name: string}>;
}

export const PokeGrid = ({ pokemons }: any) => {

    const errorMessages = [
        "Oh sorry",
        "Snorlax is blocking the path!",
        "The sleeping Wooloo are blocking the path!",
        "The Psyduck are standing firm and blocking the path!"
    ]

    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const pokemonNotFound = () => {
        const index = getRandomInt(0, errorMessages.length);
        return errorMessages[index];
    }

    return (
        <div>
            {pokemons.length > 0 ? (
                <div className="card-grid">
                    {pokemons.map((pokemon: Pokemon) => <PokeCard key={pokemon.id} {...pokemon} />)}
                </div>
                ) : (
                <div className="not-found">{pokemonNotFound()} <br/> We didn't find that pokemon 🙁 </div>
            )}
        </div>
    );
};
