export type PokemonInfo = {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: {
    type_id: number;
    pokemon_v2_type: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonspecy: {
    pokemon_v2_pokemoncolor: {
      name: string;
    };
  };
};

export type PokemonList = {
  pokemon_v2_pokemon: PokemonInfo[];
};
