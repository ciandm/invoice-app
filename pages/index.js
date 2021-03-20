import { useState } from 'react';
import InvoicesHome from '../src/screens/InvoicesHome';
import InvoiceForm from '../src/screens/InvoiceForm';

export default function Home() {
  const [newInvoice, setNewInvoice] = useState(false);
  const toggleNewInvoice = () => setNewInvoice(prevState => !prevState);
  return (
    <>
      <InvoicesHome toggleNewInvoice={toggleNewInvoice} />
      {newInvoice && <InvoiceForm toggleNewInvoice={toggleNewInvoice} />}
    </>
  );
}
