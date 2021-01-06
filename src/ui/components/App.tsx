import { Fragment, StrictMode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../state/state';

import { StylesReset } from './StylesReset';
import { Shapes } from './Shapes';

export const App = () => {
  return (
    <Fragment>
      <StrictMode>
        <Provider store={store}>
          <StylesReset />
          <Shapes />
        </Provider>
      </StrictMode>
    </Fragment>
  );
};

export default App;
