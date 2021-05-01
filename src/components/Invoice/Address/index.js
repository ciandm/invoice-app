import React from 'react';
import * as S from '../styled';

const Address = ({ address }) => {
  return (
    <S.Address>
      {address.map((line, index) => (
        <S.AddressLine key={index}>{line}</S.AddressLine>
      ))}
    </S.Address>
  );
};

export default Address;
