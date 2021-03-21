import { useState } from 'react';
import InvoicesHome from '../src/screens/InvoicesHome';
import InvoiceForm from '../src/screens/InvoiceForm';

export default function Home() {
  const [invoiceFormShown, setInvoiceFormShown] = useState(false);
  const toggleInvoiceForm = () => setInvoiceFormShown(prevState => !prevState);
  return (
    <>
      <InvoicesHome toggleInvoiceForm={toggleInvoiceForm} />
      <InvoiceForm
        toggleInvoiceForm={toggleInvoiceForm}
        invoiceFormShown={invoiceFormShown}
      />
    </>
  );
}
