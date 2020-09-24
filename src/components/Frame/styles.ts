import styled, { css } from 'styled-components';

export const Container = styled.div`
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

  @media (max-width: 860px) {
    height: 40rem;
    width: 22rem;
  }
`;

export const MainSquare = styled.div`
  position: absolute;
  top: calc((50% - 22.5rem) - 10%);
  z-index: 2;

  ${squareDimensions}

  border: 0.9rem solid var(--color-green);

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

  border: 0.9rem solid var(--color-green-secondary);
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

  @media (max-width: 560px) {
    font-size: 6rem;
    top: calc(50% - 9rem);
  }
`;

export const NameBox = styled.div`
  position: absolute;
  right: 0%;
  bottom: 20%;

  p {
    font-weight: bold;
    font-size: 6rem;
  }

  @media (max-width: 480px) {
    p {
      font-size: 4rem;
    }
  }
`;

export const Decorator = styled.div`
  position: absolute;
  top: 50%;
  left: -7rem;

  width: 5rem;
  height: 1rem;

  background: var(--color-green);
`;
