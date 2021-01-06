import { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { useShallowSelector } from '../hooks/use-shallow-selector';

import { loadingSelector } from '../state/selectors';
import { getShapes } from '../state/state';

import { Header } from './Header';
import { Filters } from './Filters';
import { ShapesList } from './ShapesList';
import { Container } from './Container';

export const Shapes = () => {
  const dispatch = useDispatch();

  const { isFetching, isFetchingError, isFetchingDone } = useShallowSelector(
    loadingSelector
  );

  if (!isFetchingDone) {
    dispatch(getShapes());
  }

  return (
    <Fragment>
      <Header />
      <Container>
        {isFetchingError && (
          <p>An error occurred while downloading the data.</p>
        )}

        {isFetching && <p>Loading...</p>}

        {isFetchingDone && (
          <Fragment>
            <Filters />
            <ShapesList />
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};
