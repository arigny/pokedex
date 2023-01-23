import { useState, useEffect } from 'react';
import { fetchAllPokemon } from '../helpers/fetchAllPokemon';

export const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    fetchAllPokemon().then((pokemons) => {
      setIsLoading(false);
      setPokemons(pokemons);
    });
  }, []);

  return {
    isLoading,
    pokemons,
  };
};