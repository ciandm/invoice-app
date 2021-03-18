import styled from 'styled-components';

export const InvoiceList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem;
  width: 100%;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding: 5.6rem 4rem 0;
  }

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: max-content;
    margin: 0 auto;
    max-width: 111rem;
    padding: 7.2rem 0 0;
  }
`;
