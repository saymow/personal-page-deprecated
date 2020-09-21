import React from 'react';

import { Container } from './styles';

interface Props {
  tag:
    | 'fundamentals'
    | 'beginner'
    | 'intermediate'
    | 'advanced'
    | 'javascript'
    | 'html'
    | 'css'
    | 'react'
    | 'node'
    | 'gatsby';
}

const PostBadge: React.FC<Props> = ({ tag }) => {
  const respectiveBgColors = {
    fundamentals: '#bbb',
    beginner: '#adf869',
    intermediate: '#f8cc69',
    advanced: '#f86969',
    javascript: '#F0DB4F',
    html: '#e34f26',
    css: '#7c9cb0',
    react: '#00d8ff',
    node: '#6cc24a',
    gatsby: '#663399',
  };

  return (
    <Container textOnHover={capitalize(tag)} bgColor={respectiveBgColors[tag]}>
      {capitalize(tag)}
    </Container>
  );
};

const capitalize = (title: string) => title[0].toUpperCase() + title.slice(1);

export default PostBadge;
