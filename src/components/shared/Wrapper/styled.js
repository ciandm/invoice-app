import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding: 5.6rem 4rem 0;
  }
`;
