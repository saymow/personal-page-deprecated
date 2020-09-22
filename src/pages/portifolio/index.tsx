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

const Portifolio: React.FC = () => {
  return (
    <Layout>
      <Head title="Portifolio" />
      <Container>
        <Title>Projects i've made:</Title>
        <Section>
          <SectionTitle>Personal</SectionTitle>
          <ProjectsList>
            <li>
              <Project
                title="Flash cards"
                thumbnailUrl="https://images.unsplash.com/photo-1599687349533-82f24a0b62cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                description={{
                  en:
                    'My first fullstack project. A Fibonnaci based flash card application made during cs50 course.',
                  pt:
                    'Meu primeiro projeto fullstack. Uma aplicação de flashcards baseado na sequência de Fibonnaci, feita durante cs50.',
                }}
                references={[
                  { type: 'Github', url: 'example.com' },
                  { type: 'Netlify', url: 'example.com' },
                ]}
                techsUsed={[
                  {
                    field: 'Web',
                    tecnologies: [
                      {
                        name: 'React',
                        url: 'todo.todo',
                      },
                      {
                        name: 'Axios',
                        url: 'todo.todo',
                      },
                      {
                        name: 'Styled-components',
                        url: 'todo.todo',
                      },
                    ],
                  },
                  {
                    field: 'Server',
                    tecnologies: [
                      {
                        name: 'Node',
                        url: 'todo.todo',
                      },
                      {
                        name: 'Express',
                        url: 'todo.todo',
                      },
                      {
                        name: 'Knex',
                        url: 'todo.todo',
                      },
                    ],
                  },
                ]}
              />
            </li>
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

export default Portifolio;
