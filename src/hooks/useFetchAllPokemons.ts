import { useQuery } from 'react-query';
import { fetchAllPokemon } from 'src/services/api/pokemon';

export const queryKeyFetchAllPokemon = 'fetchAllPokemon';

const useFetchAllPokemons = () => {
  return useQuery(queryKeyFetchAllPokemon, fetchAllPokemon);
};

export default useFetchAllPokemons;
