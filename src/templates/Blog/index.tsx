import React from 'react';
import { graphql } from 'gatsby';

import { Container } from './styles';
import Layout from '../../components/Layout';
import Head from '../../components/Head';

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

interface Props extends React.FC {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

const Blog: React.FC<Props> = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  } = data;

  return (
    <Layout>
      <Head />
      <Container>
        <h1>Title: {title}</h1>
        <h3>Date: {date}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Container>
    </Layout>
  );
};

export default Blog;
