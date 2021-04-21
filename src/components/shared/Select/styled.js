import styled from 'styled-components';
import ReactSelect from 'react-select';
import { BodyOne } from '../../../theme/typography';

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
  cursor: def ault;
  padding-bottom: 1rem;
`;

export const Select = styled(ReactSelect)`
  & .Select__control {
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
    /* padding: 1.6rem 1.6rem 1.6rem 2rem; */
    width: 100%;

    &:hover {
      border-color: ${({ theme }) => theme.constants.colors.cornflowerBlue};
    }
  }

  & .Select__menu {
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
    color: red;
    cursor: pointer;
    width: 100%;
  }

  & .Select__menu-list {
    color: red;
  }

  & .Select__option {
    color: red;
  }
`;
