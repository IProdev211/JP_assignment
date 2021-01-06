import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReducer, configureStore } from '@reduxjs/toolkit';

import { ShapesListTitle } from './ShapesListTitle';

jest.mock('../../domain/shapes/shape', () => ({
  ShapeColors: { red: 'red', purple: 'purple', blue: 'blue' },
  ShapeShapes: { round: 'round', square: 'square', triangle: 'triangle' }
}));

describe('ShapesListTitle', () => {
  it('should match snapshot', () => {
    const store = configureStore({
      reducer: createReducer(
        {
          colorFilters: ['red', 'purple', 'blue'],
          shapeFilters: ['round', 'square', 'triangle']
        },
        jest.fn()
      )
    });

    const { container } = render(
      <Provider store={store}>
        <ShapesListTitle />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show title if there is one color and one shape', () => {
    const store = configureStore({
      reducer: createReducer(
        {
          colorFilters: ['red'],
          shapeFilters: ['round']
        },
        jest.fn()
      )
    });

    const { getByText } = render(
      <Provider store={store}>
        <ShapesListTitle />
      </Provider>
    );

    expect(getByText('round red items:')).toBeVisible();
  });

  it('should show title if there are all colors and shapes', () => {
    const store = configureStore({
      reducer: createReducer(
        {
          colorFilters: ['red', 'purple', 'blue'],
          shapeFilters: ['round', 'square', 'triangle']
        },
        jest.fn()
      )
    });

    const { getByText } = render(
      <Provider store={store}>
        <ShapesListTitle />
      </Provider>
    );

    expect(getByText('All items:')).toBeVisible();
  });

  it('should show title if there are all colors and more than one shape', () => {
    const store = configureStore({
      reducer: createReducer(
        {
          colorFilters: ['red', 'purple', 'blue'],
          shapeFilters: ['round', 'square']
        },
        jest.fn()
      )
    });

    const { getByText } = render(
      <Provider store={store}>
        <ShapesListTitle />
      </Provider>
    );

    expect(getByText('Multiple items:')).toBeVisible();
  });

  it('should show title if there are all shapes and more than one color', () => {
    const store = configureStore({
      reducer: createReducer(
        {
          colorFilters: ['red', 'purple'],
          shapeFilters: ['round', 'square', 'triangle']
        },
        jest.fn()
      )
    });

    const { getByText } = render(
      <Provider store={store}>
        <ShapesListTitle />
      </Provider>
    );

    expect(getByText('Multiple items:')).toBeVisible();
  });

  it('should show title if there are all shapes and one color', () => {
    const store = configureStore({
      reducer: createReducer(
        {
          colorFilters: ['red'],
          shapeFilters: ['round', 'square', 'triangle']
        },
        jest.fn()
      )
    });

    const { getByText } = render(
      <Provider store={store}>
        <ShapesListTitle />
      </Provider>
    );

    expect(getByText('All red items:')).toBeVisible();
  });

  it('should show title if there are all colors and one shape', () => {
    const store = configureStore({
      reducer: createReducer(
        {
          colorFilters: ['red', 'purple', 'blue'],
          shapeFilters: ['round']
        },
        jest.fn()
      )
    });

    const { getByText } = render(
      <Provider store={store}>
        <ShapesListTitle />
      </Provider>
    );

    expect(getByText('All round items:')).toBeVisible();
  });

  it('should show title if there is more than one shape and one color', () => {
    const store = configureStore({
      reducer: createReducer(
        {
          colorFilters: ['red'],
          shapeFilters: ['round', 'square']
        },
        jest.fn()
      )
    });

    const { getByText } = render(
      <Provider store={store}>
        <ShapesListTitle />
      </Provider>
    );

    expect(getByText('Multiple red items:')).toBeVisible();
  });

  it('should show title if there is more than one color and one shape', () => {
    const store = configureStore({
      reducer: createReducer(
        {
          colorFilters: ['red', 'blue'],
          shapeFilters: ['round']
        },
        jest.fn()
      )
    });

    const { getByText } = render(
      <Provider store={store}>
        <ShapesListTitle />
      </Provider>
    );

    expect(getByText('Multiple round items:')).toBeVisible();
  });
});
