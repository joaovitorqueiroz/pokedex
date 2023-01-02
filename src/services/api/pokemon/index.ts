import { PokemonList } from 'src/models/PokemonList';
import graphQLClient from 'src/services/client';
import { LOAD_POKEMONS } from 'src/services/graphQL/pokemon/queries';

export const fetchAllPokemon = async () => {
  const data = await graphQLClient.request(LOAD_POKEMONS);

  return data as PokemonList;
};
