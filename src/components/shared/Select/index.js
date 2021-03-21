import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { ReactComponent as ArrowDown } from '../../../../public/images/icon-arrow-down.svg';

function Select({
  label,
  options,
  handleSelectClick,
  valuesName,
  valuesGroup,
  value,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const openSelect = () => {
    setIsOpen(true);
  };
  const closeSelect = e => {
    // only if focus leaves element or it's children
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };
  const handleClick = option => {
    handleSelectClick(valuesGroup, valuesName, option);
    setIsOpen(false);
  };

  return (
    <S.Group>
      <S.SelectContainer
        onFocus={() => openSelect()}
        onBlur={e => closeSelect(e)}
      >
        <S.Label onClick={() => selectRef.current.focus()}>{label}</S.Label>
        <S.Select tabIndex={0} ref={selectRef}>
          {value || 'Select option'} <ArrowDown />
        </S.Select>
        <S.Options open={isOpen}>
          {options &&
            options.map(option => (
              <S.Option
                tabIndex={0}
                key={option}
                onClick={() => handleClick(option)}
              >
                {option}
              </S.Option>
            ))}
        </S.Options>
      </S.SelectContainer>
    </S.Group>
  );
}

export default Select;

Select.propTypes = {
  handleSelectClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  valuesGroup: PropTypes.oneOf(['invoice', 'receiver', 'sender']).isRequired,
  valuesName: PropTypes.string.isRequired,
};
