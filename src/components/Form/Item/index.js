import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Input from '../../shared/Input';
import { ReactComponent as RemoveIcon } from '../../../../public/images/icon-delete.svg';

function Item({
  id,
  name,
  price,
  quantity,
  handleItemInputChange,
  handleRemoveItem,
  removeItemDisabled,
  register,
}) {
  console.log(id);
  const handleInput = e => {
    handleItemInputChange(e, id);
  };
  return (
    <S.Item>
      <Input
        label="Item Name"
        {...register(`items[${id}]name`, {
          required: true,
        })}
      />
      <Input
        label="Qty."
        {...register(`items[${id}]quantity`, {
          required: true,
        })}
      />
      <Input
        label="Price"
        {...register(`items[${id}]price`, {
          required: true,
        })}
      />
      <S.TotalContainer>
        <S.Label>Total</S.Label>
        <S.Total>{(price * quantity).toFixed(2)}</S.Total>
      </S.TotalContainer>
      <S.Remove
        type="button"
        disabled={removeItemDisabled}
        onClick={() => handleRemoveItem(id)}
      >
        <RemoveIcon />
      </S.Remove>
    </S.Item>
  );
}

export default Item;

Item.propTypes = {
  handleItemInputChange: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  removeItemDisabled: PropTypes.bool.isRequired,
};
