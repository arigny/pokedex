import { useEffect, useRef, useState } from "react";
import { PokeGrid } from "./components/PokeGrid";
import { Searchbar } from "./components/Searchbar";
import { useFetchPokemonQuery } from "./hooks/useFetchPokemonQuery";
import type { Pokemon } from "./hooks/useFetchPokemonQuery";

const Pokemon = () => {
  // const typeColour = "white";
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(50);
  const observerTarget = useRef<HTMLDivElement>(null);

  const numberOfPokemon = 1025;
  const { pokemonData: pokemons, loading } =
    useFetchPokemonQuery(numberOfPokemon);

  const currentPage = 0;
  const isSearching = search.length > 0;

  const filteredPokemon = () => {
    if (!pokemons) return [];

    if (!isSearching) {
      return pokemons.slice(currentPage, offset);
    }

    const filtered = pokemons.filter(
      (pokemon: Pokemon) =>
        pokemon.name.includes(search.toLowerCase()) ||
        pokemon.id.toString() === search,
    );

    return filtered;
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (
        target.isIntersecting &&
        !loading &&
        !isSearching &&
        offset < numberOfPokemon
      ) {
        setOffset((prev) => prev + 50);
      }
    }, options);

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loading, isSearching, offset, numberOfPokemon]);

  return (
    <div>
      <Searchbar search={search} setSearch={setSearch} />
      <PokeGrid pokemons={filteredPokemon()} />
      <div ref={observerTarget} />
    </div>
  );
};

export default Pokemon;
