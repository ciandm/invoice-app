import React from 'react';
import { useRouter } from 'next/router';
import Nav from '../../components/shared/Nav';
import * as S from './styled';
import Return from '../../components/shared/Return/index';

const DetailGroup = ({ label, title }) => {
  return (
    <S.DetailGroup>
      <S.Label>{label}</S.Label>
      <S.Title>{title}</S.Title>
    </S.DetailGroup>
  );
};

const DetailWithAddress = ({ children }) => {
  return <S.DetailWithAddress>{children}</S.DetailWithAddress>;
};

const DateGroup = ({ children }) => {
  return <S.DateGroup>{children}</S.DateGroup>;
};

const Address = ({ address }) => {
  return (
    <S.Address>
      {address.map((line, index) => (
        <S.AddressLine key={index}>{line}</S.AddressLine>
      ))}
    </S.Address>
  );
};

const AmountFooter = ({ items }) => {
  const totalAmount = items.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);
  return (
    <S.Footer>
      <S.ItemList>
        {items.map((i, index) => (
          <S.Item key={index}>
            <S.ItemGroup>
              <S.ItemTitle>{i.name}</S.ItemTitle>
              <S.ItemQuantity>{`${i.quantity} x £${i.price.toFixed(
                2
              )}`}</S.ItemQuantity>
            </S.ItemGroup>
            <S.ItemAmount>
              £ {`${(i.price * i.quantity).toFixed(2)}`}
            </S.ItemAmount>
          </S.Item>
        ))}
      </S.ItemList>
      <S.AmountDue>
        <S.AmountSpan>Amount Due</S.AmountSpan>
        <S.AmountTotal>£ {totalAmount.toFixed(2)} </S.AmountTotal>
      </S.AmountDue>
    </S.Footer>
  );
};

function InvoiceDetail() {
  const router = useRouter();
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <Return handleButtonClick={() => router.push('/')} />
        <S.Content>
          <S.StatusBar>
            <S.StatusTag>Status</S.StatusTag>
            <S.Status>Pending</S.Status>
          </S.StatusBar>
          <S.Details>
            <S.Header>
              <S.IdGroup>
                <S.Id>
                  <S.Hashtag>#</S.Hashtag>
                  XM9141
                </S.Id>
                <S.Label>Graphic Design</S.Label>
              </S.IdGroup>
              <Address
                address={[
                  '19 Union Terrace',
                  'London',
                  'E1 3EZ',
                  'United Kingdom',
                ]}
              />
            </S.Header>
            <S.InvoiceDetails>
              <DateGroup>
                <DetailGroup label="Invoice Date" title="21 Aug 2021" />
                <DetailGroup label="Payment Due" title="20 Sep 2021" />
              </DateGroup>
              <DetailWithAddress>
                <DetailGroup label="Bill To" title="Alex Grim" />
                <Address
                  address={[
                    '19 Union Terrace',
                    'London',
                    'E1 3EZ',
                    'United Kingdom',
                  ]}
                />
              </DetailWithAddress>
              <DetailGroup label="Sent To" title="alexgrim@mail.com" />
            </S.InvoiceDetails>
            <AmountFooter
              items={[
                { name: 'Banner Design', price: 56, quantity: 2 },
                { name: 'Banner Design', price: 56, quantity: 2 },
              ]}
            />
          </S.Details>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}

export default InvoiceDetail;
