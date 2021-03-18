import styled from 'styled-components';

export const Invoices = styled.main`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  margin: 0 auto;
  width: 100%;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    max-width: 67.2rem;
  }

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    grid-column: 3 / 11;
    max-width: unset;
  }
`;
