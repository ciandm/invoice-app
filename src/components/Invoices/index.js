import React from 'react';
import InvoiceCard from './InvoiceCard';
import * as S from './styled';

function Invoices({ children }) {
  return <S.Container>{children}</S.Container>;
}

export default Invoices;
