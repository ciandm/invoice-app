import InvoicesHome from '../src/screens/InvoicesHome';
import InvoiceForm from '../src/screens/InvoiceForm';

export default function Home({ invoices }) {
  return (
    <>
      <InvoicesHome invoices={invoices} />
      <InvoiceForm />
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/invoices');
  const invoices = await data.json();

  return {
    props: {
      invoices: invoices.data,
    },
  };
}
