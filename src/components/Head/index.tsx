import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  title: string;
}

const Head: React.FC<Props> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <Helmet title={`${data.site.siteMetadata.author} | ${title}`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Head;
