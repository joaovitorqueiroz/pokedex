import { useQuery } from 'react-query';
import { getPokemon } from 'src/services/api/pokemon';

export const queryKeyGetPokemon = 'getPokemon';

const useGetPokemon = () => {
  return useQuery(queryKeyGetPokemon, getPokemon);
};

export default useGetPokemon;
