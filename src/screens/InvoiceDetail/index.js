import React from 'react';
import Nav from '../../components/shared/Nav';
import * as S from './styled';
import Invoice from '../../components/Invoice';

function InvoiceDetail({ invoiceData }) {
  console.log(invoiceData);
  return (
    <S.Container>
      <Nav />
      <Invoice invoiceData={invoiceData} />
    </S.Container>
  );
}

export default InvoiceDetail;
