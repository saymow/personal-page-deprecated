import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  width: 100%;
  background: #151616;
`;

export const Box = styled.main`
  margin: 0 auto;
  max-width: 1260px;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoBox = styled.div``;

export const NavBar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;

      li {
        font-size: 2rem;
      }

      &:not(:last-child) {
        margin-right: 1.6rem;
      }
    }
  }
`;
