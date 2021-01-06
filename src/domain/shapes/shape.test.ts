import { shapeFactory } from './shape';

describe('shape', () => {
  it('should export shapeFactory function', () => {
    expect(typeof shapeFactory).toBe('function');
  });

  describe('shapeFactory', () => {
    it('should return shape', () => {
      // eslint-disable-next-line
      // @ts-ignore
      const shape = shapeFactory({ id: 1, color: 'red', shape: 'square' });

      expect(shape).toStrictEqual({ id: 1, color: 'red', shape: 'square' });
    });

    it('should throw an error if id is invalid', () => {
      const input = { color: 'red', shape: 'square' };

      // eslint-disable-next-line
      // @ts-ignore
      expect(() => shapeFactory(input)).toThrow('Shape id is invalid');
    });

    it('should throw an error if color is missing or is invalid', () => {
      const invalidColor = { id: 1, color: 'invalid-color', shape: 'square' };
      const missingColor = { id: 1, shape: 'square' };

      // eslint-disable-next-line
      // @ts-ignore
      expect(() => shapeFactory(invalidColor)).toThrow(
        'Shape color is invalid'
      );

      // eslint-disable-next-line
      // @ts-ignore
      expect(() => shapeFactory(missingColor)).toThrow(
        'Shape color is invalid'
      );
    });

    it('should throw an error if shape is missing or is invalid', () => {
      const invalidShape = { id: 1, shape: 'invalid-shape', color: 'red' };
      const missingShape = { id: 1, color: 'red' };

      // eslint-disable-next-line
      // @ts-ignore
      expect(() => shapeFactory(invalidShape)).toThrow(
        'Shape shape is invalid'
      );

      // eslint-disable-next-line
      // @ts-ignore
      expect(() => shapeFactory(missingShape)).toThrow(
        'Shape shape is invalid'
      );
    });
  });
});
