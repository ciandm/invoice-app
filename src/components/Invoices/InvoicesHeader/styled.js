import styled from 'styled-components';
import { H1, H4 } from '../../../theme/typography';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  grid-row: 1 / 2;
  grid-column: 3 / 11;
  padding-bottom: 3.2rem;
  width: 100%;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding-bottom: 5.6rem;
  }

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    grid-row: 1 / 2;
    grid-column: 3 / 11;
    padding-bottom: 6.4rem;
  }
`;

export const Content = styled.div`
  align-items: ${({ direction }) => (direction === 'row' ? 'center' : null)};
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'column' ? 'column' : 'row'};
`;

export const Title = styled.h1`
  ${H1};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  padding-bottom: 0.8rem;
`;

export const Pending = styled.p`
  ${H4};
  font-weight: 500;
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.selago
      : theme.constants.colors.baliHai};
`;
