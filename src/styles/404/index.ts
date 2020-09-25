import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundContainer = styled.main`
  display: flex;
  align-items: flex-end;

  span {
    font-size: 4rem;
    letter-spacing: 1mm;
  }

  h1 {
    font-size: 4rem;
    border-left: 1px solid var(--color-text-secondary);
    margin-left: 1rem;
    padding-left: 1rem;
  }
`;
