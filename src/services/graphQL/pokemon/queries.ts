import { gql } from 'graphql-request';

/*
  I don't like this solution of searching for all pokemons at once,
  I prefer to use pagination, but since the "pokeapi" does not have
  the search functionality as presented in the
  discussion (https://github.com/PokeAPI/pokeapi/issues/474),
  thinking about user usability, I implemented it this way.
*/

export const LOAD_POKEMONS = gql`
  query Pokemons {
    pokemon_v2_pokemon(limit: 905) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }
      }
    }
  }
`;
