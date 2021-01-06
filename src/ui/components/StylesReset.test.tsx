import { render } from '@testing-library/react';
import { StylesReset } from './StylesReset';

describe('StylesReset', () => {
  it('should match snapshot', () => {
    const { container } = render(<StylesReset />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
