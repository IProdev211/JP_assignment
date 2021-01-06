export enum ShapeColors {
  purple = 'purple',
  red = 'red',
  green = 'green',
  blue = 'blue',
  yellow = 'yellow',
  grey = 'grey'
}

export enum ShapeShapes {
  round = 'round',
  square = 'square',
  triangle = 'triangle',
  oval = 'oval',
  rectangle = 'rectangle'
}

export interface Shape {
  id: number;
  color: ShapeColors;
  shape: ShapeShapes;
}

interface ShapeFactoryInput {
  id: number;
  color: ShapeColors;
  shape: ShapeShapes;
}

export const shapeFactory = ({ id, color, shape }: ShapeFactoryInput) => {
  if (!id) {
    throw new Error('Shape id is invalid');
  }

  const colors = Object.keys(ShapeColors);

  if (!color || !colors.includes(color)) {
    throw new Error('Shape color is invalid');
  }

  const shapes = Object.keys(ShapeShapes);

  if (!shape || !shapes.includes(shape)) {
    throw new Error('Shape shape is invalid');
  }

  const createdShape: Shape = { id, color, shape };

  return createdShape;
};
