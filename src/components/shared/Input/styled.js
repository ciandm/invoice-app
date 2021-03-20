import styled from 'styled-components';
import { BodyOne } from '../../../theme/typography';

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${BodyOne};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.baliHai
      : theme.constants.colors.shipCove};
  padding-bottom: 1rem;
`;

export const Input = styled.input`
  ${BodyOne};
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  border: 1px solid
    ${({ theme }) =>
      theme.darkMode
        ? theme.constants.colors.ebonyClay
        : theme.constants.colors.selago};
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  font-family: inherit;
  font-weight: 700;
  padding: 1.6rem 2rem;
`;
