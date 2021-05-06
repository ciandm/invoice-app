import React, { useState, useContext, useCallback, createContext } from 'react';
import PropTypes from 'prop-types';
import generateInvoiceNumber from '../../../utils/generateInvoiceNumber';

const InvoiceContext = createContext({
  id: '',
  isEditing: false,
  status: false,
});
const useInvoiceContext = () => useContext(InvoiceContext);

function InvoiceContextProvider({ children }) {
  const [formId, setFormId] = useState(generateInvoiceNumber());
  const [formStatus, setFormStatus] = useState(false);
  const [formEditing, setFormEditing] = useState(false);

  const handleSetNewFormId = id => {
    setFormId(id);
  };

  const handleCreateNewInvoice = useCallback(() => {
    setFormStatus(prevStatus => !prevStatus);
    setFormEditing(false);
    setFormId(generateInvoiceNumber());
  }, []);

  const handleShowForm = useCallback(() => {
    setFormStatus(false);
  }, []);

  const handleEditingForm = useCallback(id => {
    setFormId(id);
    setFormStatus(true);
    setFormEditing(true);
  }, []);

  return (
    <InvoiceContext.Provider
      value={{
        formEditing,
        formId,
        formStatus,
        handleCreateNewInvoice,
        handleEditingForm,
        handleSetNewFormId,
        handleShowForm,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export default InvoiceContextProvider;

InvoiceContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useInvoiceContext };
