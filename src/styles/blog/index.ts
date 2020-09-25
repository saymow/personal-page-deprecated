import styled from 'styled-components';

import { HorizontalStyledScroll, StyledTitle } from '../shared';

export const Container = styled.div``;

export const PostsSection = styled.section`
  display: flex;
  flex-direction: column;

  margin: 5rem 0;

  h1 {
    align-self: flex-start;
    ${StyledTitle}
  }

  ul {
    list-style: none;
    margin: 3rem 0;
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 0 28%;
      margin: 5rem 0;

      a {
        text-decoration: none;
      }

      @media (min-width: 1060px) {
        &:nth-child(3n + 2) {
          margin: 5rem 8%;
        }
      }

      @media (max-width: 1060px) {
        flex: 0 46%;

        &:nth-child(even) {
          margin-left: 8%;
        }
      }

      @media (max-width: 680px) {
        flex: 0 min(90%, 38rem);

        margin: 5rem auto !important;
      }
    }
  }
`;

export const PostArticle = styled.article`
  display: grid;
  grid-template-rows: 2fr 3fr;

  height: 40rem;
  background: var(--color-background-tertiary);
  box-shadow: var(--boxshadow);
`;

export const PostFigure = styled.figure`
  overflow: hidden;

  > div {
    height: 100%;
  }
`;

export const PostInfo = styled.main`
  display: grid;
  grid-template-rows: 6fr 11fr 3fr;
  padding: 0.5rem;

  overflow: hidden;
`;

export const PostInfoHeader = styled.header`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    line-height: 3rem;
    font-size: 2.2rem;
    text-align: center;
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  overflow: auto;

  ${HorizontalStyledScroll}

  padding: 0.4rem;

  span:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const PostInfoDescription = styled.p`
  padding: 1rem 0;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostInfoCommands = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  span:first-child {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
