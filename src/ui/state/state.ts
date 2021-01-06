import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

import { Shape, ShapeColors, ShapeShapes } from '../../domain/shapes/shape';
import { getShapes as fetchShapes } from '../../domain/shapes/use-cases/get-shapes';

export const getShapes = () => async (dispatch: any) => {
  try {
    dispatch(getShapesInit());
    const shapes = await fetchShapes();
    dispatch(getShapesSuccess(shapes));
  } catch {
    dispatch(getShapesFail());
  }
};

export const getShapesInit = createAction('GET_SHAPES_INIT');

export const getShapesSuccess = createAction<Shape[]>('GET_SHAPES_SUCCESS');

export const getShapesFail = createAction('GET_SHAPES_FAIL');

export const toggleColorFilter = createAction<ShapeColors>(
  'TOGGLE_COLOR_FILTER'
);

export const toggleShapeFilter = createAction<ShapeShapes>(
  'TOGGLE_SHAPE_FILTER'
);

export interface State {
  isFetching: boolean;
  isFetchingError: boolean;
  isFetchingDone: boolean;
  shapes: Shape[];
  colorFilters: string[];
  shapeFilters: string[];
}

const initialState: State = {
  isFetching: false,
  isFetchingError: false,
  isFetchingDone: false,
  colorFilters: Object.keys(ShapeColors),
  shapeFilters: Object.keys(ShapeShapes),
  shapes: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getShapesInit, (state) => ({
      ...state,
      isFetching: true,
      isFetchingError: false,
      isFetchingDone: false
    }))

    .addCase(getShapesFail, (state) => ({
      ...state,
      isFetching: false,
      isFetchingError: true,
      isFetchingDone: true
    }))

    .addCase(getShapesSuccess, (state, { payload: shapes }) => ({
      ...state,
      isFetching: false,
      isFetchingError: false,
      isFetchingDone: true,
      shapes
    }))

    .addCase(toggleColorFilter, (state, { payload: filter }) => {
      let colorFilters = [...state.colorFilters];

      const isFilterEnabled = colorFilters.includes(filter);

      if (isFilterEnabled) {
        colorFilters = colorFilters.filter((f) => f !== filter);
      } else {
        colorFilters.push(filter);
      }

      if (!colorFilters.length) {
        colorFilters = Object.keys(ShapeColors);
      }

      const newState = { ...state, colorFilters };
      return newState;
    })

    .addCase(toggleShapeFilter, (state, { payload: filter }) => {
      let shapeFilters = [...state.shapeFilters];

      const isFilterEnabled = shapeFilters.includes(filter);

      if (isFilterEnabled) {
        shapeFilters = shapeFilters.filter((f) => f !== filter);
      } else {
        shapeFilters.push(filter);
      }

      if (!shapeFilters.length) {
        shapeFilters = Object.keys(ShapeShapes);
      }

      const newState = { ...state, shapeFilters };
      return newState;
    });
});

export const store = configureStore({ reducer });
