import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import InvoiceCard from '../InvoiceCard';

function InvoiceList({ activeFilters, invoices }) {
  return (
    <S.InvoiceList>
      {invoices
        .filter(i => {
          // if there are no filters applied, return i
          if (
            !activeFilters.draft &&
            !activeFilters.paid &&
            !activeFilters.pending
          ) {
            return i;
          }
          // check which filters are applied if no filters condition fails
          return (
            (activeFilters.draft && i.status === 'draft') ||
            (activeFilters.paid && i.status === 'paid') ||
            (activeFilters.pending && i.status === 'pending')
          );
        })
        .map(i => (
          <InvoiceCard key={i._id} id={i._id} {...i} />
        ))}
    </S.InvoiceList>
  );
}

export default InvoiceList;

InvoiceList.propTypes = {
  activeFilters: PropTypes.shape({
    draft: PropTypes.bool,
    paid: PropTypes.bool,
    pending: PropTypes.bool,
  }).isRequired,
};
