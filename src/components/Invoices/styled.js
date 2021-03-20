import styled from 'styled-components';

export const Invoices = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 3.2rem 2.4rem;
  width: 100%;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    max-width: 67.2rem;
    padding: 5.6rem 0;
  }

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    margin: 0 auto;
    max-width: 73rem;
    padding: 7.2rem 0;
  }
`;
