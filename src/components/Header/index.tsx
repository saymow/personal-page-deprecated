import React from 'react';
import { Link } from 'gatsby';

import { Container, Box, LogoBox, NavBar } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Box>
        <LogoBox>
          <span>To-do</span>
        </LogoBox>
        <NavBar>
          <ul>
            <Link to="/">
              <li>Main</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="*">
              <li>Todo</li>
            </Link>
          </ul>
        </NavBar>
      </Box>
    </Container>
  );
};

export default Header;
