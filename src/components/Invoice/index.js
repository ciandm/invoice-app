import React from 'react';
import { useRouter } from 'next/router';
import Nav from '../shared/Nav';
import * as S from './styled';
import Return from '../shared/Return';
import InvoiceButtons from './InvoiceButtons';
import StatusBar from './StatusBar';
import useWindowSize from '../../hooks/useWindowSize';
import Details from './Details';

function Invoice() {
  const isMobile = useWindowSize() < 767;
  return (
    <>
      <StatusBar isMobile={isMobile} />
      <Details />
    </>
  );
}

export default Invoice;
