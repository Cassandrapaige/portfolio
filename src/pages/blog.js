import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import { COLORS } from "../constants"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ColorfulTitle from '../components/colorful-title/colorful-title.component'

const BlogLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.isHovered ? COLORS.randomColor : props.theme.text};

  .fa-arrow-right {
    transition: all .2s ease;
    opacity: ${props => props.isHovered ? 1: 0};
    transform: ${props => props.isHovered ? 'translateX(10px)' : 'translateX(-20px)'}
  }
`

const BlogTitle = styled.h3`
  margin: 5px 0 10px 0;
  color: ${props => props.isHovered ? COLORS.randomColor : props.theme.text};
  font-weight: 800;
  font-size: 36px;
`

const BlogPost = styled.div`
border: 1px solid ${COLORS.randomColor()};
padding: 30px;
margin: 20px 0;
border-radius: 10px;
`

const BlogPostsContainer = styled.div`
padding: 50px 0;
`

const Excerpt = styled.p`
font-size: 20px;
padding-bottom: 20px;
font-family: 'Lato', sans-serif;
line-height: 26px;
`

const Post = ({node, ...props}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
  <Link to = {node.fields.slug}>
     <BlogPost key = {node.id}
     onMouseEnter = {() => setIsHovered(true)}
     onMouseLeave = {() => setIsHovered(false)}
     >
      <BlogTitle isHovered = {isHovered}>{node.frontmatter.title}</BlogTitle>
      <Excerpt>{node.excerpt}</Excerpt>
      <BlogLink to = {node.fields.slug} isHovered = {isHovered}>Read more <i class="fas fa-arrow-right"></i></BlogLink>
     </BlogPost>
   </Link>
  )
}


export default ({ data }) => {
  return (
  <Layout>
    <SEO title="Blog" />
    <ColorfulTitle title = 'Thoughts & Tips & Things' />
    <BlogPostsContainer>
    {
      data.allMarkdownRemark.edges.map(({node}) => (
        <Post node = {node}/>
      ))
    }
    </BlogPostsContainer>
  </Layout>
)}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
