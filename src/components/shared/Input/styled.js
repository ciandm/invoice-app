import styled from 'styled-components';
import { BodyOne } from '../../../theme/typography';

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  &:hover > input {
    border-color: ${({ theme }) => theme.constants.colors.cornflowerBlue};
  }
`;

export const Label = styled.label`
  ${BodyOne};
  color: ${({ theme, error }) =>
    error
      ? theme.constants.colors.burntSienna
      : theme.darkMode
      ? theme.constants.colors.baliHai
      : theme.constants.colors.shipCove};
  padding-bottom: 1rem;
`;

export const Input = styled.input.attrs(({ type }) => ({
  type: type || 'text',
}))`
  ${BodyOne};
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  border: 1px solid
    ${({ theme, error }) =>
      error
        ? theme.constants.colors.burntSienna
        : theme.darkMode
        ? theme.constants.colors.ebonyClay
        : theme.constants.colors.selago};
  border-radius: 4px;
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  font-family: inherit;
  font-weight: 700;
  padding: 1.6rem 2rem;
  width: 100%;

  &[type='date'] {
    padding: 1.4rem 2rem;
    position: relative;
  }

  &[type='date']::before {
    background-image: url('/images/icon-calendar.svg');
    content: '';
    display: block;
    height: 1.6rem;
    position: absolute;
    right: 2rem;
    width: 1.6rem;
  }

  &[data-compressed='true'] {
    padding: 1.6rem 0.8rem;
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    z-index: 1;
  }
`;
