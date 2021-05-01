import React from 'react';
import * as S from '../styled';
import Address from '../Address';
import DateGroup from '../DateGroup';
import DetailGroup from '../DetailGroup';
import DetailWithAddress from '../DetailWithAddress';
import AmountFooter from '../AmountFooter';

const Details = () => {
  return (
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
          address={['19 Union Terrace', 'London', 'E1 3EZ', 'United Kingdom']}
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
            address={['19 Union Terrace', 'London', 'E1 3EZ', 'United Kingdom']}
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
  );
};

export default Details;
