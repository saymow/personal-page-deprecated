import styled from 'styled-components';

import { StyledTitle } from '../shared';

export const Container = styled.div`
  margin: 5rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  ${StyledTitle}
`;

export const Section = styled.section`
  margin: 5rem 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProjectsList = styled.ul`
  list-style: none;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;

  > li {
    flex: 0 47%;
    margin: 5rem 0;

    &:nth-child(even) {
    }

    @media (max-width: 1000px) {
      flex: 0 80%;
    }
  }
`;

export const SectionTitle = styled.h2`
  ${StyledTitle}
  font-size: 3.5rem;
`;
