import React from 'react';
import { useRouter } from 'next/router';
import Nav from '../../components/shared/Nav';
import * as S from './styled';
import Return from '../../components/shared/Return';
import InvoiceButtons from './InvoiceButtons';
import useWindowSize from '../../hooks/useWindowSize';
import Invoice from '../../components/Invoice';

function InvoiceDetail() {
  const isMobile = useWindowSize() < 767;
  const router = useRouter();
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <Return handleButtonClick={() => router.push('/')} />
        <Invoice />
      </S.Wrapper>
      {isMobile ? <InvoiceButtons /> : null}
    </S.Container>
  );
}

export default InvoiceDetail;
