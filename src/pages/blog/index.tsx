import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { Container } from './styles';
import Layout from '../../components/Layout';
import Head from '../../components/Head';

const Blog: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head />
      <Container>
        <ul>
          {data.allMarkdownRemark.edges.map((edge) => (
            <li key={edge.node.fields.slug}>
              <h2>{edge.node.frontmatter.title}</h2>
              <Link to={edge.node.fields.slug}>
                <span>{edge.node.frontmatter.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default Blog;
