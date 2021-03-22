import React from 'react';
import * as S from './styled';
import Input from '../../shared/Input';
import { ReactComponent as RemoveIcon } from '../../../../public/images/icon-delete.svg';

function Item() {
  return (
    <S.Item>
      <Input label="Item Name" />
      <Input label="Qty." />
      <Input label="Price" />
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
