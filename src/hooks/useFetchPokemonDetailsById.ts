import { useQuery } from 'react-query';
import { fetchPokemonDetailsById } from 'src/services/api/pokemon';
import Snackbar from 'react-native-snackbar';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export const queryKeyFetchPokemonDetailsById = 'fetchPokemonDetailsById';

const useFetchPokemonDetailsById = (pokemonId: number | undefined) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return useQuery(
    [queryKeyFetchPokemonDetailsById, pokemonId],
    fetchPokemonDetailsById,
    {
      enabled: !!pokemonId,
      onError: () => {
        navigation.navigate('home');
        Snackbar.show({
          text: 'Request failed!',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: theme.colors.danger,
        });
      },
    },
  );
};

export default useFetchPokemonDetailsById;
