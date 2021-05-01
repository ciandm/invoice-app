import styled, { keyframes, css } from 'styled-components';
import { H1, H4 } from '../../theme/typography';

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
  pointer-events: ${({ formStatus }) => (formStatus ? 'auto' : 'none')};
  width: 100%;
  z-index: 1;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    left: 10.4rem;
    top: 0;
    width: calc(100% - 10.4rem);
  }
`;

export const FormContainer = styled.div`
  animation-fill-mode: both;
  animation-duration: 0.25s;
  animation-timing-function: ease-in-out;
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.mirage
      : theme.constants.colors.white};
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem;
  padding-bottom: 18rem;
  position: relative;
  transition: transform 0.25s ease-in-out;
  transform: ${({ formStatus }) =>
    formStatus ? 'translateX(0)' : 'translateX(-100%)'};

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    border-radius: 0 2rem 2rem 0;
    height: 100vh;
    padding: 5.6rem 3.2rem 8.7rem 5.6rem;
    width: 61.6rem;
  }

  &::before {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    content: '';
    display: block;
    height: 6.4rem;
    left: 0;
    position: absolute;
    pointer-events: none;
    top: calc(100% - (6.4rem + 8.7rem));
    width: 100%;
    z-index: 10;

    @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
      height: 20rem;
      top: calc(100% - 25.6rem);
    }
  }
`;

export const Form = styled.form`
  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    border-radius: 0 2rem 2rem 0;
    height: 100vh;
    overflow-y: auto;
    padding-right: 1.6rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: none;
    margin-bottom: 5.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.darkMode
        ? theme.constants.colors.ebonyClay
        : theme.constants.colors.selago};
    border-radius: 2px;
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: block;
  height: 100%;
  left: 0;
  opacity: ${({ formStatus }) => (formStatus ? 1 : 0)};
  position: absolute;
  pointer-events: ${({ formStatus }) => (formStatus ? 'auto' : 'none')};
  top: 0;
  transition: opacity 0.25s ease-in-out;
  width: 100vw;
  z-index: -100;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    width: 100%;
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

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    margin-bottom: 4.8rem;
  }
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

export const InvoiceInfoGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  margin-bottom: 6.4rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);

    & > div:last-child {
      grid-column: 1 / -1;
    }
  }
`;

export const Buttons = styled.div`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  bottom: 0;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 2rem 2.4rem;
  position: absolute;
  width: 100%;
  z-index: 500;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    border-radius: 0 2rem 2rem 0;
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: max-content max-content;
`;
