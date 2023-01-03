import { useQuery } from 'react-query';
import { fetchAllPokemon } from 'src/services/api/pokemon';
import Snackbar from 'react-native-snackbar';
import { useTheme } from 'styled-components/native';

export const queryKeyFetchAllPokemon = 'fetchAllPokemon';

const useFetchAllPokemons = () => {
  const theme = useTheme();

  return useQuery(queryKeyFetchAllPokemon, fetchAllPokemon, {
    onError: () => {
      Snackbar.show({
        text: 'Request failed!',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: theme.colors.danger,
      });
    },
  });
};

export default useFetchAllPokemons;
