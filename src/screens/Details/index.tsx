import React from 'react';
import { useRoute } from '@react-navigation/native';
import { DetailsParams } from 'src/@types/navigation';
import useUriImagePokemon from 'src/hooks/useUriImagePokemon';
import { Chip, Loading, PokemonId } from 'src/components';
import { capitalize } from 'src/utils';
import { Summary } from './components';

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
import useFetchPokemonDetailsById from 'src/hooks/useFetchPokemonDetailsById';

const Details: React.FC = () => {
  const route = useRoute();
  const { palette, id, name } = route.params as DetailsParams;
  const { data, isLoading } = useFetchPokemonDetailsById(id);

  const uri = useUriImagePokemon(id ?? 0);
  const types = data?.types
    ? data?.types?.map(type => type.pokemon_v2_type.name)
    : [];

  return (
    <Container backgroundColor={palette.primary}>
      <PokeBall source={pokeBallPath} />
      <HeaderContainer>
        <SafeArea>
          <IdentityContainer>
            <PokemonName textColor={palette.text}>
              {capitalize(name ?? '')}
            </PokemonName>
            <PokemonId id={id ?? 0} />
          </IdentityContainer>
          <PokemonTypesContainer>
            {types.map(type => (
              <Chip
                columnGap={8}
                rowGap={10}
                key={type}
                text={type ?? ''}
                color={palette.support}
                textColor={palette.text}
              />
            ))}
          </PokemonTypesContainer>
        </SafeArea>
      </HeaderContainer>
      <Content>
        <PokemonImage source={{ uri }} />
        {isLoading ? <Loading /> : <Summary data={data!} />}
      </Content>
    </Container>
  );
};

export default Details;
