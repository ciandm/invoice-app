import styled from 'styled-components';
import { H1, H4, BodyOne } from '../../theme/typography';

export const Form = styled.form`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.mirage
      : theme.constants.colors.white};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 3.2rem 2.4rem;
  position: absolute;
  top: 7.4rem;
  width: 100%;
`;

export const Return = styled.button`
  ${BodyOne};
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
  }
`;
