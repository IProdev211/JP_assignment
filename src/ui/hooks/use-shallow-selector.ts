import { useSelector, shallowEqual } from 'react-redux';

import { State } from '../state/state';

export function useShallowSelector<T>(selector: (state: State) => T) {
  return useSelector(selector, shallowEqual);
}
