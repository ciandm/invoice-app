import styled from 'styled-components';
import { H1, H4, BodyOne } from '../../../theme/typography';

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

export const FilterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
  position: relative;
`;

export const FilterToggle = styled.button`
  ${BodyOne};
  align-items: center;
  background: transparent;
  border: none;
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  display: flex;
  font-weight: 700;
  position: relative;

  & svg {
    margin-left: 1.6rem;
  }
`;

export const Filters = styled.ul`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.ebonyClay
      : theme.constants.colors.white};
  border-radius: 0.8rem;
  box-shadow: ${({ theme }) =>
    theme.darkMode
      ? '0px 10px 20px rgba(0, 0, 0, 0.25)'
      : '0px 10px 20px rgba(72, 84, 159, 0.25)'};
  left: calc(0 - 50%);
  margin-top: 2.4rem;
  padding: 2.4rem;
  position: absolute;
  top: 100%;
  width: 19.2rem;
`;
