import React from 'react';
import * as S from '../styled';
import Address from '../Address';
import DateGroup from '../DateGroup';
import DetailGroup from '../DetailGroup';
import DetailWithAddress from '../DetailWithAddress';
import AmountFooter from '../AmountFooter';
import formatDate from '../../../../utils/formatDate';

const Details = ({ invoiceData }) => {
  const {
    clientAddress,
    clientEmail,
    clientName,
    createdAt,
    description,
    _id: id,
    items,
    paymentDue,
    paymentTerms,
    senderAddress,
    status,
    total,
  } = invoiceData;

  console.log(new Date(createdAt));

  return (
    <S.Details>
      <S.Header>
        <S.IdGroup>
          <S.Id>
            <S.Hashtag>#</S.Hashtag>
            {id}
          </S.Id>
          <S.Label>{description}</S.Label>
        </S.IdGroup>
        <Address
          address={[
            senderAddress.street,
            senderAddress.city,
            senderAddress.postCode,
            senderAddress.country,
          ]}
        />
      </S.Header>
      <S.InvoiceDetails>
        <DateGroup>
          <DetailGroup label="Invoice Date" title={formatDate(createdAt)} />
          <DetailGroup label="Payment Due" title={formatDate(paymentDue)} />
        </DateGroup>
        <DetailWithAddress>
          <DetailGroup label="Bill To" title={clientName} />
          <Address
            address={[
              clientAddress.street,
              clientAddress.city,
              clientAddress.postCode,
              clientAddress.country,
            ]}
          />
        </DetailWithAddress>
        <DetailGroup label="Sent To" title={clientEmail} />
      </S.InvoiceDetails>
      <AmountFooter items={items} total={total} />
    </S.Details>
  );
};

export default Details;
