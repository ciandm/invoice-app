import React from 'react';
import * as S from './styled';
import Nav from '../../components/Nav';

function InvoicesHome({ children }) {
  return (
    <S.Container>
      <Nav />
    </S.Container>
  );
}

export default InvoicesHome;
