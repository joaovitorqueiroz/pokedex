import usePokemonColorPalette from 'src/hooks/usePokemonColorPalette';
import useUriImagePokemon from 'src/hooks/useUriImagePokemon';
import { Chip } from 'src/components';
import { ColorOptions } from 'src/models/ColorOptions';

import {
  Container,
  Content,
  PokemonIdContainer,
  PokemonId,
  PokemonName,
  PokemonTypesContainer,
  ContainerImages,
  PokeBall,
  PokemonImage,
} from './styles';

import pokeBallPath from 'src/assets/poke_ball_white.png';

type CardProps = {
  name: string;
  id?: number;
  types: string[];
  color: ColorOptions | undefined;
};

const Card: React.FC<CardProps> = ({ name, id, types, color }) => {
  const pallet = usePokemonColorPalette(color ?? 'default');
  const { uriImagePng } = useUriImagePokemon(String(id ?? 0));
  console.log('color', color);

  return (
    <Container backgroundColor={pallet.primary}>
      <PokemonIdContainer>
        <PokemonId>{`#00${id}`}</PokemonId>
      </PokemonIdContainer>
      <Content>
        <PokemonName textColor={pallet.text}>{name}</PokemonName>
        <PokemonTypesContainer>
          {types.map(type => (
            <Chip
              key={type}
              text={type}
              color={pallet.support}
              textColor={pallet.text}
            />
          ))}
        </PokemonTypesContainer>
        <ContainerImages>
          <PokeBall source={pokeBallPath} />
          <PokemonImage source={{ uri: uriImagePng }} />
        </ContainerImages>
      </Content>
    </Container>
  );
};

export default Card;
