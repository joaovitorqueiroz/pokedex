export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonList = {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
};
