import React, { useState } from 'react';
import * as S from './styled';
import { ReactComponent as ArrowLeft } from '../../../public/images/icon-arrow-left.svg';
import Input from '../shared/Input';
import useWindowSize from '../../hooks/useWindowSize';

function Form({ toggleNewInvoice }) {
  const windowSize = useWindowSize();
  const [values, setValues] = useState({
    invoice: {
      date: undefined,
      description: '',
      terms: undefined,
    },
    items: [
      {
        id: undefined,
        name: '',
        price: undefined,
        quantity: undefined,
        total: undefined,
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

  return (
    <S.Wrapper>
      {windowSize > 768 && <S.Overlay onClick={() => toggleNewInvoice()} />}
      <S.Form>
        {windowSize < 768 ? (
          <S.Return onClick={() => toggleNewInvoice()}>
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
            value={values.sender.street}
          />
          <S.InputGroup>
            <Input
              label="City"
              name="city"
              handleInputChange={handleInputChange}
              data-value-group="sender"
              value={values.sender.city}
            />
            <Input
              label="Post Code"
              name="postCode"
              handleInputChange={handleInputChange}
              data-value-group="sender"
              value={values.sender.postCode}
            />
            <Input
              label="Country"
              name="country"
              handleInputChange={handleInputChange}
              data-value-group="sender"
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
            value={values.receiver.name}
          />
          <Input
            label="Client's Email"
            name="email"
            handleInputChange={handleInputChange}
            data-value-group="receiver"
            value={values.receiver.email}
          />
          <Input
            label="Street Address"
            name="address"
            handleInputChange={handleInputChange}
            data-value-group="receiver"
            value={values.receiver.street}
          />
          <S.InputGroup>
            <Input
              label="City"
              name="city"
              handleInputChange={handleInputChange}
              data-value-group="receiver"
              value={values.receiver.city}
            />
            <Input
              label="Post Code"
              name="postCode"
              handleInputChange={handleInputChange}
              data-value-group="receiver"
              value={values.receiver.postCode}
            />
            <Input
              label="Country"
              name="country"
              handleInputChange={handleInputChange}
              data-value-group="receiver"
              value={values.receiver.country}
            />
          </S.InputGroup>
        </S.FormGroup>
      </S.Form>
    </S.Wrapper>
  );
}

export default Form;
