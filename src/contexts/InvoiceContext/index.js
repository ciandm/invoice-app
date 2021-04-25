import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const InvoiceContext = createContext({ id: '', shown: false });
const useInvoiceContext = () => useContext(InvoiceContext);

function InvoiceContextProvider({ children }) {
  const [formId, setFormId] = useState(uuidv4());
  const [formShown, setFormShown] = useState(false);

  const handleSetNewFormId = id => {
    setFormId(id);
  };

  const handleShowForm = () => {
    setFormShown(prevState => !prevState);
    console.log(formId);
  };

  return (
    <InvoiceContext.Provider
      value={{
        formId,
        formShown,
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
