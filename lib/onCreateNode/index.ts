import path from 'path';
import { CreateNodeArgs } from 'gatsby';

function onCreateNode({ node, actions }: CreateNodeArgs) {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath as string, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

export default onCreateNode;
