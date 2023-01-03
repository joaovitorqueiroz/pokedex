export type PokemonDetails = {
  id: string | undefined;
  name: string | undefined;
  height: number | undefined;
  weight: number | undefined;
  description: string | undefined;
  color: string | undefined;
  types:
    | {
        type_id: number | undefined;
        pokemon_v2_type: {
          name: string | undefined;
        };
      }[]
    | undefined;
  stats:
    | {
        base_stat: number;
        pokemon_v2_stat: {
          name: string;
        };
      }[]
    | undefined;
};
