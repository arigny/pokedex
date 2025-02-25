export type PokemonQueryResponse = {
  pokemon: PokemonQueryResult[];
};

type PokemonQueryResult = {
  id: number;
  name: string;
  jap_name: Array<{ name: string }>;
  details: Array<{
    id: number;
    name: string;
    types: Array<{
      type: {
        name: string;
      };
    }>;
    stats: Array<{
      base_stat: number;
      stat: {
        name: string;
      };
    }>;
    image: Array<{
      sprites: string;
    }>;
  }>;
  evolutions: {
    pokemon: Array<{
      id: number;
      name: string;
    }>;
  };
};
