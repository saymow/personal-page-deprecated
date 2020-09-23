import { graphql } from 'gatsby';
import React from 'react';

import Head from '../../components/Head';
import Layout from '../../components/Layout';
import Project from './Project';

import {
  Container,
  Title,
  Section,
  SectionTitle,
  ProjectsList,
} from './styles';

interface Props {
  data: any;
}

const Portifolio: React.FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <Head title="Portifolio" />
      <Container>
        <Title>Projects i've made:</Title>
        <Section>
          <SectionTitle>Personal</SectionTitle>
          <ProjectsList>
            {data.allPersonalJson.edges.map(({ node }) => (
              <li>
                <Project
                  title={node.title}
                  fluidImage={node.image.childImageSharp.fluid}
                  description={node.description}
                  references={node.references}
                  techsUsed={node.techsUsed}
                />
              </li>
            ))}
          </ProjectsList>
        </Section>
        <Section>
          <SectionTitle>On Courses</SectionTitle>
          <ProjectsList></ProjectsList>
        </Section>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    allPersonalJson {
      edges {
        node {
          title
          description {
            en
            pt
          }
          references {
            type
            url
          }
          techsUsed {
            field
            tecnologies {
              name
              url
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  }
`;

export default Portifolio;
