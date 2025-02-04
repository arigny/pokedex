import { useState, useEffect } from 'react';
import { fetchAllPokemon } from '../helpers/fetchAllPokemon';

export const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<any>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const fetchedPokemons = await fetchAllPokemon();
        setPokemons(fetchedPokemons);
      } catch (err) {
        setError(new Error('Failed to fetch Pokemon data'));
        setPokemons([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, [isLoading]);

  return {
    isLoading,
    pokemons,
    error,
  };
};
