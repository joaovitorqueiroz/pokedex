import { useQuery } from 'react-query';
import { getPokemonSpeciesDetailsByName } from 'src/services/api/pokemon_species';

export const queryKeyGetPokemonSpeciesDetailsByName =
  'getPokemonSpeciesDetailsByName';

const useGetPokemonSpeciesDetailsByName = (id: number | undefined) => {
  return useQuery(
    [queryKeyGetPokemonSpeciesDetailsByName, id],
    () => getPokemonSpeciesDetailsByName(id),
    { enabled: !!id },
  );
};

export default useGetPokemonSpeciesDetailsByName;
