import React from 'react';
import * as S from './styled';
import Nav from '../../components/shared/Nav';
import InvoiceList from '../../components/Invoices/InvoiceList';
import invoices from '../../../data/data.json';
import Invoices from '../../components/Invoices';
import InvoicesHeader from '../../components/Invoices/InvoicesHeader/index';

function InvoicesHome() {
  return (
    <S.Container>
      <Nav />
      <Invoices>
        <InvoicesHeader />
        <InvoiceList invoices={invoices} />
      </Invoices>
    </S.Container>
  );
}

export default InvoicesHome;
