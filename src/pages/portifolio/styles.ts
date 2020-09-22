import styled, { css } from 'styled-components';
import { Github } from 'styled-icons/boxicons-logos';
import { Netlify } from 'styled-icons/simple-icons/';

import { StyledTitle } from '../../styles/shared';

export const Container = styled.div`
  margin: 5rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  ${StyledTitle}
`;

export const Section = styled.section`
  margin: 5rem 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProjectsList = styled.ul`
  list-style: none;

  width: 100%;
  display: flex;
  flex-wrap: wrap;

  > li {
    flex: 0 47%;
    margin: 5rem 0;

    &:nth-child(even) {
      margin-left: 6%;
    }
  }
`;

export const SectionTitle = styled.h2`
  ${StyledTitle}
`;

export const Project = styled.article`
  position: relative;

  height: 40rem;
  background: var(--color-background-tertiary);
  box-shadow: var(--boxshadow);

  display: grid;
  grid-template-columns: 2fr 3fr;

  > div:first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    max-width: 0px;

    transition: all 200ms ease;
  }

  &:hover > div:first-child {
    max-width: 40%;
    padding: 1rem;
  }

  > div:nth-child(2) {
    background: #222;
    overflow: hidden;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div:first-child {
    padding: 1rem;

    h3 {
      font-size: 3rem;
      text-align: center;
    }

    div {
      margin-top: 2rem;
      p {
        color: var(--color-text-secondary);
        font-size: 1.4rem;
        &:last-child {
          margin-top: 1rem;
        }
      }
    }
  }
`;

export const MoreInfo = styled.div`
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.1);

  h4 {
    text-transform: uppercase;
  }

  ul {
    margin: 1rem 0 0.5rem 0;
    list-style: none;

    display: flex;

    li:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

const IconsCss = css`
  cursor: pointer;

  width: 3rem;
  height: 3rem;

  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-0.2em) scale(1.2);
  }
`;

export const GithubIcon = styled(Github)`
  ${IconsCss}
`;

export const NetlifyIcon = styled(Netlify)`
  ${IconsCss}
`;
