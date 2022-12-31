import { useTheme } from 'styled-components';

type ColorOptions =
  | 'black'
  | 'blue'
  | 'brown'
  | 'gray'
  | 'green'
  | 'pink'
  | 'purple'
  | 'red'
  | 'white'
  | 'yellow'
  | 'default';

/*
  This hook returns a color palette based on the pokemon's predominant color.
*/
export default function usePokemonColorPalette(color: ColorOptions) {
  const theme = useTheme();

  const palette = {
    black: {
      primary: theme?.colors?.black_100,
      secondary: theme?.colors?.black_200,
      support: theme?.colors?.black_300,
      text: theme?.colors?.white,
    },
    blue: {
      primary: theme?.colors?.blue_100,
      secondary: theme?.colors?.blue_200,
      support: theme?.colors?.blue_300,
      text: theme?.colors?.white,
    },
    brown: {
      primary: theme?.colors?.brown_100,
      secondary: theme?.colors?.brown_200,
      support: theme?.colors?.brown_300,
      text: theme?.colors?.white,
    },
    gray: {
      primary: theme?.colors?.gray_100,
      secondary: theme?.colors?.gray_200,
      support: theme?.colors?.gray_300,
      text: theme?.colors?.white,
    },
    green: {
      primary: theme?.colors?.green_100,
      secondary: theme?.colors?.green_200,
      support: theme?.colors?.green_300,
      text: theme?.colors?.white,
    },
    pink: {
      primary: theme?.colors?.pink_100,
      secondary: theme?.colors?.pink_200,
      support: theme?.colors?.pink_300,
      text: theme?.colors?.white,
    },
    purple: {
      primary: theme?.colors?.purple_100,
      secondary: theme?.colors?.purple_200,
      support: theme?.colors?.purple_300,
      text: theme?.colors?.white,
    },
    red: {
      primary: theme?.colors?.red_100,
      secondary: theme?.colors?.red_200,
      support: theme?.colors?.red_300,
      text: theme?.colors?.white,
    },
    white: {
      primary: theme?.colors?.white_100,
      secondary: theme?.colors?.white_200,
      support: theme?.colors?.white_300,
      text: theme?.colors?.text,
    },
    yellow: {
      primary: theme?.colors?.yellow_100,
      secondary: theme?.colors?.yellow_200,
      support: theme?.colors?.yellow_300,
      text: theme?.colors?.text,
    },
    default: {
      primary: theme?.colors?.white_100,
      secondary: theme?.colors?.white_200,
      support: theme?.colors?.white_300,
      text: theme?.colors?.text,
    },
  };

  return palette.hasOwnProperty(color) ? palette[color] : palette.default;
}
