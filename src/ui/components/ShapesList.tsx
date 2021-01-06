import { Fragment } from 'react';
import styled from 'styled-components';

import { useShallowSelector } from '../hooks/use-shallow-selector';
import { shapesSelector } from '../state/selectors';

import { ShapesListTitle } from './ShapesListTitle';
import { Shape } from './Shape';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.2rem;
`;

const Item = styled.li`
  width: calc(50% - 2.4rem);
  margin: 0 1.2rem 4rem;
  position: relative;

  @media (min-width: 400px) {
    width: calc((100% / 3) - 2.4rem);
  }

  @media (min-width: 640px) {
    width: calc(25% - 2.4rem);
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  border: solid 0.1rem #f2f2f2;
  border-radius: 0.4rem;
  position: relative;
`;

const ItemShape = styled(Shape)`
  position: absolute;
  top: 18%;
  right: 18%;
  bottom: 18%;
  left: 18%;
`;

const EmptyMessage = styled.p``;

export const ShapesList = () => {
  const shapes = useShallowSelector(shapesSelector);

  if (!shapes.length) {
    return <EmptyMessage>No shapes matching criteria were found.</EmptyMessage>;
  }

  return (
    <Fragment>
      <ShapesListTitle />

      <List data-testid="ShapesList">
        {shapes.map((shape) => (
          <Item key={shape.id}>
            <ItemContainer>
              <ItemShape shape={shape} />
            </ItemContainer>
          </Item>
        ))}
      </List>
    </Fragment>
  );
};
