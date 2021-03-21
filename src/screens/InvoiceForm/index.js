import React from 'react';
import Form from '../../components/Form';

function InvoiceForm({ toggleInvoiceForm, invoiceFormShown }) {
  return (
    <Form
      toggleInvoiceForm={toggleInvoiceForm}
      invoiceFormShown={invoiceFormShown}
    />
  );
}

export default InvoiceForm;
