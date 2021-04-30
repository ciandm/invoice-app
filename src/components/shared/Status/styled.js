import styled from 'styled-components';
import { H4 } from '../../../theme/typography';

export const Status = styled.div`
  ${H4};
  align-items: center;
  background-color: ${({ status, theme }) =>
    status === 'paid'
      ? 'hsla(160, 67%, 52%, 0.06)'
      : status === 'pending'
      ? 'hsla(34, 100%, 50%, 0.06)'
      : theme.darkMode // draft
      ? 'hsla(231, 75%, 93%, 0.06)'
      : 'hsla(231, 20%, 27%, 0.06)'};
  border-radius: 6px;
  color: ${({ status, theme }) =>
    status === 'paid'
      ? 'hsl(160, 67%, 52%)'
      : status === 'pending'
      ? 'hsl(34, 100%, 50%)'
      : theme.darkMode // draft
      ? 'hsl(231, 75%, 93%)'
      : 'hsl(231,20%,27%)'};
  display: flex;
  justify-content: center;
  min-width: 10.4rem;
  padding: 1.2rem 1.8rem;

  &::before {
    content: '';
    background-color: currentColor;
    border-radius: 8px;
    display: inline-block;
    height: 8px;
    margin-right: 8px;
    width: 8px;
  }
`;
