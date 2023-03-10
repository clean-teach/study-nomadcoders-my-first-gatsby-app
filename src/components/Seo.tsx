import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface IProps {
    title: string;
}

export default function Seo({title}: IProps) {
    const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
        query SeoData {
            site {
                siteMetadata {
                    description
                    siteUrl
                    title
                }
            }
        }
    `);
    console.log(data);
    return <title>{title} | {data.site?.siteMetadata?.title}</title>;
}