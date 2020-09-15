import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
              <AniLink
                paintDrip
                color="#151616"
                to={'/blog/'.concat(edge.node.fields.slug)}
              >
                <span>{edge.node.frontmatter.date}</span>
              </AniLink>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default Blog;
