import React from 'react';
import useGetPokemon from 'src/hooks/useGetPokemon';
import { useNavigation } from '@react-navigation/native';
import useGetPokemonDetailsByName from 'src/hooks/useGetPokemonDetailsByName';
import useGetPokemonSpeciesDetailsByName from 'src/hooks/useGetPokemonSpeciesDetailsByName';
import { ColorOptions } from 'src/models/ColorOptions';
import Card from '../Card';

import { List } from './styles';
import usePokemonColorPalette from 'src/hooks/usePokemonColorPalette';

type PokemonCardProps = {
  name: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const navigation = useNavigation();
  const { data: pokemonDetails } = useGetPokemonDetailsByName(name);
  const { data: pokemonSpeciesDetails } = useGetPokemonSpeciesDetailsByName(
    pokemonDetails?.id,
  );
  const color = pokemonSpeciesDetails?.color?.name as ColorOptions;
  const palette = usePokemonColorPalette(color ?? 'default');

  const types = pokemonDetails?.types
    ? pokemonDetails?.types.map(type => type.type.name)
    : [];

  const handleOpenDetails = (id: number | undefined) => {
    navigation.navigate('details', {
      id,
      palette,
      name,
    });
  };

  return (
    <Card
      name={name}
      id={pokemonDetails?.id}
      types={types}
      palette={palette}
      onPress={() => handleOpenDetails(pokemonDetails?.id)}
    />
  );
};

const PokemonList: React.FC = () => {
  const { data } = useGetPokemon();
  const pokemonList = data?.results || [];

  return (
    <List
      data={pokemonList}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({ item }) => <PokemonCard name={item.name} />}
      keyExtractor={item => item.name}
    />
  );
};

export default PokemonList;
