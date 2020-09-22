import styled, { css } from 'styled-components';

export const LinkWrapperBtn = styled.span`
  display: block;

  font-size: 2rem;
  background: var(--color-purple);

  cursor: pointer;
`;

export const HorizontalStyledScroll = css`
  ::-webkit-scrollbar {
    height: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-background);
    border-radius: 0.4rem;
  }
`;

export const StyledTitle = css`
  position: relative;
  font-size: 4rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1cm;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 35%;
    height: 0.5rem;

    background: var(--color-purple);
  }
`;
