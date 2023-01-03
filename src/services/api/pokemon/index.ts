import { QueryFunctionContext } from 'react-query';
import { PokemonDetails } from 'src/models/PokemonDetails';
import { PokemonList } from 'src/models/PokemonList';
import graphQLClient from 'src/services/client';
import {
  LOAD_POKEMONS,
  LOAD_POKEMON_DETAIL_BY_ID,
} from 'src/services/graphQL/pokemon/queries';

export const fetchAllPokemon = async () => {
  const data = await graphQLClient.request(LOAD_POKEMONS);

  return data as PokemonList;
};

export const fetchPokemonDetailsById = async ({
  queryKey,
}: QueryFunctionContext) => {
  const [, pokemonId] = queryKey;
  const data = await graphQLClient.request(LOAD_POKEMON_DETAIL_BY_ID, {
    id: pokemonId,
  });

  const result = {
    id: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].id,
    name: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].name,
    height: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].height,
    weight: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].weight,
    description:
      data?.pokemon_v2_pokemonspecies_by_pk
        ?.pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text,
    color: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemoncolor.name,
    types:
      data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0]
        .pokemon_v2_pokemontypes,
    stats:
      data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0]
        .pokemon_v2_pokemonstats,
  };

  return result as PokemonDetails;
};
