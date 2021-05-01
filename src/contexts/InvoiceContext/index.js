import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const InvoiceContext = createContext({ id: '', status: 'closed' });
const useInvoiceContext = () => useContext(InvoiceContext);

function InvoiceContextProvider({ children }) {
  const [formId, setFormId] = useState(uuidv4());
  const [formStatus, setFormStatus] = useState(false);

  const handleSetNewFormId = id => {
    setFormId(id);
  };

  const handleShowForm = () => {
    setFormStatus(prevStatus => !prevStatus);
  };

  return (
    <InvoiceContext.Provider
      value={{
        formId,
        formStatus,
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
