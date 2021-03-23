import React from 'react';
import * as S from './styled';
import Input from '../../shared/Input';
import { ReactComponent as RemoveIcon } from '../../../../public/images/icon-delete.svg';

function Item({ id, name, price, quantity, handleItemInputChange }) {
  const handleInput = e => {
    handleItemInputChange(e, id);
  };
  return (
    <S.Item>
      <Input
        label="Item Name"
        id="name"
        data-value-group="items"
        value={name}
        name="name"
        handleInputChange={handleInput}
      />
      <Input
        label="Qty."
        id="quantity"
        data-value-group="items"
        value={quantity}
        name="quantity"
        handleInputChange={handleInput}
      />
      <Input
        label="Price"
        id="price"
        data-value-group="items"
        value={price}
        name="price"
        handleInputChange={handleInput}
      />
      <S.TotalContainer>
        <S.Label>Total</S.Label>
        <S.Total>400.00</S.Total>
      </S.TotalContainer>
      <S.Remove type="button">
        <RemoveIcon />
      </S.Remove>
    </S.Item>
  );
}

export default Item;
