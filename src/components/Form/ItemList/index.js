import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import * as S from './styled';
import Button from '../../shared/Button';

function ItemList({
  handleAppendNewItem,
  handleRemoveItem,
  items,
  removeItemDisabled,
  register,
}) {
  return (
    <S.Container>
      <S.Title>Item List</S.Title>
      <S.Items>
        {items &&
          items.map((item, index) => (
            <Item
              key={item.id}
              index={index}
              {...item}
              removeItemDisabled={removeItemDisabled}
              handleRemoveItem={handleRemoveItem}
              register={register}
            />
          ))}
      </S.Items>
      <Button
        type="button"
        variation="one"
        handleButtonClick={handleAppendNewItem}
      >
        Add New Item
      </Button>
    </S.Container>
  );
}

export default ItemList;

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.string,
    })
  ).isRequired,
  removeItemDisabled: PropTypes.bool.isRequired,
};
