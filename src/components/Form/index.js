import React, { useState } from 'react';
import * as S from './styled';
import { ReactComponent as ArrowLeft } from '../../../public/images/icon-arrow-left.svg';
import Input from '../shared/Input';

function Form({ toggleNewInvoice }) {
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
    <S.Form>
      <S.Return onClick={() => toggleNewInvoice()}>
        <ArrowLeft /> Go back
      </S.Return>
      <S.Title>New invoices</S.Title>
      <S.FormGroup>
        <S.FormGroupTitle>Bill From</S.FormGroupTitle>
        <S.FormGroup>
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
      </S.FormGroup>
    </S.Form>
  );
}

export default Form;
