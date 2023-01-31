import { PokeCard } from '../PokeCard';

import './PokeGrid.css';

interface Pokemon {
    id: number;
    name: string;
    image: string;
    firstType: string;
    secondType: string;
}

export const PokeGrid = ({ pokemons }: any) => {

  return (
    <div>
        {pokemons.length > 0 ? (
            <div className="card-grid">
                {pokemons.map((pokemon: Pokemon) => <PokeCard key={pokemon.id} {...pokemon} />)}
            </div>
            ) : (
            <div className="not-found">- Oh sorry we didn't find that pokemon 🙁 -</div>
        )}
    </div>
  );
};
