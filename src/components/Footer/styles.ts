import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--color-background-secondary);
`;

export const Box = styled.footer`
  width: 100%;
  max-width: 1260px;
  margin: auto;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;

    margin: 1rem;
  }

  > p {
    color: var(--color-text-secondary);
    text-align: center;
  }
`;

export const MainSection = styled.section`
  p:first-child {
    font-size: 3rem;
  }
`;

export const Section = styled.section`
  margin-left: 16rem;
  display: flex;

  ul {
    list-style: none;

    &:not(:first-child) {
      margin-left: 10rem;
    }

    li {
      margin: 1rem 0;

      &:first-child {
        font-size: 1.4rem;
        font-weight: bold;
      }

      &:not(:first-child) {
        color: var(--color-text-secondary);
      }
    }
  }
`;
