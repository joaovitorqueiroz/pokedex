import { formattedText } from '../';

describe('formattedText', () => {
  describe('When receive a string with white-spaces characters', () => {
    it('returns a string replacing the white-spaces and break lines with a space', () => {
      expect(
        formattedText(
          '\t\n\r Some  \n \t   \r  string \r for   \n test \t  \r \n',
        ),
      ).toEqual('Some string for test');
    });
  });

  describe('When NOT receive value', () => {
    it('return an empty string ', () => {
      expect(formattedText(undefined)).toEqual('');
    });
  });
});
