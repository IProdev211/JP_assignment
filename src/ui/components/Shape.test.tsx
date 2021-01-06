import { render } from '@testing-library/react';

import { ShapeColors, ShapeShapes } from '../../domain/shapes/shape';

import { Shape } from './Shape';

describe('Shape', () => {
  it('should match snapshot', () => {
    const shapes = Object.keys(ShapeShapes);
    const colors = Object.keys(ShapeColors);

    shapes.forEach((shape) => {
      colors.forEach((color) => {
        const shapeData = { id: 1, color, shape };
        // eslint-disable-next-line
        // @ts-ignore
        const { container } = render(<Shape shape={shapeData} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});
