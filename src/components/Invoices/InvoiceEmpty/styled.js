import styled from 'styled-components';
import { H2, BodyOne } from '../../../theme/typography';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 7rem;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    padding-top: 15.4rem;
  }

  @media ${({ theme }) => theme.constants.mediaQueries.desktop} {
    padding-top: 7.6rem;
  }
`;

export const Image = styled.img`
  height: 16rem;
  object-fit: contain;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    height: 20rem;
  }
`;

export const Text = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 22rem;
  padding-top: 4rem;
  text-align: center;
`;

export const Title = styled.h2`
  ${H2};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.white
      : theme.constants.colors.chartreuseYellow};
  padding-bottom: 2.4rem;
`;

export const Subtitle = styled.p`
  ${BodyOne};
  color: ${({ theme }) =>
    theme.darkMode
      ? theme.constants.colors.selago
      : theme.constants.colors.baliHai};

  & strong {
    font-weight: 700;
  }
`;
