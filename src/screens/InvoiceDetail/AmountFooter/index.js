import React from 'react';
import * as S from '../styled';
import useWindowSize from '../../../hooks/useWindowSize';

const AmountFooterLarge = ({ items, totalAmount }) => {
  return (
    <S.Footer>
      <S.ItemList>
        <S.ItemGridRow>
          <S.TableHeader>Item Name</S.TableHeader>
          <S.TableHeader>Qty.</S.TableHeader>
          <S.TableHeader>Price</S.TableHeader>
          <S.TableHeader>Total</S.TableHeader>
        </S.ItemGridRow>
        {items.map((i, index) => (
          <S.ItemGridRow key={index}>
            <S.ItemTitle>{i.name}</S.ItemTitle>
            <S.ItemQuantity>{i.quantity}</S.ItemQuantity>
            <S.ItemPrice>£ {i.price.toFixed(2)}</S.ItemPrice>
            <S.ItemAmount>
              £ {`${(i.price * i.quantity).toFixed(2)}`}
            </S.ItemAmount>
          </S.ItemGridRow>
        ))}
      </S.ItemList>
    </S.Footer>
  );
};

const AmountFooterSmall = ({ items, totalAmount }) => {
  return (
    <S.Footer>
      <S.ItemList>
        {items.map((i, index) => (
          <S.Item key={index}>
            <S.ItemGroup>
              <S.ItemTitle>{i.name}</S.ItemTitle>
              <S.ItemQuantity>{`${i.quantity} x £${i.price.toFixed(
                2
              )}`}</S.ItemQuantity>
            </S.ItemGroup>
            <S.ItemAmount>
              £ {`${(i.price * i.quantity).toFixed(2)}`}
            </S.ItemAmount>
          </S.Item>
        ))}
      </S.ItemList>
      <S.AmountDue>
        <S.AmountSpan>Amount Due</S.AmountSpan>
        <S.AmountTotal>£ {totalAmount.toFixed(2)} </S.AmountTotal>
      </S.AmountDue>
    </S.Footer>
  );
};

const AmountFooter = ({ items }) => {
  const totalAmount = items.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);
  const isTablet = useWindowSize() > 767;
  if (isTablet) {
    return <AmountFooterLarge items={items} totalAmount={totalAmount} />;
  }
  return <AmountFooterSmall items={items} totalAmount={totalAmount} />;
};

export default AmountFooter;