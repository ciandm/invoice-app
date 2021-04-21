import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import * as S from './styled';
import { useTheme } from '../../../../pages/_app';

const Select = React.forwardRef(
  ({ label, options, error, ...restProps }, ref) => {
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
          error
            ? state.selectProps.colorBurntSienna
            : darkMode
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
        zIndex: '100',
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        borderTop: darkMode
          ? `1px solid ${state.selectProps.colorBlackPearl}`
          : `1px solid ${state.selectProps.colorSelago}`,
        color: state.isSelected
          ? state.selectProps.colorCornflowerBlue
          : darkMode
          ? state.selectProps.colorWhite
          : state.selectProps.colorChartreuseYellow,
        cursor: 'pointer',
        fontWeight: '700',
        padding: '1.6rem 2.4rem',
        // eslint-disable-next-line
      '&:hover' : {
          backgroundColor: 'transparent',
          color: state.selectProps.colorCornflowerBlue,
        },
        // eslint-disable-next-line
      '&:first-of-type': {
          borderTop: 'none',
        },
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: darkMode
          ? state.selectProps.colorWhite
          : state.selectProps.colorChartreuseYellow,
      }),
    };

    return (
      <S.SelectContainer>
        <S.Label>{label}</S.Label>
        <ReactSelect
          ref={ref}
          options={options}
          isSearchable={false}
          styles={customSelectStyles}
          colorBlackPearl="hsl(233, 31%, 17%)"
          colorCornflowerBlue="hsl(252, 94%, 67%)"
          colorWhite="hsl(255, 100%, 100%)"
          colorChartreuseYellow="hsl(228, 29%, 7%)"
          colorEbonyClay="hsl(233, 30%, 21%)"
          colorSelago="hsl(231, 73%, 93%)"
          colorBurntSienna="hsl(0, 80%, 63%)"
          {...restProps}
        />
      </S.SelectContainer>
    );
  }
);

export default Select;

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
};
