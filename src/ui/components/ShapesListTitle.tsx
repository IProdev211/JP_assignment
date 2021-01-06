import styled from 'styled-components';

import { ShapeColors, ShapeShapes } from '../../domain/shapes/shape';

import { useShallowSelector } from '../hooks/use-shallow-selector';

import { filtersSelector } from '../state/selectors';

const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  font-size: 3.5rem;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    text-align: left;
    margin-bottom: 8rem;
  }
`;

export const ShapesListTitle = () => {
  const { colorFilters, shapeFilters } = useShallowSelector(filtersSelector);

  const allColorsCount = Object.keys(ShapeColors).length;
  const selectedColorsCount = colorFilters.length;

  const allShapesCount = Object.keys(ShapeShapes).length;
  const selectedShapesCount = shapeFilters.length;

  const color = colorFilters[0];
  const shape = shapeFilters[0];

  let title = `${shape} ${color} items:`;

  if (
    selectedColorsCount === allColorsCount &&
    selectedShapesCount === allShapesCount
  ) {
    title = 'All items:';
  }

  if (
    selectedColorsCount === allColorsCount &&
    selectedShapesCount < allShapesCount &&
    selectedShapesCount > 1
  ) {
    title = 'Multiple items:';
  }

  if (
    selectedShapesCount === allShapesCount &&
    selectedColorsCount < allColorsCount &&
    selectedColorsCount > 1
  ) {
    title = 'Multiple items:';
  }

  if (selectedShapesCount === allShapesCount && selectedColorsCount === 1) {
    const color = colorFilters[0];
    title = `All ${color} items:`;
  }

  if (selectedColorsCount === allColorsCount && selectedShapesCount === 1) {
    const shape = shapeFilters[0];
    title = `All ${shape} items:`;
  }

  if (
    selectedShapesCount < allShapesCount &&
    selectedShapesCount > 1 &&
    selectedColorsCount === 1
  ) {
    const color = colorFilters[0];
    title = `Multiple ${color} items:`;
  }

  if (
    selectedColorsCount < allColorsCount &&
    selectedColorsCount > 1 &&
    selectedShapesCount === 1
  ) {
    const shape = shapeFilters[0];
    title = `Multiple ${shape} items:`;
  }

  return <Title>{title}</Title>;
};
