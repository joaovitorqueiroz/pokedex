import { capitalize } from '../';

describe('Capitalize', () => {
  describe('When receive a string with all lowercase characters', () => {
    it('returns a string with the first character uppercase', () => {
      expect(capitalize('some string')).toEqual('Some string');
    });
  });

  describe('When NOT receive value', () => {
    it('return an empty string ', () => {
      expect(capitalize(undefined)).toEqual('');
    });
  });
});
