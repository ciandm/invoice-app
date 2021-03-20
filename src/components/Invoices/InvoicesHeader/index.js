import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Button from '../../shared/Button';
import useWindowSize from '../../../hooks/useWindowSize';
import { ReactComponent as ArrowDown } from '../../../../public/images/icon-arrow-down.svg';

function InvoicesHeader({ invoiceCount }) {
  const windowSize = useWindowSize();
  return (
    <S.Header>
      <S.Content direction="column">
        <S.Title>Invoices</S.Title>
        <S.Pending>There are {invoiceCount} pending invoices</S.Pending>
      </S.Content>
      <S.Content direction="row">
        <S.FilterWrapper>
          <S.FilterToggle>
            Filter by status <ArrowDown />
          </S.FilterToggle>
          <S.Filters />
        </S.FilterWrapper>
        <Button variation="one">
          {windowSize > 768 ? 'New Invoice' : 'New'}
        </Button>
      </S.Content>
    </S.Header>
  );
}

export default InvoicesHeader;

InvoicesHeader.propTypes = {
  invoiceCount: PropTypes.number.isRequired,
};
