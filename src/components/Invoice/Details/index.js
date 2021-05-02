import React from 'react';
import * as S from '../styled';
import Address from '../Address';
import DateGroup from '../DateGroup';
import DetailGroup from '../DetailGroup';
import DetailWithAddress from '../DetailWithAddress';
import AmountFooter from '../AmountFooter';

const Details = ({ invoiceData }) => {
  const {
    clientAddress,
    clientEmail,
    clientName,
    createdAt,
    description,
    id,
    items,
    paymentDue,
    paymentTerms,
    senderAddress,
    status,
    total,
  } = invoiceData;

  const formatDate = date => {
    // eslint-disable-next-line
    let [year, month, day] = date.split('-');
    if (month === '01') {
      month = 'Jan';
    }
    if (month === '02') {
      month = 'Feb';
    }
    if (month === '03') {
      month = 'Mar';
    }
    if (month === '04') {
      month = 'Apr';
    }
    if (month === '05') {
      month = 'May';
    }
    if (month === '06') {
      month = 'Jun';
    }
    if (month === '07') {
      month = 'Jul';
    }
    if (month === '08') {
      month = 'Aug';
    }
    if (month === '09') {
      month = 'Sep';
    }
    if (month === '10') {
      month = 'Oct';
    }
    if (month === '11') {
      month = 'Nov';
    }
    if (month === '12') {
      month = 'Dec';
    }

    return `${day} ${month} ${year}`;
  };
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
