import React from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
            <AniLink cover bg="#151616" to="/">
              <li>Main</li>
            </AniLink>
            <AniLink cover bg="#151616" direction="right" to="/blog">
              <li>Blog</li>
            </AniLink>
            <Link to="*">
              <li>Contact me</li>
            </Link>
          </ul>
        </NavBar>
      </Box>
    </Container>
  );
};

export default Header;
