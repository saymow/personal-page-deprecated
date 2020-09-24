import styled from 'styled-components';

import {
  VerticalStyledScroll,
  HorizontalStyledScroll,
} from '../../../styles/shared';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);

  height: 100%;
  padding: 1rem;

  @media (min-width: 640px) {
    overflow-x: hidden;
    ${VerticalStyledScroll}
  }
  @media (max-width: 640px) {
    overflow-y: hidden;
    ${HorizontalStyledScroll}
  }

  h4 {
    font-size: 2.4rem;
    text-transform: uppercase;
  }

  section {
    display: flex;
    flex-direction: column;

    @media (max-width: 640px) {
      flex-direction: row;
      align-items: flex-start;

      article {
        margin-left: 1.4rem;
      }
    }

    article {
      margin-top: 1.2rem;

      h5 {
        font-size: 1.8rem;
        text-transform: uppercase;
      }
    }
  }
`;

export const TecnologiesList = styled.ul`
  list-style: none;
  margin-left: 1rem;

  li {
    line-height: 2rem;
    font-size: 1.4rem;

    a {
      text-decoration: none;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
