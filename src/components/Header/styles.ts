import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  width: 100%;
  background: rgba(196, 196, 196, 0.08);

  transition: transform 200ms ease;

  &.hidden {
    transform: translateY(-100%);
  }
`;

export const Box = styled.main`
  margin: 0 auto;
  max-width: 1260px;
  height: 5rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    height: 12rem;
  }
`;

export const LogoBox = styled.div`
  a {
    text-decoration: none;
    p {
      font-size: 4rem;
      font-weight: 200;

      span {
        font-weight: bold;
      }
    }
  }
`;

export const NavBar = styled.nav`
  height: 100%;

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;

    li {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 2rem;

      transition: 200ms ease;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      a {
        text-decoration: none;
        font-size: 2rem;
      }

      &:last-child {
        font-weight: bold;
        background: var(--color-purple);
      }
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    ul {
      flex-direction: column;
      align-items: center;

      li {
        padding: 0.5rem;
        width: 100%;

        a {
          margin: auto;
        }
      }
    }
  }
`;
