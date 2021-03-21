import styled from 'styled-components';
import { BodyOne } from '../../../theme/typography';

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.span`
  ${BodyOne};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.baliHai
      : theme.constants.colors.shipCove};
  padding-bottom: 1rem;
`;

export const Select = styled.div`
  ${BodyOne};
  align-items: center;
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  border: 1px solid
    ${({ theme }) =>
      theme.darkMode
        ? theme.constants.colors.ebonyClay
        : theme.constants.colors.selago};
  border-radius: 4px;
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  padding: 1.6rem 1.6rem 1.6rem 2rem;
  width: 100%;

  ${SelectContainer}:hover & {
    border-color: ${({ theme }) => theme.constants.colors.cornflowerBlue};
  }
`;

export const Options = styled.ul`
  ${BodyOne};
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.ebonyClay
      : theme.constants.colors.white};
  box-shadow: ${({ theme }) =>
    theme.darkMode
      ? '0px 10px 20px rgba(0, 0, 0, 0.25)'
      : '0px 10px 20px rgba(72, 84, 159, 0.25)'};
  border-radius: 0.8rem;
  cursor: pointer;
  display: ${({ open }) => (open ? 'block' : 'none')};
  list-style: none;
  position: absolute;
  top: calc(100% + 0.8rem);
  width: 100%;
`;

export const Option = styled.li`
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  padding: 1.6rem 2.4rem;

  &:hover,
  &:focus {
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.constants.colors.cornflowerBlue};
  }

  & + & {
    border-top: 1px solid
      ${({ theme }) =>
        theme.darkMode
          ? theme.constants.colors.blackPearl
          : theme.constants.colors.selago};
  }
`;
