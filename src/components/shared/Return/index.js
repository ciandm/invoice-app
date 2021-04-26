import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { ReactComponent as ArrowLeft } from '../../../../public/images/icon-arrow-left.svg';

const Return = ({ handleButtonClick }) => {
  return (
    <S.Return onClick={() => handleButtonClick()}>
      <ArrowLeft /> Go back
    </S.Return>
  );
};

export default Return;

Return.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};
