import React, { useState } from 'react';
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
  // Set it to be marked as paid without the need for a refresh.
  const [markedAsPaid, setMarkedAsPaid] = useState(invoiceData.state);

  const handleMarkAsPaid = async id => {
    try {
      await fetch(`http://localhost:3000/api/invoices/${id}`, {
        body: JSON.stringify({ status: 'paid' }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PUT',
      });
      setMarkedAsPaid(true);
    } catch (e) {
      setMarkedAsPaid(false);
    }
  };

  return (
    <S.Invoice>
      <S.Wrapper>
        <Return handleButtonClick={() => router.push('/')} />
        <StatusBar
          isMobile={isMobile}
          status={markedAsPaid ? 'paid' : invoiceData.status}
          handleMarkAsPaid={handleMarkAsPaid}
        />
        <Details invoiceData={invoiceData} />
      </S.Wrapper>
      {isMobile ? <InvoiceButtons handleMarkAsPaid={handleMarkAsPaid} /> : null}
    </S.Invoice>
  );
}

export default Invoice;
