import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Button from '../../shared/Button';
import * as S from '../styled';
import { useInvoiceContext } from '../../../contexts/InvoiceContext';

const InvoiceButtons = ({ handleMarkAsPaid }) => {
  const { handleEditingForm } = useInvoiceContext();
  const router = useRouter();
  const { id } = router.query;

  return (
    <S.ButtonGroup>
      <Button
        variation="three"
        type="button"
        handleButtonClick={() => handleEditingForm(id)}
      >
        Edit
      </Button>
      <Button variation="five" type="button">
        Delete
      </Button>
      <Button
        variation="two"
        type="button"
        handleButtonClick={() => handleMarkAsPaid(id)}
      >
        Mark as Paid
      </Button>
    </S.ButtonGroup>
  );
};

export default InvoiceButtons;

InvoiceButtons.propTypes = {
  handleMarkAsPaid: PropTypes.func.isRequired,
};
