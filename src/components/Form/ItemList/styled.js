import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: hsl(225, 14%, 53%);
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.375px;
  padding-bottom: 2.4rem;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 4.8rem;
  margin-bottom: 4.8rem;
`;
