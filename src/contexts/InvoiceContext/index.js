import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';
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
  const [formLocked, setFormLocked] = useState(false);

  const handleSetFormLocked = useCallback(() => {
    setFormLocked(true);
    setFormEditing(true);
  }, []);

  const handleSetFormUnlocked = useCallback(() => {
    setFormLocked(false);
    setFormEditing(false);
  }, []);

  useEffect(() => {
    if (formLocked) {
      setFormStatus(true);
    } else {
      setFormStatus(false);
    }
  }, [formLocked]);

  const handleSetNewFormId = id => {
    setFormId(id);
  };

  const handleCreateNewInvoice = useCallback(() => {
    setFormStatus(prevStatus => !prevStatus);
    setFormEditing(false);
    setFormId(generateInvoiceNumber());
  }, []);

  const handleShowForm = useCallback(() => {
    if (formLocked) return;
    setFormStatus(false);
  }, [formLocked]);

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
        handleSetFormLocked,
        handleSetFormUnlocked,
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
