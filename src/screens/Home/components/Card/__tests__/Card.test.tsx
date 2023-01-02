import Card from '../';
import { PokemonColorPalette } from 'src/models/PokemonColorPalette';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import themeDefault from 'src/styles/themes/default';

jest.mock('react-native-responsive-fontsize', () => ({
  RFValue: jest.fn(value => value),
}));

describe('Card', () => {
  const palette: PokemonColorPalette = {
    primary: '#f00',
    support: '#0f0',
    secondary: '#00f',
    text: '#000',
  };

  const setup = (propOverrides: any) => {
    const defaultProps = {
      ...propOverrides,
    };

    const onPress = jest.fn();

    return render(
      <ThemeProvider theme={themeDefault}>
        <Card
          name="charmander"
          id={4}
          types={['fire', 'flying']}
          palette={palette}
          onPress={onPress}
          {...defaultProps}
        />
      </ThemeProvider>,
    );
  };
  it('should render correctly', () => {
    const { getByText, getByLabelText, getAllByLabelText, getAllByTestId } =
      setup({});

    expect(getByText('Charmander')).toBeTruthy();
    expect(getAllByLabelText('chip')).toHaveLength(2);
    expect(getAllByTestId('chip-text')[0].props.children).toBe('Fire');
    expect(getAllByTestId('chip-text')[1].props.children).toBe('Flying');
    expect(getByLabelText('poke-ball')).toBeTruthy();
    expect(getByLabelText('pokemon-image')).toBeTruthy();
  });

  it('should correctly use the URI', () => {
    const id = 5;
    const { getByLabelText } = setup({ id });

    expect(getByLabelText('pokemon-image').props.source.uri).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    );
  });

  it('should call the onPress function when touched', () => {
    const onPress = jest.fn();
    const { getByTestId } = setup({ onPress });

    fireEvent.press(getByTestId('card'));
    expect(onPress).toHaveBeenCalled();
  });

  it('should correctly render the colors of the palette', () => {
    const { getAllByLabelText, getAllByTestId, getByTestId } = setup({});

    expect(getByTestId('card').props).toMatchObject({
      style: expect.objectContaining({ backgroundColor: palette.primary }),
    });

    expect(getAllByLabelText('chip')[0].props).toMatchObject({
      style: expect.arrayContaining([
        expect.objectContaining({ backgroundColor: palette.support }),
      ]),
    });

    expect(getAllByTestId('chip-text')[0].props).toMatchObject({
      style: expect.arrayContaining([
        expect.objectContaining({ color: palette.text }),
      ]),
    });
  });
});
