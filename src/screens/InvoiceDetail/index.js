import React from 'react';
import Nav from '../../components/shared/Nav';
import * as S from './styled';
import Invoice from '../../components/Invoice';

function InvoiceDetail() {
  return (
    <S.Container>
      <Nav />
      <Invoice />
    </S.Container>
  );
}

export default InvoiceDetail;
