import styled from 'styled-components';

import { ArrowBack as ArrowBackIcon } from 'styled-icons/boxicons-regular';

export const Container = styled.section``;

export const Header = styled.header`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5rem 0;
  height: 20rem;

  h1 {
    font-size: 4rem;
    text-align: center;
  }

  h3 {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  > span {
    font-size: 1.4rem;
    color: var(--color-text-secondary);
  }
`;

export const ArrowBack = styled(ArrowBackIcon)`
  position: absolute;
  top: 0;
  left: 0;

  cursor: pointer;

  fill: var(--color-purple);
  height: 8rem;
  width: 8rem;
`;

export const BadgesList = styled.ul`
  list-style: none;

  display: flex;

  li {
    &:not(:first-child) {
      margin-left: 1rem;
    }

    span {
      font-size: 1.4rem;
    }
  }
`;

export const PostArticle = styled.article`
  font-size: 1.6rem;
`;
