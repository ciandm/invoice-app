import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import * as S from './styled';
import { ReactComponent as ArrowRight } from '../../../../public/images/icon-arrow-right.svg';
import Status from '../../shared/Status';

function InvoiceCard({ clientName, id, paymentDue, status, total }) {
  const getDateWords = d => {
    const date = new Date(d);
    date.toString();
    return date
      .toString()
      .split(' ')
      .slice(1, 4)
      .join(' ');
  };
  return (
    <Link href={`/${id}`} passHref>
      <S.Card>
        <S.Id>
          <S.Hashtag>#</S.Hashtag>
          {id}
        </S.Id>
        <S.Name>{clientName}</S.Name>
        <S.Date>Due {getDateWords(paymentDue)}</S.Date>
        <S.Price>£ {total.toFixed(2)}</S.Price>
        <S.Group>
          <Status status={status} margin />
          <S.Arrow>
            <ArrowRight />
          </S.Arrow>
        </S.Group>
      </S.Card>
    </Link>
  );
}

export default InvoiceCard;
