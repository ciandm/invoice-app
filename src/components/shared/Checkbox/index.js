import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { ReactComponent as CheckMark } from '../../../../public/images/icon-check.svg';

function Checkbox({ name, label, checked, handleCheckboxClick }) {
  return (
    <S.Wrapper onClick={() => handleCheckboxClick(name)}>
      <S.HiddenCheckbox
        name={name}
        checked={checked}
        onChange={() => handleCheckboxClick(name)}
      />
      <S.Checkbox name={name} checked={checked}>
        {checked ? <CheckMark /> : null}
      </S.Checkbox>
      <S.Label htmlFor={name}>{label}</S.Label>
    </S.Wrapper>
  );
}

export default Checkbox;

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
