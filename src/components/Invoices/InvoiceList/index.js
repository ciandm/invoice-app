import React from 'react';
import * as S from './styled';
import Invoices from '../index';
import InvoiceCard from '../InvoiceCard';
import InvoicesHeader from '../InvoicesHeader';

function InvoiceList({ invoices }) {
  return (
    <S.InvoiceList>
      <InvoicesHeader />
      <Invoices>
        {invoices.map(i => (
          <InvoiceCard key={i.id} {...i} />
        ))}
      </Invoices>
    </S.InvoiceList>
  );
}

export default InvoiceList;
