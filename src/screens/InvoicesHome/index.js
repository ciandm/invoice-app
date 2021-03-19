import React from 'react';
import * as S from './styled';
import Nav from '../../components/shared/Nav';
import Invoices from '../../components/Invoices';
import InvoiceCard from '../../components/Invoices/InvoiceCard';
import { InvoiceList } from '../../components/Invoices/InvoiceList/styled';
import invoices from '../../../data/data.json';

function InvoicesHome() {
  return (
    <S.Container>
      <Nav />
      <InvoiceList>
        <Invoices>
          {invoices.map(i => (
            <InvoiceCard key={i.id} {...i} />
          ))}
        </Invoices>
      </InvoiceList>
    </S.Container>
  );
}

export default InvoicesHome;
