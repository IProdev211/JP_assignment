import styled from 'styled-components';

import { Container } from './Container';

const StyledHeader = styled.header`
  text-align: center;
  height: 8rem;
  margin-bottom: 4.5rem;
  background: #333;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  line-height: 8rem;
  font-size: 3.1rem;
  font-weight: bold;
  color: #fff;
`;

export const Header = () => (
  <StyledHeader>
    <Container>
      <Title>Shapes</Title>
    </Container>
  </StyledHeader>
);
