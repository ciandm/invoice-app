import React, { useState } from 'react';
import { useRouter } from 'next/router';
import StatusBar from './StatusBar';
import useWindowSize from '../../hooks/useWindowSize';
import Details from './Details';
import InvoiceButtons from './InvoiceButtons';
import Return from '../shared/Return';
import * as S from './styled';
import DeleteInvoice from './DeleteInvoice/index';

function Invoice({ invoiceData }) {
  const isMobile = useWindowSize() < 767;
  const router = useRouter();
  // Set it to be marked as paid without the need for a refresh.
  const [markedAsPaid, setMarkedAsPaid] = useState(invoiceData.state);
  const [deleteModalActive, setDeleteModalActive] = useState(false);

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

  const handleDisplayDeleteModal = () => {
    setDeleteModalActive(prevState => !prevState);
  };

  const handleDeleteInvoice = () => {};

  return (
    <S.Invoice>
      <S.Wrapper>
        <Return handleButtonClick={() => router.push('/')} />
        <StatusBar
          isMobile={isMobile}
          status={markedAsPaid ? 'paid' : invoiceData.status}
          handleMarkAsPaid={handleMarkAsPaid}
          handleDisplayDeleteModal={handleDisplayDeleteModal}
        />
        <Details invoiceData={invoiceData} />
      </S.Wrapper>
      {deleteModalActive ? (
        <DeleteInvoice
          invoiceId={invoiceData._id}
          handleDisplayDeleteModal={handleDisplayDeleteModal}
          handleDeleteInvoice={handleDeleteInvoice}
        />
      ) : null}
      {isMobile ? (
        <InvoiceButtons
          handleMarkAsPaid={handleMarkAsPaid}
          handleDisplayDeleteModal={handleDisplayDeleteModal}
        />
      ) : null}
    </S.Invoice>
  );
}

export default Invoice;
