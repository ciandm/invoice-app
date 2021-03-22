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
}

export default Button;

Button.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  variation: PropTypes.oneOf(['one', 'two', 'three', 'four', 'five', 'six'])
    .isRequired,
};
