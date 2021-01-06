import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../state/state';

import { Filters } from './Filters';

describe('Filters', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should toggle color selection', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const redFilter = getByTestId('ColorFilter-red');
    fireEvent.click(redFilter);

    setTimeout(() => {
      expect(redFilter).toHaveStyle('border: solid 0.2rem red');
    });
  });

  it('should toggle shape selection', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const squareFilter = getByTestId('ShapeFilter-square');
    fireEvent.click(squareFilter);

    setTimeout(() => {
      expect(squareFilter).toHaveStyle('color: #828282');
    });
  });
});
