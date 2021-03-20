import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    flex-direction: row;
  }
`;
