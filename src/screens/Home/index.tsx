import { useState } from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';
import { Header, Searchbar } from './components';

export function Home() {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Searchbar
        placeholder="Search Pokémon"
        onChangeText={setSearch}
        value={search}
        autoCorrect={false}
        autoFocus={false}
      />
    </Container>
  );
}
