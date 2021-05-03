import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Input = React.forwardRef(
  (
    { label, id, name, onChange, onBlur, errorLabel, error, ...restProps },
    ref
  ) => {
    return (
      <S.Group>
        <S.Label htmlFor={id} error={error}>
          {label}
        </S.Label>
        <S.Input
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          error={error}
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
