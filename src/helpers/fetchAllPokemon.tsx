import { fetchPokemon } from "./fetchPokemon"

export const fetchAllPokemon = async () => {
    const limit = 100 // up to 898
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const result = await fetch(url);
    const { results } = await result.json();
    const promises = results.map(async (pokemon: any) => fetchPokemon(pokemon.url));
    const pokemonData = await Promise.all(promises);
    return transformedPokemonData(pokemonData);
};

const transformedPokemonData = (data: any) => {
    const pokemons = data.map(({ id, name, sprites, types, stats }: any) => {
        const image = sprites.other['official-artwork'].front_default;
        const firstType = types[0].type.name;
        const secondType = types[1]?.type.name;
        const [hp, attack, defense, specialAttack, specialDefense, speed] = stats.map((stat: any) => stat.base_stat);
        const pokeStats = {hp, attack, defense, specialAttack, specialDefense, speed};
        return { id, name, image, firstType, secondType, pokeStats };
    });
    return pokemons;
};
