import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const FormContext = createContext({ id: '', shown: false });
const useFormContext = () => useContext(FormContext);

function FormContextProvider({ children }) {
  const [formId, setFormId] = useState(uuidv4());
  const [formShown, setFormShown] = useState(false);

  const handleSetNewFormId = id => {
    setFormId(id);
  };

  const handleShowForm = () => {
    setFormShown(prevState => !prevState);
  };

  return (
    <FormContext.Provider
      value={{
        formId,
        formShown,
        handleSetNewFormId,
        handleShowForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useFormContext };
