import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button';
import * as S from './styled';

const NewFormButtons = ({ handleDiscardInvoice, handleSaveInvoiceAsDraft }) => {
  return (
    <S.Buttons>
      <Button
        variation="three"
        type="button"
        handleButtonClick={handleDiscardInvoice}
      >
        Discard
      </Button>
      <S.ButtonGroup>
        <Button
          variation="four"
          type="button"
          handleButtonClick={handleSaveInvoiceAsDraft}
        >
          Save as Draft
        </Button>
        <Button variation="two" type="submit">
          Save & Send
        </Button>
      </S.ButtonGroup>
    </S.Buttons>
  );
};

const EditFormButtons = React.memo(({ handleCancelInvoice }) => {
  return (
    <S.Buttons>
      <S.ButtonGroup alignRight>
        <Button
          variation="four"
          type="button"
          handleButtonClick={handleCancelInvoice}
        >
          Cancel
        </Button>
        <Button variation="two" type="submit">
          Save Changes
        </Button>
      </S.ButtonGroup>
    </S.Buttons>
  );
});

const FormButtons = ({
  formType,
  handleDiscardInvoice,
  handleCancelInvoice,
  handleSaveInvoiceAsDraft,
}) => {
  if (formType === 'edit') {
    return <EditFormButtons handleCancelInvoice={handleCancelInvoice} />;
  }

  return (
    <NewFormButtons
      handleDiscardInvoice={handleDiscardInvoice}
      handleSaveInvoiceAsDraft={handleSaveInvoiceAsDraft}
    />
  );
};

export default FormButtons;

FormButtons.propTypes = {
  formType: PropTypes.oneOf(['new', 'edit']).isRequired,
  handleCancelInvoice: PropTypes.func,
  handleDiscardInvoice: PropTypes.func,
};
