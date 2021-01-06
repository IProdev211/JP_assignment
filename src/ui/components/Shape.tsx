import styled from 'styled-components';

import { Shape as ShapeType } from '../../domain/shapes/shape';

interface ShapeProps {
  className?: string;
  shape: ShapeType;
}

const ShapeBase = styled.div<{ color: ShapeType['color'] }>`
  background: ${({ color }) => color};
  overflow: hidden;
`;

const Round = styled(ShapeBase)`
  border-radius: 50%;
`;

const Square = styled(ShapeBase)``;

const Triangle = styled(ShapeBase)`
  background: transparent;

  & > div {
    position: relative;
    top: 25%;
    height: 50%;
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 180%;
      transform: rotate(-45deg);
      position: absolute;
      left: -3%;
      top: 45%;
      background: ${({ color }) => color};
    }
  }
`;

const Oval = styled(ShapeBase)`
  background: transparent;

  & > div {
    width: 100%;
    height: 80%;
    border-radius: 50%;
    position: relative;
    top: 10%;
    background: ${({ color }) => color};
  }
`;

const Rectangle = styled(ShapeBase)`
  background: transparent;

  & > div {
    width: 100%;
    height: 70%;
    position: relative;
    top: 15%;
    background: ${({ color }) => color};
  }
`;

export const Shape = ({ className, shape }: ShapeProps) => {
  const componentsMap = {
    round: Round,
    square: Square,
    triangle: Triangle,
    oval: Oval,
    rectangle: Rectangle
  };

  const ShapeComponent = componentsMap[shape.shape];

  return (
    <ShapeComponent className={className} color={shape.color}>
      <div />
    </ShapeComponent>
  );
};
