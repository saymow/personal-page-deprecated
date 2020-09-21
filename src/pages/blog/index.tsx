import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';
import Head from '../../components/Head';

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
} from './styles';
import PostBadge from '../../components/PostBadge';

const Blog: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              description
              tags
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
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
  `);

  console.log(data);

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
                      <span>Released: {edge.node.frontmatter.date}</span>
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
                      <span>Released: {edge.node.frontmatter.date}</span>
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
                      <span>Released: {edge.node.frontmatter.date}</span>
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

export default Blog;
