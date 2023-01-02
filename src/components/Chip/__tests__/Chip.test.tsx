import Chip from '../';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import themeDefault from 'src/styles/themes/default';

jest.mock('react-native-responsive-fontsize', () => ({
  RFValue: jest.fn(value => value),
}));

describe('Chip', () => {
  const setup = (propOverrides: any) => {
    const defaultProps = {
      ...propOverrides,
    };

    return render(
      <ThemeProvider theme={themeDefault}>
        <Chip {...defaultProps} />
      </ThemeProvider>,
    );
  };
  it('should render correctly', () => {
    const { getByText, getByTestId, getByLabelText } = setup({
      text: 'some text',
      color: '#0F0',
      textColor: '#000',
    });

    expect(getByText('Some text')).toBeTruthy();
    expect(getByTestId('chip-text').props).toMatchObject({
      style: expect.arrayContaining([
        expect.objectContaining({ color: '#000' }),
      ]),
    });
    expect(getByLabelText('chip').props).toMatchObject({
      style: expect.arrayContaining([
        expect.objectContaining({ backgroundColor: '#0F0' }),
      ]),
    });
    expect(getByTestId('chip-text').props).toMatchObject({
      style: expect.arrayContaining([
        expect.objectContaining({ color: '#000' }),
      ]),
    });
  });
});
