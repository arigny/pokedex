import { fetchPokemon } from "./fetchPokemon"

const CACHE_KEY = 'allPokemon';
const CACHE_TTL = 3600 * 100;

export const fetchAllPokemon = async () => {
    const limit = 151 // up to 898
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
        const cachedResult = JSON.parse(cachedData);
        const now = new Date().getTime();
        if (cachedResult.expiry > now) {
            return cachedResult.data;
        }
    }

    const result = await fetch(url);
    const { results } = await result.json();
    const promises = results.map(async (pokemon: any) => fetchPokemon(pokemon.url));
    const pokemonData = await Promise.all(promises);
    const transformedData =  transformedPokemonData(pokemonData);

    const expiry = new Date().getTime() + CACHE_TTL;
    localStorage.setItem(CACHE_KEY, JSON.stringify({data: transformedData, expiry}))
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
