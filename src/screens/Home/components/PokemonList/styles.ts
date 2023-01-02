import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { PokemonInfo } from 'src/models/PokemonList';

export const List = styled(
  FlatList as new (props: FlatListProps<PokemonInfo>) => FlatList<PokemonInfo>,
).attrs({
  contentContainerStyle: { paddingBottom: 20 },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
})`
  padding-left: 16px;
  padding-right: 16px;
`;
