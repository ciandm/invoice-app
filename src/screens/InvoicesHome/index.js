import React from 'react';
import * as S from './styled';
import Nav from '../../components/shared/Nav';
import InvoiceList from '../../components/Invoices/InvoiceList';
import invoices from '../../../data/data.json';

function InvoicesHome() {
  return (
    <S.Container>
      <Nav />
      <InvoiceList invoices={invoices} />
    </S.Container>
  );
}

export default InvoicesHome;
