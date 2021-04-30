import React from 'react';
import InvoiceButtons from '../InvoiceButtons';
import * as S from '../styled';

const StatusBar = ({ isMobile }) => {
  return (
    <S.StatusBar>
      <S.StatusGroup>
        <S.StatusTag>Status</S.StatusTag>
        <S.Status>Pending</S.Status>
      </S.StatusGroup>
      {isMobile ? null : <InvoiceButtons />}
    </S.StatusBar>
  );
};

export default StatusBar;
