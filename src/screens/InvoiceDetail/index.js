import React from 'react';
import { useRouter } from 'next/router';
import Nav from '../../components/shared/Nav';
import * as S from './styled';
import Return from '../../components/shared/Return/index';

function InvoiceDetail() {
  const router = useRouter();
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <Return handleButtonClick={() => router.push('/')} />
        <S.Content>
          <S.StatusBar>
            <S.StatusTag>Status</S.StatusTag>
            <S.Status>Pending</S.Status>
          </S.StatusBar>
          <S.Details>
            <S.Header>
              <S.IdGroup>
                <S.Id>
                  <S.Hashtag>#</S.Hashtag>
                  XM9141
                </S.Id>
                <S.Label>Graphic Design</S.Label>
              </S.IdGroup>
              <S.Address>
                <S.AddressLine>19 Union Terrace</S.AddressLine>
                <S.AddressLine>London</S.AddressLine>
                <S.AddressLine>E1 3EZ</S.AddressLine>
                <S.AddressLine>United Kingdom</S.AddressLine>
              </S.Address>
            </S.Header>
            <S.InvoiceDetails>
              <S.DateGroup>
                <S.DetailGroup>
                  <S.Label>Invoice Date</S.Label>
                  <S.Title>21 Aug 2021</S.Title>
                </S.DetailGroup>
                <S.DetailGroup>
                  <S.Label>Payment Due</S.Label>
                  <S.Title>20 Sep 2021</S.Title>
                </S.DetailGroup>
              </S.DateGroup>
              <S.DetailGroup>
                <S.Label>Bill To</S.Label>
                <S.Title>Alex Grim</S.Title>
                <S.Address>
                  <S.AddressLine>19 Union Terrace</S.AddressLine>
                  <S.AddressLine>London</S.AddressLine>
                  <S.AddressLine>E1 3EZ</S.AddressLine>
                  <S.AddressLine>United Kingdom</S.AddressLine>
                </S.Address>
              </S.DetailGroup>
              <S.DetailGroup>
                <S.Label>Sent To</S.Label>
                <S.Title>alexgrim@mail.com</S.Title>
              </S.DetailGroup>
            </S.InvoiceDetails>
          </S.Details>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}

export default InvoiceDetail;
