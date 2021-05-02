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
    console.log(year, month, day);
    if (month === '1') {
      month = 'Jan';
    }
    if (month === '2') {
      month = 'Feb';
    }
    if (month === '3') {
      month = 'Mar';
    }
    if (month === '4') {
      month = 'Apr';
    }
    if (month === '5') {
      month = 'May';
    }
    if (month === '6') {
      month = 'Jun';
    }
    if (month === '7') {
      month = 'Jul';
    }
    if (month === '8') {
      month = 'Aug';
    }
    if (month === '9') {
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
