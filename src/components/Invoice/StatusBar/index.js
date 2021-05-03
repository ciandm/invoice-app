import React from 'react';
import PropTypes from 'prop-types';
import InvoiceButtons from '../InvoiceButtons';
import * as S from '../styled';

const StatusBar = ({ isMobile, status, handleMarkAsPaid }) => {
  return (
    <S.StatusBar>
      <S.StatusGroup>
        <S.StatusTag>Status</S.StatusTag>
        <S.Status status={status}>
          {status === 'paid'
            ? 'Paid'
            : status === 'pending'
            ? 'Pending'
            : 'Draft'}
        </S.Status>
      </S.StatusGroup>
      {isMobile ? null : <InvoiceButtons handleMarkAsPaid={handleMarkAsPaid} />}
    </S.StatusBar>
  );
};

export default StatusBar;

StatusBar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(['pending', 'draft', 'paid']),
};
