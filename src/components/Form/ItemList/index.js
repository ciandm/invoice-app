import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import * as S from './styled';
import Button from '../../shared/Button';

function ItemList({
  items,
  handleItemInputChange,
  handleRemoveItem,
  handleAddNewItem,
  removeItemDisabled,
  register,
}) {
  console.log(items);
  return (
    <S.Container>
      <S.Title>Item List</S.Title>
      <S.Items>
        {items &&
          items.map(item => (
            <Item
              key={item.id}
              {...item}
              handleItemInputChange={handleItemInputChange}
              handleRemoveItem={handleRemoveItem}
              removeItemDisabled={removeItemDisabled}
              register={register}
            />
          ))}
      </S.Items>
      <Button
        handleButtonClick={handleAddNewItem}
        type="button"
        variation="one"
      >
        Add New Item
      </Button>
    </S.Container>
  );
}

export default ItemList;

ItemList.propTypes = {
  handleAddNewItem: PropTypes.func.isRequired,
  handleItemInputChange: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.string,
    })
  ).isRequired,
  removeItemDisabled: PropTypes.bool.isRequired,
};
