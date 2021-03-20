import styled from 'styled-components';
import { BodyOne } from '../../../theme/typography';

export const Wrapper = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;

  &:focus {
    box-shadow: unset;
  }
`;

export const HiddenCheckbox = styled.input.attrs({
  hidden: true,
  type: 'checkbox',
})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  width: 1px;
`;

export const Checkbox = styled.div`
  align-items: center;
  display: flex;
  background-color: ${({ theme, checked }) =>
    checked
      ? theme.constants.colors.cornflowerBlue
      : theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.selago};
  border: 1px solid transparent;
  border-radius: 2px;
  height: 16px;
  justify-content: center;
  transition: all 150ms;
  width: 16px;

  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    border-color: ${({ theme }) => theme.constants.colors.cornflowerBlue};
  }

  & svg {
    z-index: 1;
  }
`;

export const Label = styled.label`
  ${BodyOne};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.blackPearl};
  cursor: inherit;
  font-weight: 700;
  margin-left: 1.2rem;
`;
