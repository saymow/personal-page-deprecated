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

    a {
      height: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0 1rem;

      li {
        font-size: 2rem;
      }

      &:not(:last-child) {
        margin-right: 3rem;
      }

      &:last-child {
        font-weight: bold;
        background: #9f69f8;
      }
    }
  }
`;
