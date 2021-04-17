import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as S from './styled';
import { ReactComponent as ArrowLeft } from '../../../public/images/icon-arrow-left.svg';
import Input from '../shared/Input';
import useWindowSize from '../../hooks/useWindowSize';
import Select from '../shared/Select';
import ItemList from './ItemList';
import generateInvoiceNumber from '../../../utils/generateInvoiceNumber';
import Button from '../shared/Button';

function Form({ toggleInvoiceForm, invoiceFormShown }) {
  const windowSize = useWindowSize();
  const initialFormValues = {
    invoice: {
      date: '',
      description: '',
      terms: '',
    },
    items: [
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
  };
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [values, setValues] = useState(initialFormValues);

  const initialFormErrors = {
    invoice: {
      date: false,
      description: false,
      terms: false,
    },
    items: [
      {
        name: false,
        price: false,
        quantity: false,
      },
    ],
    receiver: {
      city: false,
      country: false,
      email: false,
      name: false,
      postCode: false,
      street: false,
    },
    sender: {
      city: false,
      country: false,
      postCode: false,
      street: false,
    },
  };

  const [formErrors, setFormErrors] = useState(initialFormErrors);

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
      items: [...allItems],
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

  const handleAddNewItem = () => {
    setValues(prevValues => ({
      ...prevValues,
      items: [
        ...prevValues.items,
        {
          id: generateInvoiceNumber(),
          name: '',
          price: '',
          quantity: '',
        },
      ],
    }));
  };

  const handleRemoveItem = id => {
    const filteredItems = values.items.filter(i => i.id !== id);
    setValues(prevValues => ({
      ...prevValues,
      items: filteredItems,
    }));
  };

  const handleDiscardInvoice = () => {
    reset();
    toggleInvoiceForm();
  };

  const handleFormSubmit = data => {
    console.log(data);
  };

  return (
    <S.Wrapper shown={invoiceFormShown}>
      {windowSize > 768 && (
        <S.Overlay
          shown={invoiceFormShown}
          onClick={() => toggleInvoiceForm()}
        />
      )}
      <S.FormContainer shown={invoiceFormShown}>
        {windowSize < 768 ? (
          <S.Return onClick={() => toggleInvoiceForm()}>
            <ArrowLeft /> Go back
          </S.Return>
        ) : null}
        <S.Title>New invoices</S.Title>
        <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
          {/* Sender details */}
          <S.FormGroup>
            <S.FormGroupTitle>Bill From</S.FormGroupTitle>
            <Input
              label="Street Address"
              error={errors.sender_street}
              {...register('sender_street', {
                required: true,
              })}
            />
            <S.InputGroup>
              <Input
                label="City"
                error={errors.sender_city}
                {...register('sender_city', {
                  required: true,
                })}
              />
              <Input
                label="Post Code"
                error={errors.sender_postCode}
                {...register('sender_postCode', {
                  required: true,
                })}
              />
              <Input
                label="Country"
                error={errors.sender_country}
                {...register('sender_country', {
                  required: true,
                })}
              />
            </S.InputGroup>
          </S.FormGroup>
          <S.FormGroup>
            <S.FormGroupTitle>Bill To</S.FormGroupTitle>
            <Input
              label="Client's Name"
              error={errors.receiver_country}
              {...register('receiver_country', {
                required: true,
              })}
            />
            <Input
              label="Client's Email"
              error={errors.receiver_email}
              {...register('receiver_email', {
                required: true,
              })}
            />
            <Input
              label="Street Address"
              error={errors.receiver_address}
              {...register('receiver_address', {
                required: true,
              })}
            />
            <S.InputGroup>
              <Input
                label="City"
                error={errors.receiver_city}
                {...register('receiver_city', {
                  required: true,
                })}
              />
              <Input
                label="Post Code"
                error={errors.receiver_postCode}
                {...register('receiver_postCode', {
                  required: true,
                })}
              />
              <Input
                label="Country"
                error={errors.receiver_country}
                {...register('receiver_country', {
                  required: true,
                })}
              />
            </S.InputGroup>
          </S.FormGroup>
          <S.InvoiceInfoGroup>
            <Input
              label="Invoice Date"
              error={errors.invoice_date}
              {...register('invoice_date', {
                required: true,
              })}
            />
            <Controller
              name="invoice_terms"
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
                formState,
              }) => (
                <Select
                  label="Payment Terms"
                  options={[
                    { label: 'Net 1 Day', value: '1' },
                    { label: 'Net 7 Days', value: '7' },
                    { label: 'Net 14 Days', value: '14' },
                    { label: 'Net 30 Days', value: '30' },
                  ]}
                  handleSelectClick={onChange}
                />
              )}
              control={control}
            />
            <Input
              label="Project Description"
              error={errors.invoice_description}
              {...register('invoice_description', {
                required: true,
              })}
            />
          </S.InvoiceInfoGroup>
          {/* <ItemList
            items={values.items}
            handleItemInputChange={handleItemInputChange}
            handleAddNewItem={handleAddNewItem}
            handleRemoveItem={handleRemoveItem}
            removeItemDisabled={values.items.length === 1}
          /> */}
          <S.Buttons>
            <Button
              variation="three"
              type="button"
              handleButtonClick={handleDiscardInvoice}
            >
              Discard
            </Button>
            <S.ButtonGroup>
              <Button variation="four" type="button">
                Save as Draft
              </Button>
              <Button variation="two" type="submit">
                Save & Send
              </Button>
            </S.ButtonGroup>
          </S.Buttons>
        </S.Form>
      </S.FormContainer>
    </S.Wrapper>
  );
}

export default Form;
