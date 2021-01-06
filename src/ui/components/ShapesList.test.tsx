import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReducer, configureStore } from '@reduxjs/toolkit';

import { ShapesList } from './ShapesList';

describe('ShapesList', () => {
  let store: any;

  describe('with shapes', () => {
    beforeEach(() => {
      store = configureStore({
        reducer: createReducer(
          {
            shapes: [{ id: 1, color: 'purple', shape: 'square' }],
            colorFilters: ['purple'],
            shapeFilters: ['square']
          },
          jest.fn()
        )
      });
    });

    it('should show shapes list', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <ShapesList />
        </Provider>
      );

      expect(getByTestId('ShapesList')).toBeVisible();
    });
  });

  describe('without shapes', () => {
    beforeEach(() => {
      store = configureStore({
        reducer: createReducer({ shapes: [] }, jest.fn())
      });
    });

    it('should match snapshot', () => {
      const { container } = render(
        <Provider store={store}>
          <ShapesList />
        </Provider>
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should show error message', () => {
      const { getByText } = render(
        <Provider store={store}>
          <ShapesList />
        </Provider>
      );

      expect(
        getByText('No shapes matching criteria were found.')
      ).toBeVisible();
    });
  });
});
