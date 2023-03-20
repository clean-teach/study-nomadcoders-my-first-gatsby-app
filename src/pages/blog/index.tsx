import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

export default function Blog({ data }: PageProps<Queries.BlogPostQuery>) {
  console.log(data);
  return (
    <Layout title="Blog">
      <p>The most recent news from my shop</p>
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.auther} in : {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <hr />
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPost {
    allMdx {
      nodes {
        frontmatter {
          slug
          auther
          category
          date(formatString: "YYYY.MM.DD")
          title
        }
        excerpt(pruneLength: 30)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
