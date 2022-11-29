import React from 'react';
import { graphql } from 'gatsby';

export default function Page({data}) {
    return (
        <main>
            <h1>{data.contentfulPage.title}</h1>
            <p>{data.contentfulPage.description.description}</p>
        </main>
    )
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const data = graphql`
    query pageQuery($id: String) {
        contentfulPage(id: {eq: $id}) {
        url
        title
        description {
            description
        }
        }
    }
`