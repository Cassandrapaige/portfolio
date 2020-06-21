import React from 'react'
import {graphql} from 'gatsby'
import { Link } from "gatsby"

import Layout from '../components/layout'

export default ({ data, pageContext }) => {
    console.log(pageContext)
    const post = data.markdownRemark;
    const getPage = dir => {
        return pageContext[dir] === null ? null : pageContext[dir].fields.slug
    }

    return (
        <Layout>
            <div>
            <h1 data-splitting>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
            </div>
            <Link to = {getPage('prev')}>PREVIOUS</Link>
            <Link to = {getPage('next')}>NEXT</Link>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug }}) {
            html 
            frontmatter {
                title
            }
        }
        allMarkdownRemark {
            edges {
              next {
                frontmatter {
                  title
                  slug
                }
              }
            }
        }
    }
`