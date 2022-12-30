import usePokemonColorPalette from 'src/hooks/usePokemonColorPalette';
import useUriImagePokemon from 'src/hooks/useUriImagePokemon';
import { Chip } from 'src/components';

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

import pokeBallPath from 'src/assets/pokeball_white.png';

const types = ['Normal', 'Bug'];

const Card: React.FC = () => {
  const pallet = usePokemonColorPalette('green');
  const { uriImagePng } = useUriImagePokemon('1');

  return (
    <Container backgroundColor={pallet.primary}>
      <PokemonIdContainer>
        <PokemonId>{'#0001'}</PokemonId>
      </PokemonIdContainer>
      <Content>
        <PokemonName textColor={pallet.text}>Bulbasaur</PokemonName>
        <PokemonTypesContainer>
          {types.map(type => (
            <Chip text={type} color={pallet.support} />
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
