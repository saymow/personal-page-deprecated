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
