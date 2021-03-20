import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Button from '../../shared/Button';
import useWindowSize from '../../../hooks/useWindowSize';
import { ReactComponent as ArrowDown } from '../../../../public/images/icon-arrow-down.svg';
import Checkbox from '../../shared/Checkbox';

function InvoicesHeader({ activeFilters, handleCheckboxClick, invoiceCount }) {
  const windowSize = useWindowSize();
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <S.Header>
      <S.Content direction="column">
        <S.Title>Invoices</S.Title>
        <S.Pending>There are {invoiceCount} pending invoices</S.Pending>
      </S.Content>
      <S.Content direction="row">
        <S.FilterWrapper
          onMouseEnter={() => setFiltersOpen(true)}
          onMouseLeave={() => setFiltersOpen(false)}
        >
          <S.FilterToggle open={filtersOpen}>
            {windowSize > 768 ? 'Filter by size' : 'Filter'} <ArrowDown />
          </S.FilterToggle>
          {filtersOpen ? (
            <S.Filters open={filtersOpen}>
              <S.Filter>
                <Checkbox
                  checked={activeFilters.draft}
                  name="draft"
                  handleCheckboxClick={handleCheckboxClick}
                  label="Draft"
                />
              </S.Filter>
              <S.Filter>
                <Checkbox
                  checked={activeFilters.pending}
                  name="pending"
                  handleCheckboxClick={handleCheckboxClick}
                  label="Pending"
                />
              </S.Filter>
              <S.Filter>
                <Checkbox
                  checked={activeFilters.paid}
                  name="paid"
                  handleCheckboxClick={handleCheckboxClick}
                  label="Paid"
                />
              </S.Filter>
            </S.Filters>
          ) : null}
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
  activeFilters: PropTypes.shape({
    draft: PropTypes.bool,
    paid: PropTypes.bool,
    pending: PropTypes.bool,
  }).isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  invoiceCount: PropTypes.number.isRequired,
};
