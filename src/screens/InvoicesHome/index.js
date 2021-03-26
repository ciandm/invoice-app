import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Nav from '../../components/shared/Nav';
import InvoiceList from '../../components/Invoices/InvoiceList';
import invoices from '../../../data/data.json';
import Invoices from '../../components/Invoices';
import InvoicesHeader from '../../components/Invoices/InvoicesHeader/index';
import InvoiceEmpty from '../../components/Invoices/InvoiceEmpty';

function InvoicesHome({ toggleInvoiceForm, invoiceFormShown }) {
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
          toggleInvoiceForm={toggleInvoiceForm}
          activeFilters={activeFilters}
          handleCheckboxClick={handleCheckboxClick}
          invoiceCount={invoices.length || 0}
        />
        {invoices.length > 0 || !invoices ? (
          <>
            <InvoiceList
              activeFilters={activeFilters}
              invoices={invoices}
              invoiceFormShown={invoiceFormShown}
            />
          </>
        ) : (
          <InvoiceEmpty />
        )}
      </Invoices>
    </S.Container>
  );
}

export default InvoicesHome;

InvoicesHome.propTypes = {
  invoiceFormShown: PropTypes.bool,
  toggleInvoiceForm: PropTypes.func.isRequired,
};
