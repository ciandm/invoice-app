import React from 'react';
import Item from '../Item';
import * as S from './styled';
import Button from '../../shared/Button';

function ItemList() {
  return (
    <S.Container>
      <S.Title>Item List</S.Title>
      <S.Items>
        <Item />
      </S.Items>
      <Button variation="one">Add New Item</Button>
    </S.Container>
  );
}

export default ItemList;
