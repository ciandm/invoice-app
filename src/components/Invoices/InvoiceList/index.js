import React from 'react';
import * as S from './styled';
import InvoiceCard from '../InvoiceCard';

function InvoiceList({ invoices }) {
  return (
    <S.InvoiceList>
      {invoices.map(i => (
        <InvoiceCard key={i.id} {...i} />
      ))}
    </S.InvoiceList>
  );
}

export default InvoiceList;
