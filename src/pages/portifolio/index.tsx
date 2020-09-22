import React from 'react';

import Head from '../../components/Head';
import Layout from '../../components/Layout';
import TecnologiesUsed from './TecnologiesUsed';

import {
  Container,
  Title,
  Section,
  SectionTitle,
  ProjectsList,
  Project,
  ProjectInfo,
  MoreInfo,
  GithubIcon,
  NetlifyIcon,
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
              <Project>
                <TecnologiesUsed
                  tecnlogiesUsed={[
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
                <div>
                  <img src="https://images.unsplash.com/photo-1599687349533-82f24a0b62cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                </div>
                <ProjectInfo>
                  <div>
                    <h3>Flash cards</h3>
                    <div>
                      <p>
                        My first fullstack project. A Fibonnaci based flash card
                        application made during cs50 course.
                      </p>
                      <p>
                        Meu primeiro projeto fullstack. Uma aplicação de
                        flashcards baseado na sequência de Fibonnaci, feita
                        durante cs50.
                      </p>
                    </div>
                  </div>
                  <MoreInfo>
                    <h4>More about</h4>
                    <ul>
                      <li>
                        <GithubIcon />
                      </li>
                      <li>
                        <NetlifyIcon />
                      </li>
                    </ul>
                  </MoreInfo>
                </ProjectInfo>
              </Project>
            </li>
          </ProjectsList>
        </Section>
        <Section>
          <SectionTitle>On Courses</SectionTitle>
          <ProjectsList>
            <li>
              <Project>
                <TecnologiesUsed
                  tecnlogiesUsed={[
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
                <div>
                  <img src="https://images.unsplash.com/photo-1599687349533-82f24a0b62cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                </div>
                <ProjectInfo>
                  <div>
                    <h3>Flash cards</h3>
                    <div>
                      <p>
                        My first fullstack project. A Fibonnaci based flash card
                        application made during cs50 course.
                      </p>
                      <p>
                        Meu primeiro projeto fullstack. Uma aplicação de
                        flashcards baseado na sequência de Fibonnaci, feita
                        durante cs50.
                      </p>
                    </div>
                  </div>
                  <MoreInfo>
                    <h4>More about</h4>
                    <ul>
                      <li>
                        <GithubIcon />
                      </li>
                      <li>
                        <NetlifyIcon />
                      </li>
                    </ul>
                  </MoreInfo>
                </ProjectInfo>
              </Project>
            </li>
          </ProjectsList>
        </Section>
      </Container>
    </Layout>
  );
};

export default Portifolio;
