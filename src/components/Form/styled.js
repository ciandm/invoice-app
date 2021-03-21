import styled, { keyframes, css } from 'styled-components';
import { H1, H4, BodyOne } from '../../theme/typography';

const slideFormIn = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
`;

const slideFormOut = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
`;

const fadeOverlayIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const fadeOverlayOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: absolute;
  top: 7.4rem;
  pointer-events: ${({ shown }) => (shown ? 'auto' : 'none')};
  width: 100%;
  z-index: 1;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    left: 10.4rem;
    top: 0;
    width: calc(100% - 10.4rem);
  }
`;

export const Form = styled.form`
  animation-name: ${({ shown }) =>
    shown
      ? css`
          ${slideFormIn}
        `
      : css`
          ${slideFormOut}
        `};
  animation-fill-mode: both;
  animation-duration: 0.25s;
  animation-timing-function: ease-in-out;
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.mirage
      : theme.constants.colors.white};
  padding: 3.2rem 2.4rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    border-radius: 0 2rem 2rem 0;
    padding: 5.6rem;
    width: 61.6rem;
  }
`;

export const Overlay = styled.div`
  animation-name: ${({ shown }) =>
    shown
      ? css`
          ${fadeOverlayIn}
        `
      : css`
          ${fadeOverlayOut}
        `};
  animation-duration: 0.25s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -100;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    width: calc(100vw - 10.4rem);
  }
`;

export const Return = styled.button`
  ${BodyOne};
  align-self: flex-start;
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.mirage};
  display: flex;
  font-weight: 700;
  margin-bottom: 2.4rem;

  & svg {
    margin-right: 2.4rem;
  }
`;

export const Title = styled.h1`
  ${H1};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.mirage};
  margin-bottom: 2.4rem;
`;

export const FormGroupTitle = styled.h3`
  ${H4};
  color: ${({ theme }) => theme.constants.colors.cornflowerBlue};
`;

export const FormGroup = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  margin-bottom: 4rem;
`;

export const InputGroup = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr 1fr;

  & > div:last-child {
    grid-column: 1 / -1;

    @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
      grid-column: span 1;
    }
  }

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
