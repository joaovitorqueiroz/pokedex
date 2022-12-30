import { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Container } from './styles';
import { Header, Searchbar, Card } from './components';

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
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          justifyContent: 'space-between',
        }}>
        <Card />
        <Card />
      </View>
    </Container>
  );
}
