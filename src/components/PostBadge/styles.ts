import styled from 'styled-components';

interface Props {
  bgColor: string;
  textOnHover: string;
}

export const Container = styled.span<Props>`
  position: relative;
  display: block;

  padding: 0.4rem;
  background: ${({ bgColor }) => bgColor};
  text-shadow: 0.1rem 0.1rem 0.5rem var(--color-background);
  font-weight: 700;

  &:after {
    opacity: 0;
    content: '${({ textOnHover }) => textOnHover}';
    position: absolute;
    top: -0.1rem;
    left: 0;
    z-index: 2;
    padding: 0.35rem 0.4rem;
    background: rgba(0, 0, 0, 0.8);

    transition: 200ms all ease;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;
