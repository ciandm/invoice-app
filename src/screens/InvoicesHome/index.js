import React, { useState } from 'react';
import * as S from './styled';
import Nav from '../../components/shared/Nav';
import InvoiceList from '../../components/Invoices/InvoiceList';
import Invoices from '../../components/Invoices';
import InvoicesHeader from '../../components/Invoices/InvoicesHeader/index';
import InvoiceEmpty from '../../components/Invoices/InvoiceEmpty';

function InvoicesHome({ invoices }) {
  const [activeFilters, setActiveFilters] = useState({
    draft: false,
    paid: false,
    pending: false,
  });
  const handleCheckboxClick = filterName => {
    setActiveFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };
  return (
    <S.Container>
      <Nav />
      <Invoices>
        <InvoicesHeader
          activeFilters={activeFilters}
          handleCheckboxClick={handleCheckboxClick}
          invoiceCount={invoices.length || 0}
        />
        {invoices.length > 0 || !invoices ? (
          <>
            <InvoiceList activeFilters={activeFilters} invoices={invoices} />
          </>
        ) : (
          <InvoiceEmpty />
        )}
      </Invoices>
    </S.Container>
  );
}

export default InvoicesHome;
