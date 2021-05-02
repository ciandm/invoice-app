import React from 'react';
import PropTypes from 'prop-types';
import InvoiceButtons from '../InvoiceButtons';
import * as S from '../styled';

const StatusBar = ({ isMobile, status }) => {
  return (
    <S.StatusBar>
      <S.StatusGroup>
        <S.StatusTag>Status</S.StatusTag>
        <S.Status status={status}>
          {status === 'pending'
            ? 'Pending'
            : status === 'paid'
            ? 'Paid'
            : 'Draft'}
        </S.Status>
      </S.StatusGroup>
      {isMobile ? null : <InvoiceButtons />}
    </S.StatusBar>
  );
};

export default StatusBar;

StatusBar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(['pending', 'draft', 'paid']),
};
