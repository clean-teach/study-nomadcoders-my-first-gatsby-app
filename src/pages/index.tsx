import { graphql, PageProps, Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to DevStickers">
      <p>Hello Welcome to Home</p>
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker) => (
          <article key={sticker.id}>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name!}
            />
            <Link to={`/products/${sticker.id}`}>
              <h2>{sticker.name}</h2>
              <h3>{sticker.price}</h3>
            </Link>
          </article>
        ))}
      </div>
      <StaticImage
        src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        alt="개"
      />
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: DOMINANT_COLOR, height: 400)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
