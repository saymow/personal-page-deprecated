import React from 'react';
import Layout from '../../components/Layout';

import { Container, NotFoundContainer } from '../../styles/404';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <NotFoundContainer>
          <span>404</span>
          <h1>Page not found</h1>
        </NotFoundContainer>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
