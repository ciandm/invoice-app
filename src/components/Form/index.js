import React, { useState } from 'react';
import * as S from './styled';
import { ReactComponent as ArrowLeft } from '../../../public/images/icon-arrow-left.svg';
import Input from '../shared/Input';
import useWindowSize from '../../hooks/useWindowSize';
import Select from '../shared/Select';
import ItemList from './ItemList';
import generateInvoiceNumber from '../../../utils/generateInvoiceNumber';

function Form({ toggleInvoiceForm, invoiceFormShown }) {
  const windowSize = useWindowSize();
  const [values, setValues] = useState({
    invoice: {
      date: undefined,
      description: '',
      terms: undefined,
    },
    items: [
      {
        id: generateInvoiceNumber(),
        name: '',
        price: '',
        quantity: '',
      },
      {
        id: generateInvoiceNumber(),
        name: '',
        price: '',
        quantity: '',
      },
    ],
    receiver: {
      city: '',
      country: '',
      email: '',
      name: '',
      postCode: '',
      street: '',
    },
    sender: {
      city: '',
      country: '',
      postCode: '',
      street: '',
    },
  });

  const handleInputChange = e => {
    const valueGroup = e.getAttribute('data-value-group');
    const { name, value } = e;
    setValues(prevState => ({
      ...prevState,
      [valueGroup]: {
        ...prevState[valueGroup],
        [name]: value,
      },
    }));
  };

  const handleItemInputChange = (e, id) => {
    const indexInArray = values.items.findIndex(x => x.id === id);
    const { name, value } = e;
    const allItems = [...values.items];
    const itemToUpdate = allItems[indexInArray];
    itemToUpdate[name] = value;
    allItems[indexInArray] = itemToUpdate;
    setValues(prevState => ({
      ...prevState,
      [prevState.items]: [...allItems],
    }));
  };

  const handleSelectClick = (group, name, value) => {
    setValues(prevState => ({
      ...prevState,
      [group]: {
        ...prevState[group],
        [name]: value,
      },
    }));
  };

  return (
    <S.Wrapper shown={invoiceFormShown}>
      {windowSize > 768 && (
        <S.Overlay
          shown={invoiceFormShown}
          onClick={() => toggleInvoiceForm()}
        />
      )}
      <S.Form shown={invoiceFormShown}>
        {windowSize < 768 ? (
          <S.Return onClick={() => toggleInvoiceForm()}>
            <ArrowLeft /> Go back
          </S.Return>
        ) : null}
        <S.Title>New invoices</S.Title>
        {/* Sender details */}
        <S.FormGroup>
          <S.FormGroupTitle>Bill From</S.FormGroupTitle>
          <Input
            label="Street Address"
            name="street"
            handleInputChange={handleInputChange}
            data-value-group="sender"
            id="sender-street"
            value={values.sender.street}
          />
          <S.InputGroup>
            <Input
              label="City"
              name="city"
              handleInputChange={handleInputChange}
              data-value-group="sender"
              id="sender-city"
              value={values.sender.city}
            />
            <Input
              label="Post Code"
              name="postCode"
              handleInputChange={handleInputChange}
              data-value-group="sender"
              id="sender-postCode"
              value={values.sender.postCode}
            />
            <Input
              label="Country"
              name="country"
              handleInputChange={handleInputChange}
              data-value-group="sender"
              id="sender-country"
              value={values.sender.country}
            />
          </S.InputGroup>
        </S.FormGroup>
        {/* Receiver details */}
        <S.FormGroup>
          <S.FormGroupTitle>Bill To</S.FormGroupTitle>
          <Input
            label="Client's Name"
            name="name"
            handleInputChange={handleInputChange}
            data-value-group="receiver"
            id="receiver-name"
            value={values.receiver.name}
          />
          <Input
            label="Client's Email"
            name="email"
            handleInputChange={handleInputChange}
            data-value-group="receiver"
            id="receiver-email"
            value={values.receiver.email}
          />
          <Input
            label="Street Address"
            name="address"
            handleInputChange={handleInputChange}
            data-value-group="receiver"
            id="receiver-address"
            value={values.receiver.street}
          />
          <S.InputGroup>
            <Input
              label="City"
              name="city"
              handleInputChange={handleInputChange}
              data-value-group="receiver"
              id="receiver-city"
              value={values.receiver.city}
            />
            <Input
              label="Post Code"
              name="postCode"
              handleInputChange={handleInputChange}
              data-value-group="receiver"
              id="receiver-postCode"
              value={values.receiver.postCode}
            />
            <Input
              label="Country"
              name="country"
              handleInputChange={handleInputChange}
              data-value-group="receiver"
              id="receiver-country"
              value={values.receiver.country}
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.InvoiceInfoGroup>
          <Input
            label="Invoice Date"
            name="date"
            data-value-group="invoice"
            id="invoice-date"
            value={values.invoice.date}
            handleInputChange={handleInputChange}
            type="date"
          />
          <Select
            value={values.invoice.terms}
            data-value-group="invoice"
            label="Payment Terms"
            options={['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days']}
            handleSelectClick={handleSelectClick}
            valuesName="terms"
            valuesGroup="invoice"
          />
          <Input
            label="Project Description"
            name="description"
            data-value-group="invoice"
            id="invoice-description"
            value={values.invoice.description}
            handleInputChange={handleInputChange}
          />
        </S.InvoiceInfoGroup>
        <ItemList
          items={values.items}
          handleItemInputChange={handleItemInputChange}
        />
      </S.Form>
    </S.Wrapper>
  );
}

export default Form;
