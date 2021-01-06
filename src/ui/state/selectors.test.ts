import { filtersSelector, shapesSelector, loadingSelector } from './selectors';

describe('selectors', () => {
  describe('filtersSelector', () => {
    it('should return object colorFilters and shapeFilters arrays', () => {
      const state = { colorFilters: [], shapeFilters: [] };
      // eslint-disable-next-line
      // @ts-ignore
      expect(filtersSelector(state)).toStrictEqual({
        colorFilters: [],
        shapeFilters: []
      });
    });
  });

  describe('shapesSelector', () => {
    it('should return shapes with selected colors and shapes', () => {
      const state = {
        colorFilters: ['red'],
        shapeFilters: ['square'],
        shapes: [
          { id: 1, color: 'purple', shape: 'round' },
          { id: 2, color: 'red', shape: 'square' }
        ]
      };
      // eslint-disable-next-line
      // @ts-ignore
      expect(shapesSelector(state)).toStrictEqual([
        { id: 2, color: 'red', shape: 'square' }
      ]);
    });
  });

  describe('loadingSelector', () => {
    it('should return object with isFetching, isFetchingError, isFetchingDone properties', () => {
      const state = {
        isFetching: false,
        isFetchingError: false,
        isFetchingDone: false
      };
      // eslint-disable-next-line
      // @ts-ignore
      expect(loadingSelector(state)).toStrictEqual({
        isFetching: false,
        isFetchingError: false,
        isFetchingDone: false
      });
    });
  });
});
