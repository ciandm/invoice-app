import React from 'react';
import * as S from './styled';
import Nav from '../../components/shared/Nav';
import Wrapper from '../../components/shared/Wrapper';
import Invoices from '../../components/Invoices';
import InvoiceCard from '../../components/Invoices/InvoiceCard';

function InvoicesHome({ children }) {
  return (
    <S.Container>
      <Nav />
      <Wrapper>
        <Invoices>
          <InvoiceCard />
        </Invoices>
      </Wrapper>
    </S.Container>
  );
}

export default InvoicesHome;
