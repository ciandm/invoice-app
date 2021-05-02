import React from 'react';
import InvoiceDetail from '../../src/screens/InvoiceDetail';
import { getInvoiceById, getAllInvoiceId } from '../../data/dataFunctions';

function Invoice({ invoiceData }) {
  return <InvoiceDetail invoiceData={invoiceData} />;
}

export default Invoice;

export async function getStaticProps({ params }) {
  const invoiceData = getInvoiceById(params.id);

  return {
    props: {
      invoiceData,
    },
  };
}

export async function getStaticPaths() {
  const invoicePaths = getAllInvoiceId();

  return {
    fallback: false,
    paths: invoicePaths,
  };
}
