import React from 'react';
import { useInvoiceContext } from '../../../contexts/InvoiceContext';
import * as S from './styled';
import { ReactComponent as ArrowLeft } from '../../../../public/images/icon-arrow-left.svg';

const Return = () => {
  const { handleShowForm } = useInvoiceContext();
  return (
    <S.Return onClick={() => handleShowForm()}>
      <ArrowLeft /> Go back
    </S.Return>
  );
};

export default Return;
