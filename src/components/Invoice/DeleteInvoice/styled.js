import styled from 'styled-components';
import { BodyOne } from '../../../theme/typography';

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 0 2.4rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.blackPearl
      : theme.constants.colors.white};
  border-radius: 0.8rem;
  max-width: 48rem;
  padding: 3.2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  font-size: 2rem;
  letter-spacing: -0.42px;
  line-height: 3.2rem;
  padding-bottom: 0.8rem;
`;

export const Prompt = styled.p`
  ${BodyOne};
  color: ${({ theme }) => theme.constants.colors.shipCove};
  padding-bottom: 2.4rem;
`;

export const ButtonGroup = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: max-content max-content;
  margin-left: auto;
`;
