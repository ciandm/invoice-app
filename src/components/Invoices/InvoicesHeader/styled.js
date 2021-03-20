import styled, { css, keyframes } from 'styled-components';
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
  margin-bottom: -2.4rem;
  padding: 0 1.8rem 2.4rem;
  position: relative;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding: 0 4rem 2.4rem;
  }
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
  cursor: initial;
  display: flex;
  font-weight: 700;
  position: relative;

  & svg {
    margin-left: 1.6rem;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : null)};
    transition: transform 0.25s ease-in-out;
  }
`;

export const SlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SlideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(2rem);
  }
`;

export const Filters = styled.ul`
  animation-name: ${({ open }) =>
    open
      ? css`
          ${SlideIn}
        `
      : css`
          ${SlideOut}
        `};
  animation-duration: 0.25s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.ebonyClay
      : theme.constants.colors.white};
  border-radius: 0.8rem;
  box-shadow: ${({ theme }) =>
    theme.darkMode
      ? '0px 10px 20px rgba(0, 0, 0, 0.25)'
      : '0px 10px 20px rgba(72, 84, 159, 0.25)'};
  cursor: initial;
  left: calc(0 - 50%);
  list-style: none;
  padding: 2.4rem;
  position: absolute;
  pointer-events: ${({ open }) => (!open ? 'none' : null)};
  top: 100%;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    width: 19.2rem;
  }
`;

export const Filter = styled.li`
  width: 100%;
  & + & {
    margin-top: 1.6rem;
  }
`;
