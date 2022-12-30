import { Container, TextContent, Title, Pokeball } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import pokeballPath from 'src/assets/pokeball_grey.png';

const Header: React.FC = () => {
  return (
    <Container>
      <SafeAreaView />
      <Pokeball source={pokeballPath} />
      <Title>Pokédex</Title>
      <TextContent>Search for a Pokémon by name</TextContent>
    </Container>
  );
};

export default Header;
