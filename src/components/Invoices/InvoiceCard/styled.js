import styled from 'styled-components';
import { H4, H3 } from '../../../theme/typography';

export const Container = styled.div`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  border-radius: 0.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, min-content);
  padding: 2.4rem;
  width: 100%;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    align-items: center;
    display: grid;
    grid-template-columns:
      9rem
      max-content
      1fr
      1fr
      min-content;
    justify-content: space-between;
    padding: 1.6rem 2.4rem;
  }
`;

export const Id = styled.p`
  ${H4};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  text-transform: uppercase;
  padding-bottom: 2.4rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    grid-column: 1 / 2;
    padding-bottom: 0;
  }
`;

export const Hashtag = styled.span`
  color: ${({ theme }) => theme.constants.colors.shipCove};
`;

export const Name = styled.p`
  ${H4};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.baliHai};
  font-weight: 500;
  justify-self: end;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    justify-self: start;
    order: 3;
    text-align: left;
  }
`;

export const Date = styled.p`
  ${H4};
  color: ${({ theme }) => theme.constants.colors.shipCove};
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  font-weight: 500;
  padding-bottom: 0.8rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin: 0 3.2rem 0 0;
    order: 2;
    padding-bottom: 0;
  }
`;

export const Price = styled.h2`
  ${H3};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    grid-column: 4 / 5;
    grid-row: unset;
    margin-left: auto;
    order: 4;
    text-align: right;
  }
`;

export const Group = styled.div`
  align-items: center;
  display: flex;
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  justify-self: end;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
  }
`;

export const Status = styled.div`
  ${H4};
  align-items: center;
  background-color: ${({ status }) =>
    status === 'paid'
      ? 'hsla(160, 67%, 52%, 0.06)'
      : status === 'pending'
      ? 'hsla(34, 100%, 50%, 0.06)'
      : 'hsla(231, 75%, 93%, 0.06)'};
  border-radius: 6px;
  color: ${({ status }) =>
    status === 'paid'
      ? 'hsl(160, 67%, 52%)'
      : status === 'pending'
      ? 'hsl(34, 100%, 50%)'
      : 'hsl(231, 75%, 93%)'};
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

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    margin: 0 2rem 0 4rem;
  }
`;

export const Arrow = styled.div`
  display: none;
  order: 7;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    display: inline-block;
  }
`;
