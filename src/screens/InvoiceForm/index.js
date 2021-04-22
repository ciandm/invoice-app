import Form from '../../components/Form';
import FormContextProvider from './FormProvider';

function InvoiceForm() {
  return (
    <FormContextProvider>
      <Form />
    </FormContextProvider>
  );
}

export default InvoiceForm;
