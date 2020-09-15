import React from 'react';
import Head from '../../components/Head';
import Layout from '../../components/Layout';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Layout>
      <Head />
      <Container>
        <h1>lorem*50</h1>
      </Container>
    </Layout>
  );
};

export default Main;
