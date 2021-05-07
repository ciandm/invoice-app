import React from 'react';
import Button from '../../shared/Button';
import * as S from './styled';

const DeleteInvoice = ({
  invoiceId,
  handleDeleteInvoice,
  handleDisplayDeleteModal,
}) => {
  // If overlay is clicked, close prompt also.
  const handleOverlayClick = e => {
    if (e.target !== e.currentTarget) return;
    handleDisplayDeleteModal();
  };
  return (
    <S.Container onClick={e => handleOverlayClick(e)}>
      <S.Modal>
        <S.Content>
          <S.Title>Confirm Deletion</S.Title>
          <S.Prompt>
            Are you sure you want to delete invoice #{invoiceId}? This action
            cannot be undone.
          </S.Prompt>
          <S.ButtonGroup>
            <Button
              type="button"
              variation="three"
              handleButtonClick={handleDisplayDeleteModal}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variation="five"
              handleButtonClick={handleDeleteInvoice}
            >
              Delete
            </Button>
          </S.ButtonGroup>
        </S.Content>
      </S.Modal>
    </S.Container>
  );
};

export default DeleteInvoice;
