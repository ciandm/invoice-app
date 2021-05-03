import styled from 'styled-components';

export const Buttons = styled.div`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  bottom: 0;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 2rem 2.4rem;
  position: absolute;
  width: 100%;
  z-index: 500;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    border-radius: 0 2rem 2rem 0;
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: max-content max-content;
  margin-left: ${({ alignRight }) => (alignRight ? 'auto' : '')};
`;
