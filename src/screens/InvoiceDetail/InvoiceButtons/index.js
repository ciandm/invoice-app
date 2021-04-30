import React from 'react';
import Button from '../../../components/shared/Button';
import * as S from '../styled';

const InvoiceButtons = () => {
  return (
    <S.ButtonGroup>
      <Button variation="three">Edit</Button>
      <Button variation="five">Delete</Button>
      <Button variation="two">Mark as Paid</Button>
    </S.ButtonGroup>
  );
};

export default InvoiceButtons;
