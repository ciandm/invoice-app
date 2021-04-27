import styled from 'styled-components';
import { H4, BodyOne, BodyTwo, H3 } from '../../theme/typography';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem 5.6rem 2.4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatusBar = styled.div`
  align-items: center;
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  padding: 2.4rem;
`;

export const StatusTag = styled.span`
  ${BodyOne};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.selago
      : theme.constants.colors.shipCove};
`;

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

export const Details = styled.div`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3.2rem;
`;

export const IdGroup = styled.div`
  margin-bottom: 3.2rem;
`;

export const Id = styled.p`
  ${H4};
  display: flex;
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  text-transform: uppercase;
  padding-bottom: 0.4rem;
`;

export const Hashtag = styled.span`
  color: ${({ theme }) => theme.constants.colors.shipCove};
`;

export const Label = styled.p`
  ${H4};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.selago
      : theme.constants.colors.shipCove};
  font-weight: 500;
`;

export const Address = styled.ul`
  ${BodyTwo};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.selago
      : theme.constants.colors.shipCove};
  list-style: none;
`;

export const AddressLine = styled.li``;

export const InvoiceDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-bottom: 3.2rem; */

  & + & {
    padding-top: 3.2rem;
  }
`;

export const DateGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 4rem;
  padding-bottom: 3.2rem;
`;

export const DetailWithAddress = styled.div`
  display: grid;
  gap: 0.8rem;
  padding-bottom: 3.2rem;
`;

export const Title = styled.h3`
  ${H3};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  padding-top: 1.2rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemList = styled.div`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.ebonyClay
      : theme.constants.colors.athensGray};
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr;
  padding: 2.4rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemTitle = styled.h4`
  ${H4};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
`;

export const ItemQuantity = styled.p`
  ${H4};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.baliHai
      : theme.constants.colors.shipCove};
`;

export const AmountDue = styled.div`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.chartreuseYellow
      : theme.constants.colors.blackPearl};
  display: flex;
  justify-content: space-between;
`;
