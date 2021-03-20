import React from 'react';
import * as S from './styled';

function InvoiceEmpty() {
  return (
    <S.Container>
      <S.Image src="/images/illustration-empty.svg" alt="No invoices to show" />
      <S.Text>
        <S.Title>There is nothing here</S.Title>
        <S.Subtitle>
          Create an invoice by clicking the <strong>New</strong> button and get
          started
        </S.Subtitle>
      </S.Text>
    </S.Container>
  );
}

export default InvoiceEmpty;
