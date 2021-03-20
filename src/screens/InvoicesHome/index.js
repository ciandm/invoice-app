import React from 'react';
import * as S from './styled';
import Nav from '../../components/shared/Nav';
import InvoiceList from '../../components/Invoices/InvoiceList';
import invoices from '../../../data/data.json';
import Invoices from '../../components/Invoices';
import InvoicesHeader from '../../components/Invoices/InvoicesHeader/index';
import InvoiceEmpty from '../../components/Invoices/InvoiceEmpty';

function InvoicesHome() {
  return (
    <S.Container>
      <Nav />
      <Invoices>
        <InvoicesHeader />
        {invoices.length > 0 ? (
          <>
            <InvoiceList invoices={invoices} />
          </>
        ) : (
          <InvoiceEmpty />
        )}
      </Invoices>
    </S.Container>
  );
}

export default InvoicesHome;
