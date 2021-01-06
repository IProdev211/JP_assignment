import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useShallowSelector } from '../hooks/use-shallow-selector';

import { toggleColorFilter, toggleShapeFilter } from '../state/state';
import { filtersSelector } from '../state/selectors';

import { ShapeColors, ShapeShapes } from '../../domain/shapes/shape';

const FiltersContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8rem;
  }
`;

const FilltersList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.2rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

const Filter = styled.li<{ isSelected: boolean }>`
  cursor: pointer;
  margin-bottom: 1.8rem;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const ShapeFilter = styled(Filter)`
  margin-right: 2.1rem;
  font-size: 2.1rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  ${({ isSelected }) => !isSelected && 'color: #828282'};

  &:last-child {
    margin-right: 0;
  }
`;

const ColorFilter = styled(Filter)<{ color: ShapeColors }>`
  width: 3.2rem;
  height: 3.2rem;
  border: solid 0.2rem #000;
  margin-left: 1.4rem;
  margin-right: 1.4rem;
  background: ${({ color }) => color};
  overflow: hidden;
  text-indent: 100%;
  ${({ color, isSelected }) => !isSelected && `border-color: ${color}`};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Filters = () => {
  const dispatch = useDispatch();
  const { colorFilters, shapeFilters } = useShallowSelector(filtersSelector);

  const colors = Object.values(ShapeColors);
  const shapes = Object.values(ShapeShapes);

  const isSelected = (filter: string) =>
    colorFilters.includes(filter) || shapeFilters.includes(filter);

  const handleShapeFilterClick = (filter: ShapeShapes) => (
    event: MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();
    dispatch(toggleShapeFilter(filter));
  };

  const handleColorFilterClick = (filter: ShapeColors) => (
    event: MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();
    dispatch(toggleColorFilter(filter));
  };

  return (
    <FiltersContainer>
      <FilltersList>
        {shapes.map((shape) => (
          <ShapeFilter
            key={shape}
            isSelected={isSelected(shape)}
            title={shape}
            onClick={handleShapeFilterClick(shape)}
            data-testid={`ShapeFilter-${shape}`}
          >
            {shape}
          </ShapeFilter>
        ))}
      </FilltersList>

      <FilltersList>
        {colors.map((color) => (
          <ColorFilter
            key={color}
            color={color}
            isSelected={isSelected(color)}
            title={color}
            onClick={handleColorFilterClick(color)}
            data-testid={`ColorFilter-${color}`}
          >
            {color}
          </ColorFilter>
        ))}
      </FilltersList>
    </FiltersContainer>
  );
};
