import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function Input({ label, value, name, handleInputChange, ...restProps }) {
  return (
    <S.Group>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        id={name}
        name={name}
        onChange={e => handleInputChange(e.target)}
        value={value}
        {...restProps}
      />
    </S.Group>
  );
}

export default Input;

Input.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
