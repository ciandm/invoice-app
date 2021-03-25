import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { ReactComponent as PlusIcon } from '../../../../public/images/icon-plus.svg';

function Button({ variation, children, handleButtonClick, type }) {
  if (variation === 'one') {
    return (
      <S.ButtonOne type={type} onClick={() => handleButtonClick()}>
        <S.Icon>
          <PlusIcon />
        </S.Icon>{' '}
        {children}
      </S.ButtonOne>
    );
  }
  if (variation === 'two') {
    return (
      <S.ButtonTwo type={type} onClick={() => handleButtonClick()}>
        {children}
      </S.ButtonTwo>
    );
  }
  if (variation === 'three') {
    return (
      <S.ButtonThree type={type} onClick={() => handleButtonClick()}>
        {children}
      </S.ButtonThree>
    );
  }
  if (variation === 'four') {
    return (
      <S.ButtonFour type={type} onClick={() => handleButtonClick()}>
        {children}
      </S.ButtonFour>
    );
  }
  if (variation === 'five') {
    return (
      <S.ButtonFive type={type} onClick={() => handleButtonClick()}>
        {children}
      </S.ButtonFive>
    );
  }
  if (variation === 'six') {
    return (
      <S.ButtonSix type={type} onClick={() => handleButtonClick()}>
        <S.Icon>
          <PlusIcon />
        </S.Icon>{' '}
        {children}
      </S.ButtonSix>
    );
  }
}

export default Button;

Button.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  variation: PropTypes.oneOf(['one', 'two', 'three', 'four', 'five', 'six'])
    .isRequired,
};
