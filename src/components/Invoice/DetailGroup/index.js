import React from 'react';
import * as S from '../styled';

const DetailGroup = ({ label, title }) => {
  return (
    <S.DetailGroup>
      <S.Label>{label}</S.Label>
      <S.Title>{title}</S.Title>
    </S.DetailGroup>
  );
};

export default DetailGroup;
