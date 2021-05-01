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
  padding: 3.2rem 2.4rem 0 2.4rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    margin: 0 auto;
    padding: 4.8rem 4rem;
  }

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    margin: 0 auto;
    padding: 6.4rem 0 0;
  }
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

export const StatusGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    justify-content: flex-start;
  }
`;

export const StatusTag = styled.span`
  ${BodyOne};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.selago
      : theme.constants.colors.shipCove};

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding-right: 1.6rem;
  }
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

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding: 3.2rem;
  }

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    padding: 4.8rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3.2rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
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

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 10.4rem;
  }
`;

export const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    padding-top: 3.2rem;
  }
`;

export const DateGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 4rem;
  padding-bottom: 3.2rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding-right: 0;
    padding-bottom: 0;
  }
`;

export const DetailWithAddress = styled.div`
  display: grid;
  gap: 0.8rem;
  padding-bottom: 3.2rem;
  padding-right: 4rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding-bottom: 0;
    padding-right: 0;
  }
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
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 4rem;
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

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding: 2.4rem 3.2rem;
  }
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const ItemGridRow = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr 8rem 8.8rem 10.8rem;
`;

export const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h4`
  ${H4};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  padding-bottom: 0.8rem;
`;

export const ItemPrice = styled(ItemTitle)`
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.selago
      : theme.constants.colors.shipCove};
  text-align: right;
`;

export const ItemQuantity = styled.p`
  ${H4};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.baliHai
      : theme.constants.colors.shipCove};

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    color: ${({ theme }) =>
      theme.darkMode
        ? theme.constants.colors.selago
        : theme.constants.colors.shipCove};
    text-align: right;
  }
`;

export const ItemAmount = styled.h4`
  ${H4};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    color: ${({ theme }) =>
      theme.darkMode
        ? theme.constants.colors.selago
        : theme.constants.colors.shipCove};
    text-align: right;
  }
`;

export const AmountDue = styled.div`
  align-items: center;
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.chartreuseYellow
      : theme.constants.colors.blackPearl};
  display: flex;
  justify-content: space-between;
  padding: 2.4rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding: 2.4rem 3.2rem;
  }
`;

export const AmountSpan = styled.span`
  ${BodyTwo};
  color: ${({ theme }) => theme.constants.colors.white};
`;

export const TableHeader = styled.span`
  ${BodyTwo};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.baliHai
      : theme.constants.colors.shipCove};

  &:not(:first-of-type) {
    text-align: right;
  }
`;

export const AmountTotal = styled.h2`
  color: ${({ theme }) => theme.constants.colors.white};
  font-size: 2rem;
  line-height: 3.2rem;
  letter-spacing: -0.42px;
`;

export const ButtonGroup = styled.div`
  align-items: center;
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(2, max-content) 1fr;
  margin-top: 5.6rem;
  padding: 2.4rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    background-color: transparent;
    grid-template-columns: repeat(3, max-content);
    margin-top: 0;
    padding: 0;
  }
`;
