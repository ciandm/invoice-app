import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { ReactComponent as ArrowRight } from '../../../../public/images/icon-arrow-right.svg';

function InvoiceCard() {
  return (
    <S.Container>
      <S.Id>
        <S.Hashtag>#</S.Hashtag>
        ieiee
      </S.Id>
      <S.Name>Jensen Huang</S.Name>
      <S.Date>Due 19 Aug 2021</S.Date>
      <S.Price>£1,800.90</S.Price>
      <S.Status status="paid">Paid</S.Status>
      <S.Arrow>
        <ArrowRight />
      </S.Arrow>
    </S.Container>
  );
}

export default InvoiceCard;
