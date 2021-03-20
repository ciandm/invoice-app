import { css } from 'styled-components';

export const H1 = css`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.2rem;
  letter-spacing: -0.0625px;

  @media ${({ theme }) => theme.constants.mediaQueries.tablet} {
    font-size: 3.2rem;
    line-height: 3.6rem;
    letter-spacing: -1px;
  }
`;

export const H2 = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.625px;
`;

export const H3 = css`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
`;

export const H4 = css`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

export const BodyOne = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

export const BodyTwo = css`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.23px;
`;
