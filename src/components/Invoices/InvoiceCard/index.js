import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import * as S from './styled';
import { ReactComponent as ArrowRight } from '../../../../public/images/icon-arrow-right.svg';

function InvoiceCard({ clientName, id, paymentDue, status, total }) {
  return (
    <Link href={`/${id}`} passHref>
      <S.Card>
        <S.Id>
          <S.Hashtag>#</S.Hashtag>
          {id}
        </S.Id>
        <S.Name>{clientName}</S.Name>
        <S.Date>Due 19 Aug 2021</S.Date>
        <S.Price>£ {total.toFixed(2)}</S.Price>
        <S.Group>
          <S.Status status={status}>
            {status === 'paid'
              ? 'Paid'
              : status === 'pending'
              ? 'Pending'
              : 'Draft'}
          </S.Status>
          <S.Arrow>
            <ArrowRight />
          </S.Arrow>
        </S.Group>
      </S.Card>
    </Link>
  );
}

export default InvoiceCard;
