import React from 'react';
import { useRoute } from '@react-navigation/native';
import { DetailsParams } from 'src/@types/navigation';
import useUriImagePokemon from 'src/hooks/useUriImagePokemon';
import useGetPokemonSpeciesDetailsByName from 'src/hooks/useGetPokemonSpeciesDetailsByName';
import { Chip, PokemonId } from 'src/components';
import { capitalize } from 'src/utils';

import {
  Container,
  PokeBall,
  SafeArea,
  Content,
  HeaderContainer,
  PokemonImage,
  PokemonName,
  PokemonTypesContainer,
  IdentityContainer,
} from './styles';

import pokeBallPath from 'src/assets/poke_ball_white.png';
import useGetPokemonDetailsByName from 'src/hooks/useGetPokemonDetailsByName';

const Details: React.FC = () => {
  const route = useRoute();
  const { palette, id, name } = route.params as DetailsParams;
  const { uriImagePng } = useUriImagePokemon(String(id ?? 0));
  const { data: pokemonDetails } = useGetPokemonDetailsByName(name ?? '');
  //TODO fix name function
  const { data: pokemonSpeciesDetails } = useGetPokemonSpeciesDetailsByName(
    pokemonDetails?.id,
  );

  const types = pokemonDetails?.types
    ? pokemonDetails?.types.map(type => type.type.name)
    : [];

  return (
    <Container backgroundColor={palette.primary}>
      <PokeBall source={pokeBallPath} />
      <HeaderContainer>
        <SafeArea>
          <IdentityContainer>
            <PokemonName textColor={palette.text}>
              {capitalize(pokemonSpeciesDetails?.name ?? '')}
            </PokemonName>
            <PokemonId id={id ?? 0} />
          </IdentityContainer>
          <PokemonTypesContainer>
            {types.map(type => (
              <Chip
                key={type}
                text={type}
                color={palette.support}
                textColor={palette.text}
              />
            ))}
          </PokemonTypesContainer>
        </SafeArea>
      </HeaderContainer>
      <Content>
        <PokemonImage source={{ uri: uriImagePng }} />
      </Content>
    </Container>
  );
};

export default Details;
