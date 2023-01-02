import { Chip, PokemonId } from 'src/components';
import { capitalize } from 'src/utils';
import { memo } from 'react';

import {
  Container,
  Content,
  PokemonIdContainer,
  PokemonName,
  PokemonTypesContainer,
  ContainerImages,
  PokeBall,
  PokemonImage,
} from './styles';

import pokeBallPath from 'src/assets/poke_ball_white.png';
import { PokemonColorPalette } from 'src/models/PokemonColorPalette';
import useUriImagePokemon from 'src/hooks/useUriImagePokemon';

type CardProps = {
  name: string;
  id?: number;
  types: string[];
  palette: PokemonColorPalette;
  onPress: () => void;
};

const Card: React.FC<CardProps> = ({ name, id, types, palette, onPress }) => {
  const uri = useUriImagePokemon(id ?? 0);

  return (
    <Container
      backgroundColor={palette.primary}
      onPress={onPress}
      testID="card">
      <PokemonIdContainer>
        <PokemonId id={id ?? 0} />
      </PokemonIdContainer>
      <Content>
        <PokemonName textColor={palette.text}>{capitalize(name)}</PokemonName>
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
        <ContainerImages>
          <PokeBall accessibilityLabel="poke-ball" source={pokeBallPath} />
          <PokemonImage accessibilityLabel="pokemon-image" source={{ uri }} />
        </ContainerImages>
      </Content>
    </Container>
  );
};

export default memo(Card, (prevProps, nextProps) => {
  return nextProps.id === prevProps.id;
});
