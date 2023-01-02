import { renderHook } from '@testing-library/react-native';
import usePokemonColorPalette from '../usePokemonColorPalette';
const theme = require('src/styles/themes/default').default;

jest.mock('styled-components', () => ({
  useTheme: jest.fn(() => require('src/styles/themes/default').default),
}));

describe('usePokemonColorPalette', () => {
  describe("When it receives the pokemon's base color, it must return the corresponding palette", () => {
    it('Should correctly return color palette of black color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('black'));

      expect(result.current).toEqual({
        primary: theme.colors.black_100,
        secondary: theme.colors.black_200,
        support: theme.colors.black_300,
        text: theme.colors.white,
      });
    });

    it('Should correctly return color palette of blue color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('blue'));

      expect(result.current).toEqual({
        primary: theme.colors.blue_100,
        secondary: theme.colors.blue_200,
        support: theme.colors.blue_300,
        text: theme.colors.white,
      });
    });

    it('Should correctly return color palette of brown color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('brown'));

      expect(result.current).toEqual({
        primary: theme.colors.brown_100,
        secondary: theme.colors.brown_200,
        support: theme.colors.brown_300,
        text: theme.colors.white,
      });
    });

    it('Should correctly return color palette of gray color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('gray'));

      expect(result.current).toEqual({
        primary: theme.colors.gray_100,
        secondary: theme.colors.gray_200,
        support: theme.colors.gray_300,
        text: theme.colors.white,
      });
    });

    it('Should correctly return color palette of green color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('green'));

      expect(result.current).toEqual({
        primary: theme.colors.green_100,
        secondary: theme.colors.green_200,
        support: theme.colors.green_300,
        text: theme.colors.white,
      });
    });

    it('Should correctly return color palette of pink color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('pink'));

      expect(result.current).toEqual({
        primary: theme.colors.pink_100,
        secondary: theme.colors.pink_200,
        support: theme.colors.pink_300,
        text: theme.colors.white,
      });
    });

    it('Should correctly return color palette of purple color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('purple'));

      expect(result.current).toEqual({
        primary: theme.colors.purple_100,
        secondary: theme.colors.purple_200,
        support: theme.colors.purple_300,
        text: theme.colors.white,
      });
    });

    it('Should correctly return color palette of red color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('red'));

      expect(result.current).toEqual({
        primary: theme.colors.red_100,
        secondary: theme.colors.red_200,
        support: theme.colors.red_300,
        text: theme.colors.white,
      });
    });

    it('Should correctly return color palette of white color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('white'));

      expect(result.current).toEqual({
        primary: theme.colors.white_100,
        secondary: theme.colors.white_200,
        support: theme.colors.white_300,
        text: theme.colors.text,
      });
    });

    it('Should correctly return color palette of yellow color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('yellow'));

      expect(result.current).toEqual({
        primary: theme.colors.yellow_100,
        secondary: theme.colors.yellow_200,
        support: theme.colors.yellow_300,
        text: theme.colors.text,
      });
    });

    it('Should correctly return color palette of default color', () => {
      const { result } = renderHook(() => usePokemonColorPalette('default'));

      expect(result.current).toEqual({
        primary: theme.colors.white_100,
        secondary: theme.colors.white_200,
        support: theme.colors.white_300,
        text: theme.colors.text,
      });
    });
  });
});
