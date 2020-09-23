import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';
import Head from '../../components/Head';
import PostBadge from '../../components/PostBadge';

import {
  Container,
  PostsSection,
  PostArticle,
  PostFigure,
  PostInfo,
  PostInfoHeader,
  BadgesContainer,
  PostInfoDescription,
  PostInfoCommands,
  BtnSpan,
} from '../../styles/blog/styles';

const Blog: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Head title="Blog" />
      <Container>
        <PostsSection>
          <h1>Available posts:</h1>
          <ul>
            {data.allMarkdownRemark.edges.map((edge) => (
              <li key={edge.node.fields.slug}>
                <PostArticle>
                  <PostFigure>
                    <Img
                      fluid={
                        edge.node.frontmatter?.image?.childImageSharp.fluid
                      }
                    />
                  </PostFigure>
                  <PostInfo>
                    <PostInfoHeader>
                      <h2>{edge.node.frontmatter.title}</h2>
                      <BadgesContainer>
                        {edge.node.frontmatter.tags.map((tag) => (
                          <PostBadge tag={tag.toLowerCase()} />
                        ))}
                      </BadgesContainer>
                    </PostInfoHeader>
                    <PostInfoDescription>
                      {edge.node.frontmatter.description}
                    </PostInfoDescription>
                    <PostInfoCommands>
                      <span>{edge.node.frontmatter.date}</span>
                      <BtnSpan>
                        <AniLink
                          paintDrip
                          color="#151616"
                          to={'/blog/'.concat(edge.node.fields.slug)}
                        >
                          Read more...
                        </AniLink>
                      </BtnSpan>
                    </PostInfoCommands>
                  </PostInfo>
                </PostArticle>
              </li>
            ))}
          </ul>
        </PostsSection>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            date(locale: "en-us", formatString: "MMMM DD[,] YYYY")
            description
            tags
            image {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

// Using fragments manualy, reason being graphql type generator (unable to read them).
// fragment GatsbyImageSharpFluid on ImageSharpFluid {
//   base64
//   aspectRatio
//   src
//   srcSet
//   sizes
// }

interface Props {
  data: any;
}

export default Blog;
