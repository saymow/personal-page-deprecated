import React from 'react';

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
              <li>Home</li>
              <li>Blog</li>
              <li>Portifolio</li>
            </ul>
            <ul>
              <li>You can find me at</li>
              <li>Github</li>
              <li>Linkedin</li>
            </ul>
            <ul>
              <li>Contact me</li>
              <li>
                <a href="mailto: gustavo_alves2010@yahoo.com.br">
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
