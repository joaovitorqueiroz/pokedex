import { StatusBar } from 'react-native';
import { Container } from './styles';
import { Header, Searchbar } from './components';

export const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Searchbar />
    </Container>
  );
};
