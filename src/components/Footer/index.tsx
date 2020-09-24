import React from 'react';
import { Link } from 'gatsby';

import { Container, Box, MainSection, Section } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Box>
        <div>
          <MainSection>
            <p>
              <strong>Gustavo</strong>
              <i>Alves</i>
            </p>
            <p>Web Developer</p>
          </MainSection>
          <Section>
            <ul>
              <li>Explore</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/portifolio">Portifolio</Link>
              </li>
            </ul>
            <ul>
              <li>You can find me at</li>
              <li>
                <a href="https://github.com/saymow" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gustavo-alves-6571a11a9/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
            </ul>
            <ul>
              <li>Contact me</li>
              <li>
                <a href="mailto:gustavo_alves2010@yahoo.com.br">
                  gustavo_alves2010@yahoo.com.br
                </a>
              </li>
            </ul>
          </Section>
        </div>
        <p>© 2020 Gustavo. All Rights Reserved.</p>
      </Box>
    </Container>
  );
};

export default Footer;
