import React from "react";

interface IProps {
    title: string;
}

export default function Seo({title}: IProps) {
    return <title>{title} | Gatsby Beginner - DevStickers!</title>;
}