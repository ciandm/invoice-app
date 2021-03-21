import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function Input({ label, id, value, name, handleInputChange, ...restProps }) {
  return (
    <S.Group>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        id={id}
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
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
