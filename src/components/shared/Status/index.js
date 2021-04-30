import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Status = ({ status }) => {
  return <S.Status status={status}>{status}</S.Status>;
};

export default Status;

Status.propTypes = {
  status: PropTypes.oneOf(['paid', 'pending', 'draft']),
};
