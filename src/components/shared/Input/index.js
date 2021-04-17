import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Input = React.forwardRef(
  ({ label, id, name, onChange, onBlur, ...restProps }, ref) => {
    return (
      <S.Group>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          {...restProps}
        />
      </S.Group>
    );
  }
);

export default Input;

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
