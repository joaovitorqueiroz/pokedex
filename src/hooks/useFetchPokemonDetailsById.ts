import { useQuery } from 'react-query';
import { fetchPokemonDetailsById } from 'src/services/api/pokemon';

export const queryKeyFetchPokemonDetailsById = 'fetchPokemonDetailsById';

const useFetchPokemonDetailsById = (pokemonId: number | undefined) => {
  return useQuery(
    [queryKeyFetchPokemonDetailsById, pokemonId],
    fetchPokemonDetailsById,
    {
      enabled: !!pokemonId,
    },
  );
};

export default useFetchPokemonDetailsById;
