import styled from 'styled-components';
import { Label as L } from '../../shared/Select/styled';
import { BodyOne } from '../../../theme/typography';

export const Item = styled.div`
  display: grid;
  grid-template-columns: minmax(6.4rem, 10rem) minmax(10rem, 14rem) 1fr min-content;
  gap: 2.4rem 1.6rem;

  & > :first-child {
    grid-column: 1 / -1;
  }

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    grid-template-columns: 1fr 4.8rem 10rem 7rem min-content;

    & > :first-child {
      grid-column: 1 / 2;
    }
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

  &:hover svg path {
    fill: ${({ theme }) => theme.constants.colors.burntSienna};
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(L)``;

export const Total = styled.div`
  ${BodyOne};
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  font-family: inherit;
  font-weight: 700;
  padding: 1.6rem 0;
`;
