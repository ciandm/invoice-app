import React from 'react';
import * as S from './styled';
import Nav from '../../components/shared/Nav';
import Invoices from '../../components/Invoices';
import InvoiceCard from '../../components/Invoices/InvoiceCard';
import { InvoiceList } from '../../components/Invoices/InvoiceList/styled';

function InvoicesHome() {
  return (
    <S.Container>
      <Nav />
      <InvoiceList>
        <Invoices>
          <InvoiceCard />
          <InvoiceCard />
        </Invoices>
      </InvoiceList>
    </S.Container>
  );
}

export default InvoicesHome;
