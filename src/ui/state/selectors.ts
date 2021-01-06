import { State } from './state';

export const filtersSelector = (state: State) => ({
  colorFilters: state.colorFilters,
  shapeFilters: state.shapeFilters
});

export const shapesSelector = (state: State) => {
  const { colorFilters, shapeFilters } = state;

  const shapes = state.shapes.filter(
    (shape) =>
      colorFilters.includes(shape.color) && shapeFilters.includes(shape.shape)
  );

  return shapes;
};

export const loadingSelector = (state: State) => ({
  isFetching: state.isFetching,
  isFetchingError: state.isFetchingError,
  isFetchingDone: state.isFetchingDone
});
