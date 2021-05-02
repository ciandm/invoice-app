import React from 'react';
import { useRouter } from 'next/router';
import StatusBar from './StatusBar';
import useWindowSize from '../../hooks/useWindowSize';
import Details from './Details';
import InvoiceButtons from './InvoiceButtons';
import Return from '../shared/Return';
import * as S from './styled';

function Invoice({ invoiceData }) {
  const isMobile = useWindowSize() < 767;
  const router = useRouter();

  return (
    <S.Invoice>
      <S.Wrapper>
        <Return handleButtonClick={() => router.push('/')} />
        <StatusBar isMobile={isMobile} status={invoiceData.status} />
        <Details invoiceData={invoiceData} />
      </S.Wrapper>
      {isMobile ? <InvoiceButtons /> : null}
    </S.Invoice>
  );
}

export default Invoice;
