import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) =>
    theme.dark
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.ebonyClay};
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 7.2rem;
  width: 7.2rem;
`;

export const Profile = styled.div`
  display: grid;
  gap: 4.8rem;
  grid-template-columns: min-content min-content;
`;

export const Toggle = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

export const Picture = styled.img`
  height: 3.2rem;
  width: 3.2rem;
`;
