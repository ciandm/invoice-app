import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: stretch;
  background-color: ${({ theme }) =>
    theme.dark
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.ebonyClay};
  display: flex;
  justify-content: space-between;
  z-index: 1000;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    border-radius: 0 2rem 2rem 0;
    flex-direction: column;
    height: 100vh;
    position: fixed;
  }
`;

export const LogoContainer = styled.div`
  border-radius: 0 2rem 2rem 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 2.4rem;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  &::before {
    background-color: ${({ theme }) => theme.constants.colors.cornflowerBlue};
    top: 0;
  }

  &::after {
    background-color: ${({ theme }) => theme.constants.colors.heliotrope};
    border-top-left-radius: 2rem;
    top: 50%;
  }

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    padding: 3.2rem;
  }
`;

export const Logo = styled.img`
  height: 2.6rem;
  width: 2.8rem;
  z-index: 1;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    height: auto;
    width: 4rem;
  }
`;

export const Profile = styled.div`
  align-items: center;
  align-self: stretch;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: min-content 1px min-content;
  padding-right: 2.4rem;
  position: relative;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1px min-content;
    justify-items: center;
    padding-bottom: 2.4rem;
    padding-right: 0;
  }
`;

export const Toggle = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  & svg {
    height: 2rem;
    width: 2rem;
  }

  &:hover svg path {
    fill: ${({ theme }) => theme.constants.colors.selago};
  }
`;

export const Separator = styled.span`
  background-color: ${({ theme }) => theme.constants.colors.shipCove};
  height: 100%;
  width: 1px;

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    height: 1px;
    width: 100%;
  }
`;

export const Picture = styled.img`
  border-radius: 50px;
  height: 3.2rem;
  width: 3.2rem;
`;
