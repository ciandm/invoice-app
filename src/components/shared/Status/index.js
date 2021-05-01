import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Status = ({ status, margin }) => {
  return (
    <S.Status status={status} margin={margin}>
      {status}
    </S.Status>
  );
};

export default Status;

Status.propTypes = {
  margin: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(['paid', 'pending', 'draft']).isRequired,
};
