import styled, { css } from 'styled-components';

import { Github } from 'styled-icons/boxicons-logos';
import { Netlify } from 'styled-icons/simple-icons/';

export const Container = styled.article`
  position: relative;

  height: 40rem;
  background: var(--color-background-tertiary);
  box-shadow: var(--boxshadow);

  display: grid;
  grid-template-columns: 2fr 3fr;

  @media (min-width: 640px) {
    &:hover > div:first-child {
      max-width: 40%;
    }
  }

  @media (max-width: 640px) {
    height: 60rem;
    grid-template-columns: unset;
    grid-template-rows: 2fr 3fr;

    &:hover > div:first-child {
      max-height: 40%;
    }
  }

  > div:nth-child(2) {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

export const HiddenElement = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  max-width: 0;

  overflow-x: hidden;

  transition: all 200ms ease-in-out;

  @media (max-width: 640px) {
    bottom: unset;
    right: 0;

    max-width: unset;
    height: 100%;
    max-height: 0;

    overflow-x: unset;
    overflow-y: hidden;
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
  padding: 0.5rem 1rem;
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
