import styled, { css } from 'styled-components';
import { Github, Discord, Linkedin } from 'styled-icons/boxicons-logos';

import { StyledTitle } from '../../styles/shared';

interface Props {
  inverted?: boolean;
}

export const Container = styled.div``;

export const Content = styled.main`
  padding: 5rem 0;
`;

export const Section = styled.section<Props>`
  display: flex;
  flex-direction: column;

  align-items: ${({ inverted }) => (inverted ? 'flex-end' : 'flex-start')};

  transform: ${({ inverted }) =>
    inverted ? 'translateX(100%)' : 'translateX(-100%)'};
  opacity: 0;

  transition: all 1000ms ease;

  &.show {
    transform: translateX(0);
    opacity: 1;
  }
  &:not(:first-child) {
    margin-top: 20rem;
  }
`;

export const SectionTitle = styled.h2`
  ${StyledTitle}
  margin-bottom: 2.5rem;
`;

export const SectionContent = styled.article`
  p {
    line-height: 2.2rem;
    font-size: 1.6rem;
  }
`;

export const IconsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg:not(:last-child) {
    margin-right: 5rem;
  }
`;

const IconsCss = css`
  cursor: pointer;

  width: 8rem;
  height: 8rem;

  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.2) translateY(-20%);
  }
`;

export const GithubIcon = styled(Github)`
  ${IconsCss}
`;
export const LinkedinIcon = styled(Linkedin)`
  ${IconsCss}
`;
export const DiscordIcon = styled(Discord)`
  ${IconsCss}
`;
