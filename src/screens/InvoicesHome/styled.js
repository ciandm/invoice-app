import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    flex-direction: row;
  }
`;
