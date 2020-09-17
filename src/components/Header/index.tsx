import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { Container, Box, LogoBox, NavBar } from './styles';

const Header: React.FC = () => {
  const [show, setShow] = useState(true);
  let prevScrollY = 0;

  const headerController = useCallback(() => {
    const { scrollY } = window;

    if (scrollY < prevScrollY) setShow(true);
    else setShow(false);

    prevScrollY = scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', headerController);

    return () => window.removeEventListener('scroll', headerController);
  }, []);

  return (
    <Container className={show ? '' : 'hidden'}>
      <Box>
        <LogoBox>
          <AniLink cover bg="#151616" direction="right" to="/">
            <p>
              <span>Gustavo</span>
              <i>Alves</i>
            </p>
          </AniLink>
        </LogoBox>
        <NavBar>
          <ul>
            <AniLink cover bg="#151616" direction="right" to="/blog">
              <li>Blog</li>
            </AniLink>
            <AniLink cover bg="#151616" direction="right" to="/blog">
              <li>Portifolio</li>
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
