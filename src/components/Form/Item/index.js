import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext, useWatch } from 'react-hook-form';
import * as S from './styled';
import Input from '../../shared/Input';
import { ReactComponent as RemoveIcon } from '../../../../public/images/icon-delete.svg';

const Total = ({ control, index }) => {
  const value = useWatch({
    control,
    name: `items[${index}]`,
  });
  return ((value.quantity || 0) * (value.price || 0)).toFixed(2);
};

function Item({ handleRemoveItem, removeItemDisabled, index }) {
  const { register, control, errors } = useFormContext();
  return (
    <S.Item>
      <Input
        label="Item Name"
        {...register(`items[${index}].name`, {
          required: true,
        })}
        error={errors?.items?.[index]?.name}
      />
      <Input
        label="Qty."
        {...register(`items[${index}].quantity`, {
          required: true,
        })}
        error={errors?.items?.[index]?.quantity}
      />
      <Input
        label="Price"
        {...register(`items[${index}].price`, {
          required: true,
        })}
        error={errors?.items?.[index]?.price}
      />
      <S.TotalContainer>
        <S.Label>Total</S.Label>
        <S.Total>
          <Total control={control} index={index} />
        </S.Total>
      </S.TotalContainer>
      <S.Remove
        type="button"
        disabled={removeItemDisabled}
        onClick={() => handleRemoveItem(index)}
      >
        <RemoveIcon />
      </S.Remove>
    </S.Item>
  );
}

export default Item;

Item.propTypes = {
  handleRemoveItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  removeItemDisabled: PropTypes.bool.isRequired,
};
