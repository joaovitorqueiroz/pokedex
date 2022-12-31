import { useQuery } from 'react-query';
import { getPokemonDetailsByName } from 'src/services/api/pokemon';

export const queryKeyGetPokemonDetailsByName = 'getPokemonDetailsByName';

const useGetPokemonDetailsByName = (name: string) => {
  return useQuery([queryKeyGetPokemonDetailsByName, name], () =>
    getPokemonDetailsByName(name),
  );
};

export default useGetPokemonDetailsByName;
