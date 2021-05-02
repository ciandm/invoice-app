import React, { useEffect, useCallback, useRef } from 'react';
import {
  useForm,
  Controller,
  useFieldArray,
  FormProvider,
} from 'react-hook-form';
import * as S from './styled';
import Input from '../shared/Input';
import useWindowSize from '../../hooks/useWindowSize';
import Select from '../shared/Select';
import ItemList from './ItemList';
import generateInvoiceNumber from '../../../utils/generateInvoiceNumber';
import Button from '../shared/Button';
import { useInvoiceContext } from '../../contexts/InvoiceContext';
import Return from '../shared/Return';

function Form({ invoiceData }) {
  const windowSize = useWindowSize();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      invoice: {
        date: invoiceData?.createdAt ?? '',
        description: invoiceData?.description ?? '',
      },
      receiver: {
        city: invoiceData?.clientAddress.city ?? '',
        country: invoiceData?.clientAddress.country ?? '',
        email: invoiceData?.clientEmail ?? '',
        name: invoiceData?.clientName ?? '',
        postCode: invoiceData?.clientAddress.postCode ?? '',
        street: invoiceData?.clientAddress.street ?? '',
      },
      sender: {
        city: invoiceData?.senderAddress.city ?? '',
        country: invoiceData?.senderAddress.country ?? '',
        postCode: invoiceData?.senderAddress.postCode ?? '',
        street: invoiceData?.senderAddress.street ?? '',
      },
    },
  });
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'items',
  });
  const handleAppendNewItem = useCallback(() => {
    append({
      id: generateInvoiceNumber(),
      name: '',
      price: '',
      quantity: '',
    });
  }, [append]);
  const handleRemoveItem = useCallback(
    id => {
      remove(id);
    },
    [remove]
  );
  const {
    formId,
    formStatus,
    handleSetNewFormId,
    handleShowForm,
  } = useInvoiceContext();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      if (invoiceData) {
        append([...invoiceData.items]);
      } else {
        append({
          name: '',
          price: '',
          quantity: '',
        });
      }
      isMounted.current = true;
    }
  }, [append, invoiceData]);

  // Check if there is invoice data from when user selects to edit an invoice, and set as default value after form has mounted
  useEffect(() => {
    if (invoiceData) {
      const { paymentTerms } = invoiceData;
      if (paymentTerms === 1) {
        setTimeout(() => {
          setValue('invoice.terms', { label: 'Net 1 Day', value: '1' });
        }, [500]);
      }
      if (paymentTerms === 7) {
        setTimeout(() => {
          setValue('invoice.terms', { label: 'Net 7 Days', value: '7' });
        }, [500]);
      }
      if (paymentTerms === 14) {
        setTimeout(() => {
          setValue('invoice.terms', { label: 'Net 14 Days', value: '14' });
        }, [500]);
      }
      if (paymentTerms === 30) {
        setTimeout(() => {
          setValue('invoice.terms', { label: 'Net 30 Days', value: '30' });
        }, [500]);
      }
    } else {
      setTimeout(() => {
        setValue('invoice.terms', { label: 'Net 1 Day', value: '1' });
      }, [500]);
    }
    // eslint-disable-next-line
  }, [invoiceData]);

  const handleDiscardInvoice = () => {
    reset();
    append({
      name: '',
      price: '',
      quantity: '',
    });
    setValue('invoice.terms', { label: 'Net 1 Day', value: '1' });
    handleShowForm();
  };

  const handleFormSubmit = data => {
    console.log(data, formId);
  };

  return (
    <S.Wrapper formStatus={formStatus}>
      {windowSize > 768 && (
        <S.Overlay formStatus={formStatus} onClick={() => handleShowForm()} />
      )}
      <S.FormContainer formStatus={formStatus}>
        {windowSize < 768 ? (
          <Return handleButtonClick={handleShowForm} />
        ) : null}
        <S.Title>New invoices</S.Title>
        <FormProvider register={register} control={control} errors={errors}>
          <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Sender details */}
            <S.FormGroup>
              <S.FormGroupTitle>Bill From</S.FormGroupTitle>
              <Input
                label="Street Address"
                {...register('sender.street', {
                  required: true,
                })}
                error={errors.sender && errors.sender.street}
              />
              <S.InputGroup>
                <Input
                  label="City"
                  error={errors.sender && errors.sender.city}
                  {...register('sender.city', {
                    required: true,
                  })}
                />
                <Input
                  label="Post Code"
                  error={errors.sender && errors.sender.postCode}
                  {...register('sender.postCode', {
                    required: true,
                  })}
                />
                <Input
                  label="Country"
                  error={errors.sender && errors.sender.country}
                  {...register('sender.country', {
                    required: true,
                  })}
                />
              </S.InputGroup>
            </S.FormGroup>
            <S.FormGroup>
              <S.FormGroupTitle>Bill To</S.FormGroupTitle>
              <Input
                label="Client's Name"
                error={errors.receiver && errors.receiver.name}
                {...register('receiver.name', {
                  required: true,
                })}
              />
              <Input
                label="Client's Email"
                error={errors.receiver && errors.receiver.email}
                {...register('receiver.email', {
                  required: true,
                })}
              />
              <Input
                label="Street Address"
                error={errors.receiver && errors.receiver.street}
                {...register('receiver.street', {
                  required: true,
                })}
              />
              <S.InputGroup>
                <Input
                  label="City"
                  error={errors.receiver && errors.receiver.city}
                  {...register('receiver.city', {
                    required: true,
                  })}
                />
                <Input
                  label="Post Code"
                  error={errors.receiver && errors.receiver.postCode}
                  {...register('receiver.postCode', {
                    required: true,
                  })}
                />
                <Input
                  label="Country"
                  error={errors.receiver && errors.receiver.country}
                  {...register('receiver.country', {
                    required: true,
                  })}
                />
              </S.InputGroup>
            </S.FormGroup>
            <S.InvoiceInfoGroup>
              <Input
                type="date"
                label="Invoice Date"
                error={errors.invoice && errors.invoice.date}
                {...register('invoice.date', {
                  required: true,
                })}
              />
              <Controller
                name="invoice.terms"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    error={errors.invoice && errors.invoice.terms}
                    label="Payment Terms"
                    options={[
                      { label: 'Net 1 Day', value: '1' },
                      { label: 'Net 7 Days', value: '7' },
                      { label: 'Net 14 Days', value: '14' },
                      { label: 'Net 30 Days', value: '30' },
                    ]}
                  />
                )}
              />
              <Input
                label="Project Description"
                error={errors.invoice && errors.invoice.description}
                {...register('invoice.description', {
                  required: true,
                })}
              />
            </S.InvoiceInfoGroup>
            <ItemList
              removeItemDisabled={fields.length === 1}
              handleAppendNewItem={handleAppendNewItem}
              handleRemoveItem={handleRemoveItem}
              register={register}
              items={fields}
            />
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
        </FormProvider>
      </S.FormContainer>
    </S.Wrapper>
  );
}

export default Form;
