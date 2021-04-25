import React, { useEffect, useCallback, useRef } from 'react';
import {
  useForm,
  Controller,
  useFieldArray,
  FormProvider,
} from 'react-hook-form';
import * as S from './styled';
import { ReactComponent as ArrowLeft } from '../../../public/images/icon-arrow-left.svg';
import Input from '../shared/Input';
import useWindowSize from '../../hooks/useWindowSize';
import Select from '../shared/Select';
import ItemList from './ItemList';
import generateInvoiceNumber from '../../../utils/generateInvoiceNumber';
import Button from '../shared/Button';
import { useInvoiceContext } from '../../contexts/InvoiceContext';

function Form() {
  const windowSize = useWindowSize();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();
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
    formShown,
    handleSetNewFormId,
    handleShowForm,
  } = useInvoiceContext();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      append({
        id: generateInvoiceNumber(),
        name: '',
        price: '',
        quantity: '',
      });
      isMounted.current = true;
    }
  }, [append]);

  // set as default value after form has mounted
  useEffect(() => {
    setTimeout(() => {
      setValue('invoice.terms', { label: 'Net 1 Day', value: '1' });
    }, [1000]);
    // eslint-disable-next-line
  }, []);

  const handleDiscardInvoice = () => {
    reset();
    append({
      id: generateInvoiceNumber(),
      name: '',
      price: '',
      quantity: '',
    });
    setValue('invoice.terms', { label: 'Net 1 Day', value: '1' });
    handleShowForm();
  };

  const handleFormSubmit = data => {
    console.log(data);
  };

  return (
    <S.Wrapper shown={formShown}>
      {windowSize > 768 && (
        <S.Overlay shown={formShown} onClick={() => handleShowForm()} />
      )}
      <S.FormContainer shown={formShown}>
        {windowSize < 768 ? (
          <S.Return onClick={() => handleShowForm()}>
            <ArrowLeft /> Go back
          </S.Return>
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
                error={errors.receiver && errors.receiver.address}
                {...register('receiver.address', {
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
