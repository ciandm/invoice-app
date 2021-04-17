import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import * as S from './styled';
import { ReactComponent as ArrowDown } from '../../../../public/images/icon-arrow-down.svg';
import theme from '../../../theme/theme';
import { useTheme } from '../../../../pages/_app';

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
  const { darkMode } = useTheme();

  const customSelectStyles = {
    container: provided => ({
      ...provided,
      display: 'flex',
      height: '100%',
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: darkMode
        ? state.selectProps.colorBlackPearl
        : state.selectProps.colorWhite,
      border: `1px solid ${
        darkMode
          ? state.selectProps.colorEbonyClay
          : state.selectProps.colorSelago
      }`,
      borderRadius: '4px',
      color: darkMode
        ? state.selectProps.colorWhite
        : state.selectProps.colorChartreuseYellow,
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '-0.25px',
      lineHeight: '15px',
      width: '100%',
      // eslint-disable-next-line
      '&:hover': {
        borderColor: state.selectProps.colorCornflowerBlue,
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: darkMode
        ? state.selectProps.colorEbonyClay
        : state.selectProps.white,
      borderRadius: '0.8rem',
      boxShadow: darkMode
        ? '0px 10px 20px rgba(0, 0, 0, 0.25)'
        : '0px 10px 20px rgba(72, 84, 159, 0.25)',
      width: '100%;',
    }),
    option: (provided, state) => ({
      ...provided,
      color: darkMode
        ? state.selectProps.colorWhite
        : state.selectProps.colorChartreuseYellow,
      fontWeight: '700',
      padding: '1.6rem 2.4rem',
      // eslint-disable-next-line
      '& + &': {
        borderTop: darkMode
          ? `1px solid ${state.selectProps.colorEbonyClay}`
          : `1px solid ${state.selectProps.selago}`,
      },
    }),
  };

  return (
    <S.SelectContainer>
      <S.Label onClick={() => selectRef.current.focus()}>{label}</S.Label>
      <ReactSelect
        ref={selectRef}
        open={isOpen}
        options={options}
        isSearchable={false}
        styles={customSelectStyles}
        colorBlackPearl="hsl(233, 31%, 17%)"
        colorCornflowerBlue="hsl(252, 94%, 67%)"
        colorWhite="hsl(255, 100%, 100%)"
        colorChartreuseYellow="hsl(228, 29%, 7%)"
        colorEbonyClay="hsl(233, 30%, 21%)"
        colorSelago="hsl(231, 73%, 93%)"
      />
    </S.SelectContainer>
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
