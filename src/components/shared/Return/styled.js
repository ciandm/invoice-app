import styled from 'styled-components';
import { BodyOne } from '../../../theme/typography';

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
