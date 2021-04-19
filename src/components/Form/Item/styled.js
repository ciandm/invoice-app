import styled from 'styled-components';
import { Label as L } from '../../shared/Select/styled';

export const Item = styled.div`
  display: grid;
  grid-template-columns: minmax(6.4rem, 10rem) minmax(10rem, 14rem) 1fr min-content;
  gap: 2.4rem 1.6rem;

  & > :first-child {
    grid-column: 1 / -1;
  }
`;

export const Remove = styled.button.attrs(({ type }) => ({
  type,
}))`
  align-items: center;
  display: flex;
  margin-top: 2.4rem;
  padding: 1.2rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(L)``;

export const Total = styled.div`
  background: none;
  border: none;
  color: ${({ theme }) => theme.constants.colors.baliHai};
  padding-left: 0;
`;
