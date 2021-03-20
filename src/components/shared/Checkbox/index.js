import React from 'react';
import * as S from './styled';

function Checkbox({ name, label, checked, handleCheckboxClick }) {
  return (
    <S.Wrapper onClick={() => handleCheckboxClick(name)}>
      <S.HiddenCheckbox name={name} checked={checked} />
      <S.Checkbox name={name} checked={checked} />
      <S.Label htmlFor={name}>{label}</S.Label>
    </S.Wrapper>
  );
}

export default Checkbox;
