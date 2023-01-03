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

export const LOAD_POKEMON_DETAIL_BY_ID = gql`
  query PokemonDetails($id: Int!) {
    pokemon_v2_pokemonspecies_by_pk(id: $id) {
      pokemon_v2_pokemons {
        id
        name
        height
        weight
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
          type_id
        }
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
      }
      pokemon_v2_pokemonspeciesflavortexts(
        where: { language_id: { _eq: 9 } }
        order_by: { version_id: asc }
        limit: 1
      ) {
        flavor_text
      }
      pokemon_v2_pokemoncolor {
        name
      }
    }
  }
`;
