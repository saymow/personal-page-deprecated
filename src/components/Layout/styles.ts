import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: var(--color-background);
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: 1rem;

  margin: 5rem auto 0 auto;

  @media (max-width: 480px) {
    margin: 12rem auto 0 auto;
  }

  max-width: 1260px;
  width: 100%;
`;
