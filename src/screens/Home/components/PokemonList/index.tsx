import React from 'react';
import useGetPokemon from 'src/hooks/useGetPokemon';
import useGetPokemonDetailsByName from 'src/hooks/useGetPokemonDetailsByName';
import useGetPokemonSpeciesDetailsByName from 'src/hooks/useGetPokemonSpeciesDetailsByName';
import { ColorOptions } from 'src/models/ColorOptions';
import Card from '../Card';

import { List } from './styles';

type PokemonCardProps = {
  name: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const { data: pokemonDetails, isLoading: isLoadingPokemonDetails } =
    useGetPokemonDetailsByName(name);
  const {
    data: pokemonSpeciesDetails,
    isLoading: isLoadingPokemonSpeciesDetails,
  } = useGetPokemonSpeciesDetailsByName(pokemonDetails?.id);

  const types = pokemonDetails?.types
    ? pokemonDetails?.types.map(type => type.type.name)
    : [];

  return (
    !(isLoadingPokemonSpeciesDetails && isLoadingPokemonDetails) && (
      <Card
        name={name}
        id={pokemonDetails?.id}
        types={types}
        color={pokemonSpeciesDetails?.color?.name as ColorOptions}
      />
    )
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
