import styled from 'styled-components';
import { H4 } from '../../../theme/typography';

export const Button = styled.button`
  ${H4};
  border-radius: 2.4rem;
  color: ${({ theme }) => theme.constants.colors.white};
  font-family: inherit;
  padding: 1.6rem 2.4rem;
`;

export const ButtonOne = styled(Button)`
  align-items: center;
  background-color: ${({ theme }) => theme.constants.colors.cornflowerBlue};
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 3.2rem 1fr;
  grid-template-rows: min-content;
  padding: 0.8rem 1.6rem 0.8rem 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.constants.colors.heliotrope};
  }
`;

export const Icon = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.constants.colors.white};
  border-radius: 2.4rem;
  display: flex;
  justify-content: center;
  height: 3.2rem;
  width: 3.2rem;
`;

export const ButtonTwo = styled(Button)`
  background-color: ${({ theme }) => theme.constants.colors.cornflowerBlue};

  &:hover {
    background-color: ${({ theme }) => theme.constants.colors.helioTrope};
  }
`;

export const ButtonThree = styled(Button)`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.ebonyClay
      : theme.constants.colors.athensGray};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.selago
      : theme.constants.colors.shipCove};

  &:hover {
    background-color: ${({ theme }) =>
      theme.darkMode
        ? theme.constants.colors.white
        : theme.constants.colors.selago};
  }
`;

export const ButtonFour = styled(Button)`
  background-color: ${({ theme }) => theme.constants.colors.ebonyClay};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.selago
      : theme.constants.colors.shipCove};

  &:hover {
    background-color: ${({ theme }) =>
      theme.darkMode
        ? theme.constants.colors.mirage
        : theme.constants.colors.chartreuseYellow};
  }
`;

export const ButtonFive = styled(Button)`
  background-color: ${({ theme }) => theme.constants.colors.burntSienna};

  &:hover {
    background-color: ${({ theme }) => theme.constants.colors.monaLisa};
  }
`;

export const ButtonSix = styled(Button)`
  background-color: ${({ theme }) => theme.constants.colors.athensGray};
  color: ${({ theme }) => theme.constants.colors.shipCove};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.constants.colors.selago};
  }
`;
