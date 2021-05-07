import React from 'react';
import Button from '../../shared/Button';
import * as S from './styled';

const DeleteInvoice = ({ invoiceId }) => {
  return (
    <S.Container>
      <S.Modal>
        <S.Content>
          <S.Title>Confirm Deletion</S.Title>
          <S.Prompt>
            Are you sure you want to delete invoice #{invoiceId}? This action
            cannot be undone.
          </S.Prompt>
          <S.ButtonGroup>
            <Button variation="three">Cancel</Button>
            <Button variation="five">Delete</Button>
          </S.ButtonGroup>
        </S.Content>
      </S.Modal>
    </S.Container>
  );
};

export default DeleteInvoice;
