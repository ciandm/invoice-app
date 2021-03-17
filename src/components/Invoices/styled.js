import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  margin: 0 auto;
  width: 100%;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    max-width: 67.2rem;
  }
`;
