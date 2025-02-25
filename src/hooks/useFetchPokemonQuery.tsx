import { gql, useQuery } from "@apollo/client";
import { PokemonQueryResponse } from "./types";

export interface Pokemon {
  id: number;
  name: string;
  japaneseName: string;
  image: string;
  firstType: string;
  secondType: string;
  pokeStats: Record<string, number>;
  evolutionChain: Array<{ id: number; name: string }>;
}

export const FETCH_POKEMON = gql`
  query FetchPokemon($limit: Int!) {
    pokemon: pokemon_v2_pokemonspecies(limit: $limit, order_by: { id: asc }) {
      id
      name
      jap_name: pokemon_v2_pokemonspeciesnames(
        where: { language_id: { _eq: 1 } }
      ) {
        name
      }
      details: pokemon_v2_pokemons {
        id
        name
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
        stats: pokemon_v2_pokemonstats {
          base_stat
          stat: pokemon_v2_stat {
            name
          }
        }
        image: pokemon_v2_pokemonsprites {
          sprites(path: "other.official-artwork.front_default")
        }
      }
      evolutions: pokemon_v2_evolutionchain {
        pokemon: pokemon_v2_pokemonspecies {
          id
          name
        }
      }
    }
  }
`;

export const useFetchPokemonQuery = (limit: number = 151) => {
  const { data, loading, error } = useQuery(FETCH_POKEMON, {
    variables: { limit },
  });

  const pokemonData = data ? extractPokemonData(data) : null;

  return {
    pokemonData,
    loading,
    error,
  };
};

const extractPokemonData = (data: PokemonQueryResponse): Pokemon[] => {
  if (!data?.pokemon) return [];

  return data.pokemon.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    japaneseName: pokemon.jap_name[0].name,
    image: pokemon.details[0].image[0].sprites,
    firstType: pokemon.details[0].types[0].type.name,
    secondType: pokemon.details[0].types[1]?.type.name,
    pokeStats: pokemon.details[0].stats.reduce(
      (acc: Record<string, number>, stat) => ({
        ...acc,
        [stat.stat.name]: stat.base_stat,
      }),
      {},
    ),
    evolutionChain: pokemon.evolutions.pokemon.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
    })),
  }));
};
