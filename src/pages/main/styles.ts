import styled, { css } from 'styled-components';

import { Github, Discord, Linkedin } from '@styled-icons/boxicons-logos';

interface Props {
  inverted?: boolean;
}

export const Container = styled.div``;

export const Frame = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
  background-attachment: fixed;
  background-size: cover;
  background-clip: content-box;
  background-position: center;
  filter: brightness(7%);
  height: 100vh;
  width: 100vw;
`;

export const FrameContent = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const squareDimensions = css`
  height: 45rem;
  width: 28rem;
`;

export const MainSquare = styled.div`
  position: absolute;
  top: calc((50% - 22.5rem) - 10%);
  z-index: 2;

  ${squareDimensions}

  border: 0.9rem solid #65fca1;

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - (30rem / 2));
    right: -1rem;

    height: 30rem;
    width: 1.1rem;

    background: #020203;
  }
`;

export const ShadowSquare = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;

  ${squareDimensions}

  border: 0.9rem solid #65fca10d;
`;

export const Title = styled.h1`
  position: absolute;
  z-index: 3;

  right: -20rem;
  height: 26rem;
  width: 32rem;
  top: calc(50% - 13rem);

  font-size: 10rem;
  font-weight: 400;
`;

export const NameBox = styled.div`
  position: absolute;
  right: 0%;
  bottom: 20%;

  p {
    font-weight: bold;
    font-size: 6rem;
  }
`;

export const Decorator = styled.div`
  position: absolute;
  top: 50%;
  left: -7rem;

  width: 5rem;
  height: 1rem;

  background: #65fca1;
`;

export const Content = styled.main`
  padding: 2rem 0;
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
  position: relative;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.1cm;
  margin-bottom: 2.5rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 30%;
    height: 0.5rem;

    background: #9f69f8;
  }
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
    transform: translateY(-20%);
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
