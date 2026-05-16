import React from 'react'
import { graphql, Link } from 'gatsby'
import { Wrapper, SectionTitle, Header, SEO } from 'components'
import { Layout } from 'layouts'
import { Content } from 'layouts/components'
import { groupBy } from 'lodash'
import Helmet from 'react-helmet'
import config from 'config/siteConfig'
import Data from 'models/Data'
import styled from 'styled-components'

interface Props {
  data: Data
}

const MONTHS = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
]

const BlogPage = (props: Props) => {
  // 1. Flatten edges to just get the post nodes
  const posts = props.data?.allMdx?.edges.map((edge) => edge.node) ?? []

  // 2. Group by exact Year string using "YYYY-MM-DD"
  const postsByYear = groupBy(posts, (post) =>
    post.frontmatter.standardDate.substring(0, 4)
  )

  // 3. Structure and sort the grouped data
  const archiveData = Object.keys(postsByYear)
    .sort((a, b) => b.localeCompare(a)) // Sort Years descending
    .map((year) => {
      const yearPosts = postsByYear[year]

      // Group by exact Month string (MM)
      const postsByMonth = groupBy(yearPosts, (post) =>
        post.frontmatter.standardDate.substring(5, 7)
      )

      const months = Object.keys(postsByMonth)
        .sort((a, b) => b.localeCompare(a)) // Sort Months descending (12 -> 01)
        .map((monthStr) => ({
          monthIndex: parseInt(monthStr, 10) - 1, // Convert '01' to 0 for MONTHS array
          posts: postsByMonth[monthStr], // Posts are already sorted by Gatsby GraphQL
        }))

      return { year, months }
    })

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <SEO path="/blog/" data={{ title: 'Blog Archive' }} />
      <Header banner={null}>
        <SectionTitle>Blog Archive</SectionTitle>
      </Header>
      <Wrapper>
        <Content>
          {archiveData.map(({ year, months }) => (
            <YearBlock key={year}>
              <YearLabel>{year}</YearLabel>
              <YearPosts>
                {months.map(({ monthIndex, posts }) => (
                  <MonthBlock key={`${year}-${monthIndex}`}>
                    <MonthLabel>
                      {MONTHS[monthIndex].slice(0, 3).toUpperCase()}
                    </MonthLabel>
                    <PostList>
                      {posts.map((post) => (
                        <PostItem key={post.fields.path}>
                          <PostLink to={post.fields.path}>
                            <PostDot />
                            <PostTitle>{post.frontmatter.title}</PostTitle>
                            <PostDate dateTime={post.frontmatter.standardDate}>
                              {post.frontmatter.formattedDate}
                            </PostDate>
                          </PostLink>
                        </PostItem>
                      ))}
                    </PostList>
                  </MonthBlock>
                ))}
              </YearPosts>
            </YearBlock>
          ))}
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default BlogPage

// ─── Styled Components ────────────────────────────────────────────────────────

const YearBlock = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #e6e4df; /* Softened border for light backgrounds */

  &:last-child {
    border-bottom: none;
  }
`

const YearLabel = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: #a39b8e; /* Muted label tone */
  text-transform: uppercase;
  padding-top: 0.15rem;
  width: 3rem;
  flex-shrink: 0;
`

const YearPosts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const MonthBlock = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`

const MonthLabel = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  color: #7a7369; /* Slightly darker than year to create hierarchy */
  padding-top: 0.2rem;
  width: 2.5rem;
  flex-shrink: 0;
`

const PostList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const PostItem = styled.li`
  margin: 0;
  padding: 0;
`

const PostDot = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #d4cfc7; /* Subtle dot by default */
  flex-shrink: 0;
  margin-bottom: 2px;
  transition: background 0.15s ease;
`

const PostTitle = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  color: #111111; /* Very dark/almost black for maximum contrast */
  line-height: 1.4;
  flex: 1;
  transition: color 0.15s ease;
`

const PostDate = styled.time`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  color: #99938a; /* Soft grey for the date */
  flex-shrink: 0;
  white-space: nowrap;
  transition: color 0.15s ease;
`

const PostLink = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  text-decoration: none;
  padding: 0.3rem 0;
  border-radius: 2px;
  transition: all 0.15s ease;

  &:hover ${PostDot} {
    background: #111111; /* Dot goes dark on hover */
  }

  &:hover ${PostTitle} {
    color: #8c7e6a; /* Changes to a warm, visible grey-brown instead of white (won't blend with background) */
  }

  &:hover ${PostDate} {
    color: #111111; /* Date goes dark to highlight */
  }
`

// Note: If you are using Gatsby v4 or v5, you may need to update the sort syntax to:
// sort: { frontmatter: { date: DESC } }
export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      filter: { frontmatter: { date: { ne: null } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            title
            date
            formattedDate: date(formatString: "MMMM D, YYYY")
            standardDate: date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`