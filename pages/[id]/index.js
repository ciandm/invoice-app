import React from 'react';
import InvoiceDetail from '../../src/screens/InvoiceDetail';
import InvoiceForm from '../../src/screens/InvoiceForm';

function Invoice({ invoiceData }) {
  return (
    <>
      <InvoiceDetail invoiceData={invoiceData} />
      <InvoiceForm invoiceData={invoiceData} />
    </>
  );
}

export default Invoice;

export async function getStaticProps({ params }) {
  const data = await fetch(`http://localhost:3000/api/invoices/${params.id}`);
  const invoice = await data.json();

  return {
    props: {
      invoiceData: invoice.data,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch('http://localhost:3000/api/invoices');

  const allInvoices = await data.json();

  const paths = allInvoices.data.map(i => ({
    params: {
      id: i._id,
    },
  }));
  return {
    fallback: false,
    paths,
  };
}
