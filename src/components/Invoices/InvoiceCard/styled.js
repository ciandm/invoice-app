import styled from 'styled-components';
import { H4 } from '../../../theme/typography';

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
`;

export const InvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.4rem;
  width: 100%;
`;

export const Id = styled.p`
  ${H4};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  text-transform: uppercase;
`;

export const Hashtag = styled.span`
  color: ${({ theme }) => theme.constants.colors.shipCove};
`;

export const Name = styled.p`
  ${H4};
  color: ${({ theme }) => theme.constants.colors.white};
  font-weight: 500;
  justify-self: end;
`;

export const Date = styled.p``;

export const Price = styled.h2``;

export const Status = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1.2rem 1.8rem;
`;
