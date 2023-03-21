import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPostProps) {
  return (
    <Layout title={data.mdx?.frontmatter?.title!}>
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        auther
        category
        date
        slug
        title
      }
      body
    }
  }
`;

export const Head = (props: any) => {
  console.log(props);
  return <Seo title={props.pageContext.frontmatter.title} />;
};
