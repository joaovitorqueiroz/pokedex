import { useState } from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';
import { Header, SearchBar, PokemonList } from './components';
import useFetchAllPokemons from 'src/hooks/useFetchAllPokemons';
import { Loading } from 'src/components';

export function Home() {
  const [search, setSearch] = useState('');

  const { data, isLoading } = useFetchAllPokemons();
  const pokemonList = data?.pokemon_v2_pokemon || [];

  /*
    I don't like to perform the search filter that way.
    I prefer for it to be done in the API, returning the items in
    pagination format to allow the use of the "infinite scroll."
    However, as the "pokeapi" does not have this functionality,
    as shown in the discussion (https://github.com/PokeAPI/pokeapi/issues/474),
    I implemented it this way, considering user usability.
  */

  const filteredPokemonData =
    search.length > 0
      ? pokemonList.filter(
          pokemon =>
            pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
            String(pokemon.id) === search,
        )
      : [];

  const pokemonData = search.length > 0 ? filteredPokemonData : pokemonList;

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
      {isLoading ? <Loading /> : <PokemonList pokemonData={pokemonData} />}
    </Container>
  );
}
