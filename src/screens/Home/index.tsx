import { useState } from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';
import { Header, SearchBar, PokemonList } from './components';
import useFetchAllPokemons from 'src/hooks/useFetchAllPokemons';

export function Home() {
  const [search, setSearch] = useState('');

  const { data, isLoading } = useFetchAllPokemons();
  const pokemonData = data?.pokemon_v2_pokemon || [];

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <SearchBar
        placeholder="Search Pokémon"
        onChangeText={setSearch}
        value={search}
        autoCorrect={false}
        autoFocus={false}
      />
      {!isLoading && <PokemonList pokemonData={pokemonData!} />}
    </Container>
  );
}
