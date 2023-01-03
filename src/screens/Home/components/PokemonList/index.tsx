import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import usePokemonColorPalette from 'src/hooks/usePokemonColorPalette';
import { ColorOptions } from 'src/models/ColorOptions';
import { PokemonInfo } from 'src/models/PokemonList';
import Card from '../Card';

import { List } from './styles';

type RenderItemProps = {
  item: PokemonInfo;
};

const RenderItem: React.FC<RenderItemProps> = memo(
  ({ item }) => {
    const name = item.name;
    const id = item.id;
    const types =
      item?.pokemon_v2_pokemontypes &&
      item?.pokemon_v2_pokemontypes.map(type => type.pokemon_v2_type.name);
    const color = item.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor
      .name as ColorOptions;
    const palette = usePokemonColorPalette(color);
    const navigation = useNavigation();

    const handleOpenDetails = () => {
      requestAnimationFrame(() => {
        navigation.navigate('details', {
          id,
          palette,
          name,
        });
      });
    };

    return (
      <Card
        name={name}
        id={id}
        types={types}
        palette={palette}
        onPress={handleOpenDetails}
      />
    );
  },
  (prevProps, nextProps) => {
    return nextProps.item.id === prevProps.item.id;
  },
);

type PokemonListProps = {
  pokemonData: PokemonInfo[];
};

const PokemonList: React.FC<PokemonListProps> = ({ pokemonData }) => {
  return (
    <List
      data={pokemonData}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={item => item.name}
    />
  );
};

export default PokemonList;
