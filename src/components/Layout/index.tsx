import React from 'react';

import GlobalStyles from '../../styles/global';
import Header from '../Header';
import Footer from '../Footer';

import { Container, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
