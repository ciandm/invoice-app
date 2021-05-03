import React from 'react';
import InvoiceDetail from '../../src/screens/InvoiceDetail';
import { getInvoiceById, getAllInvoiceId } from '../../data/dataFunctions';
import InvoiceForm from '../../src/screens/InvoiceForm';
import { connectToDatabase } from '../../utils/mongodb';

function Invoice({ invoiceData }) {
  console.log(invoiceData);
  return (
    <>
      <InvoiceDetail invoiceData={invoiceData} />
      <InvoiceForm invoiceData={invoiceData} />
    </>
  );
}

export default Invoice;

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection('invoices')
    .find({ _id: params.id })
    .toArray();

  const invoiceData = JSON.parse(JSON.stringify(data));

  return {
    props: {
      invoiceData: invoiceData[0],
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
