import { Container, TextContent, PokeBall, Image } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import pokeBallPath from 'src/assets/poke_ball_grey.png';

import logoPath from 'src/assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <SafeAreaView />
      <PokeBall source={pokeBallPath} />
      <Image source={logoPath} />
      <TextContent>Search for a Pokémon by name or number</TextContent>
    </Container>
  );
};

export default Header;
