import { graphql } from 'gatsby';
import React from 'react';

import Head from '../../components/Head';
import Layout from '../../components/Layout';
import Project from '../../components/Project';

import {
  Container,
  Title,
  Section,
  SectionTitle,
  ProjectsList,
} from '../../styles/portifolio';

interface Props {
  data: any;
}

const Portifolio: React.FC<Props> = ({ data }) => {
  console.log(data.allCoursesJson.edges);

  return (
    <Layout>
      <Head title="Portifolio" />
      <Container>
        <Title>Projects i've made:</Title>
        <Section>
          <SectionTitle>Personal</SectionTitle>
          <ProjectsList>
            {data.allPersonalJson.edges.map(({ node }) => (
              <li key={node.title}>
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
          <ProjectsList>
            {data.allCoursesJson.edges.map(({ node }) => (
              <li key={node.title}>
                <Project
                  title={node.title}
                  fluidImage={node.image.childImageSharp.fluid}
                  description={node.description}
                  references={node.references}
                  techsUsed={node.techsUsed}
                  beyondCourse={node.beyondCourse}
                />
              </li>
            ))}
          </ProjectsList>
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
      }
    }
    allCoursesJson {
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
          beyondCourse
          techsUsed {
            field
            tecnologies {
              name
              url
            }
          }
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
      }
    }
  }
`;

export default Portifolio;
