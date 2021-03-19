import React from 'react';
import * as S from './styled';
import Button from '../../shared/Button';

function InvoicesHeader() {
  return (
    <S.Header>
      <S.Content direction="column">
        <S.Title>Invoices</S.Title>
        <S.Pending>7 invoices</S.Pending>
      </S.Content>
      <S.Content direction="row">
        <Button variation="one">New Invoice</Button>
      </S.Content>
    </S.Header>
  );
}

export default InvoicesHeader;
