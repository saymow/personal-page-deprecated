import path from 'path';
import { CreatePageArgs } from 'gatsby';

type CreatePages = CreatePageArgs & {
  graphql: (arg0: string) => Promise<GraphQlQueryResponse>;
};

type GraphQlQueryResponse = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string;
          };
        };
      }[];
    };
  };
};

async function createPages({ actions, graphql }: CreatePages): Promise<void> {
  const { createPage } = actions;
  const blogTemplatePath = path.resolve(
    __dirname,
    '..',
    '..',
    'src',
    'templates',
    'Blog',
    'index.tsx',
  );

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  response.data.allMarkdownRemark.edges.forEach(({ node: { fields } }) => {
    createPage({
      component: blogTemplatePath,
      path: `/blog/${fields.slug}`,
      context: {
        slug: fields.slug,
      },
    });
  });
}

export default createPages;
