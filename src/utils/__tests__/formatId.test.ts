import { formatId } from '../';

describe('FormatId', () => {
  describe('When receive an id number and a size', () => {
    it('Returns a string of the specified length starting with "#" and the id number followed by leading zeros when necessary', () => {
      expect(formatId(1, 3)).toEqual('#001');
      expect(formatId(1, 4)).toEqual('#0001');
      expect(formatId(10, 3)).toEqual('#010');
      expect(formatId(123, 3)).toEqual('#123');
    });
  });

  describe('When receive an id number and NOT receive a size', () => {
    it('Returns a string of length 3 starting with "#" and the id number followed by leading zeros when necessary', () => {
      expect(formatId(2)).toEqual('#002');
      expect(formatId(20)).toEqual('#020');
    });
  });

  describe('When receiving an id number and larger than the size', () => {
    it('Returns a string starting with "#" and the id number.', () => {
      expect(formatId(12345, 2)).toEqual('#12345');
    });
  });
});
