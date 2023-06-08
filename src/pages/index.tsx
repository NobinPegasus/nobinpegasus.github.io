import React from 'react'
import { Link, graphql } from 'gatsby'
import { Wrapper, SectionTitle, Header, SectionSubTitle, SEO } from 'components'
import { Layout } from 'layouts'
import { Content } from 'layouts/components'
import Helmet from 'react-helmet'
import config from 'config/siteConfig'
import Data from 'models/Data'
import styled from 'styled-components'
import { FeaturedPosts } from 'components/FeaturedPost'
import { MDXRenderer } from 'gatsby-plugin-mdx'

interface Props {
  data: Data
}

const HomePage = (props: Props) => {
  const { edges } = props.data.allMdx

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <SEO path="/" data={{ title: config.siteTitleAlt }} />
      <Header>
        <SectionTitle>
          {config.siteTitle}
          <Line />
          <SectionSubTitle>{config.siteDescription}</SectionSubTitle>
        </SectionTitle>
      </Header>
      <Wrapper>
        <Content>
         {edges.map((post) => (
              <li
                key={post.node.frontmatter.title}
                style={{ listStyleType: 'none', margin: 0 }}
              >

                  <DateTag dateTime={post.node.frontmatter.standardDate}>
                    <p>{post.node.frontmatter.date}</p>
                    <MDXRenderer>{post.node.body}</MDXRenderer>
                  </DateTag>

                
              </li>
              
            ))}
        </Content>
      </Wrapper>
    </Layout>
  )
}
// Gatsby needs this default export to work.
// eslint-disable-next-line import/no-default-export
export default HomePage

export const Head = () => (
  <SEO />
)

// export const query = graphql`
//   query {
//     allMdx(
//       sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
//       limit: 10
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             path
//           }
//           frontmatter {
//             title
//             date(formatString: "MMMM D, YYYY")
//             standardDate: date(formatString: "YYYY-MM-DD")
//           }
//           excerpt(pruneLength: 200)
//           timeToRead
//         }
//       }
//     }
//   }
// `
export const query = graphql`
query {
  allMdx(filter: {frontmatter: {title: {eq: "About"}}}) {
    edges {
      node {
        fields {
          path
        }
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          standardDate: date(formatString: "YYYY-MM-DD")
        }
        excerpt(pruneLength: 200)
        timeToRead
        body
      }
    }
  }
}
`

const Line = styled.hr`
  color: white;
  width: 5rem;
  margin: 0.5rem auto;
  height: 3px;
`

const Title = styled.span`
  margin-right: 0.5rem;
`

const DateTag = styled.time`
  color: rgba(0, 0, 0, 0.5);
`