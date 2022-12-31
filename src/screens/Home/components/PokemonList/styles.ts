import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { Pokemon } from 'src/models/PokemonList';

export const List = styled(
  FlatList as new (props: FlatListProps<Pokemon>) => FlatList<Pokemon>,
).attrs({
  contentContainerStyle: { paddingBottom: 20 },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
})`
  padding-left: 16px;
  padding-right: 16px;
`;
