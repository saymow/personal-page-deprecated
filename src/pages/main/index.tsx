import React, { useEffect, useRef } from 'react';

import ContactForm from '../../components/ContactForm';
import Head from '../../components/Head';
import Layout from '../../components/Layout';
import Frame from './Frame';

import {
  Container,
  Content,
  Section,
  SectionTitle,
  SectionContent,
  IconsContainer,
  GithubIcon,
  LinkedinIcon,
} from './styles';

const Main: React.FC = () => {
  const sectionsRef = [
    useRef<null | HTMLDivElement>(null),
    useRef<null | HTMLDivElement>(null),
    useRef<null | HTMLDivElement>(null),
  ];

  function handleObserverRegistration(target: HTMLDivElement) {
    const io = new IntersectionObserver((entries, observer) => {
      // entries in this casee are = [el];
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const ref = entry.target;

          ref.classList.add('show');
          observer.disconnect();
        }
      });
    });

    io.observe(target);
  }

  useEffect(() => {
    sectionsRef.forEach((sectionRef) => {
      handleObserverRegistration(sectionRef.current as HTMLDivElement);
    });
  }, []);

  return (
    <Layout>
      <Head title="Home" />
      <Container>
        <Frame />
        <Content>
          <Section ref={sectionsRef[0]}>
            <SectionTitle>About me</SectionTitle>
            <SectionContent>
              <p>
                Fullstack Javascript developer, especialized in NODE and
                ReactJS.
              </p>
              <br />
              <p>
                Desenvolvedor javascript Fullstack, especializado em NODE e
                ReactJS.
              </p>
            </SectionContent>
          </Section>
          <Section id="contact-me" ref={sectionsRef[1]} inverted={true}>
            <SectionTitle>You can find me at</SectionTitle>
            <IconsContainer>
              <a href="https://github.com/saymow" target="_blank">
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/gustavo-alves-6571a11a9/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </IconsContainer>
          </Section>
          <Section ref={sectionsRef[2]}>
            <SectionTitle>Or, Send me a message</SectionTitle>
            <SectionContent>
              <ContactForm />
            </SectionContent>
          </Section>
        </Content>
      </Container>
    </Layout>
  );
};

export default Main;
