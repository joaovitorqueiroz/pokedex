import { renderHook } from '@testing-library/react-native';
import useUriImagePokemon from '../useUriImagePokemon';

jest.mock('styled-components', () => ({
  useTheme: jest.fn(() => require('src/styles/themes/default').default),
}));

describe('useUriImagePokemon', () => {
  describe('When receiving a pokemon id, it should return the URI for the corresponding pokemon image', () => {
    it('should return the URI correctly', () => {
      const pokemonId = 1;
      const { result } = renderHook(() => useUriImagePokemon(pokemonId));

      expect(result.current).toEqual(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      );
    });
  });
});
