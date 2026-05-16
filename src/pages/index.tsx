import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout } from 'layouts'
import Helmet from 'react-helmet'
import config from 'config/siteConfig'
import Data from 'models/Data'
import styled, { keyframes } from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Wrapper, SEO, MeetScheduler } from 'components'

interface Props {
  data: Data
}

const HomePage = (props: Props) => {
  const edges = props.data?.allMdx?.edges ?? []

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
        <meta name="msvalidate.01" content="87718E2850BE4D9DEF5A7E5F08938B6F" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO path="/" data={{ title: config.siteTitleAlt }} />

      <PageRoot>
        {/* ── Hero ── */}
        <Hero>
          <HeroInner>
            <Eyebrow>
              <EyebrowDot />
              <span>Systems · Security · Dhaka, BD</span>
            </Eyebrow>
            <HeroTitle>{config.siteTitle}</HeroTitle>
            <HeroSub>{config.siteDescription}</HeroSub>
            <NavRow>
              <NavPill to="/blog">Blog</NavPill>
              <NavPill to="/publications">Publications</NavPill>
              <NavPill to="/contact">Contact</NavPill>
            </NavRow>
          </HeroInner>
          <CornerLabel>Est. Dhaka, 2024</CornerLabel>
        </Hero>

        {/* ── Divider ── */}
        <Divider>
          <DividerLine />
          <DividerGlyph>§</DividerGlyph>
          <DividerLine />
        </Divider>

        {/* ── About body ── */}
        <AboutSection>
          {edges.map((post) => (
            <AboutBody key={post.node.frontmatter.title}>
              <MDXRenderer>{post.node.body}</MDXRenderer>
            </AboutBody>
          ))}
        </AboutSection>

        <MeetScheduler />

        {/* ── Footer strip ── */}
        <FooterStrip>
        </FooterStrip>
      </PageRoot>
    </Layout>
  )
}

export default HomePage
export const Head = () => <SEO />

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { title: { eq: "About" } } }) {
      edges {
        node {
          fields { path }
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            standardDate: date(formatString: "YYYY-MM-DD")
          }
          body
        }
      }
    }
  }
`

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0);    }
`

// ─── Layout ───────────────────────────────────────────────────────────────────

const PageRoot = styled.div`
  min-height: 100vh;
  background: #0c0c0b;
  color: #e8e4dc;
  font-family: 'Lora', Georgia, serif;
`

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = styled.section`
  position: relative;
  max-width: 52rem;
  margin: 0 auto;
  padding: 7rem 2rem 4rem;
  animation: ${fadeUp} 0.7s ease both;
`

const HeroInner = styled.div``

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7a7060;
  margin-bottom: 1.5rem;
`

const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #c8a97e;
  flex-shrink: 0;
`

const HeroTitle = styled.h1`
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: #f0ece4;
  margin: 0 0 1rem;
`

const HeroSub = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  line-height: 1.7;
  color: #7a7060;
  max-width: 36rem;
  margin: 0 0 2.5rem;
`

const NavRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const NavPill = styled(Link)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c8a97e;
  border: 1px solid #3a3428;
  padding: 0.4rem 1rem;
  border-radius: 2px;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: #c8a97e;
    color: #0c0c0b;
  }
`

const CornerLabel = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: #3a3428;
  text-transform: uppercase;

  @media (max-width: 480px) {
    display: none;
  }
`

// ─── Divider ──────────────────────────────────────────────────────────────────

const Divider = styled.div`
  display: flex;
  align-items: center;
  max-width: 52rem;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 1rem;
`

const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: #2a2520;
`

const DividerGlyph = styled.span`
  font-family: 'Lora', serif;
  font-size: 1rem;
  color: #3a3428;
`

// ─── About ────────────────────────────────────────────────────────────────────

const AboutSection = styled.section`
  max-width: 52rem;
  margin: 0 auto;
  padding: 3.5rem 2rem 5rem;
  animation: ${fadeUp} 0.7s 0.15s ease both;
`

const AboutBody = styled.article`
  font-size: 1.05rem;
  line-height: 1.85;
  color: #b8b0a2;

  p { margin: 0 0 1.3rem; }

  strong {
    color: #e8e4dc;
    font-weight: 500;
  }

  em { color: #c8a97e; font-style: italic; }

  h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #7a7060;
    margin: 2.5rem 0 0.75rem;
  }

  hr {
    border: none;
    border-top: 1px solid #2a2520;
    margin: 2rem 0;
  }

  a {
    color: #c8a97e;
    text-decoration: underline;
    text-underline-offset: 3px;
    &:hover { color: #e8e4dc; }
  }
`

// ─── Footer strip ─────────────────────────────────────────────────────────────

const FooterStrip = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem;
  border-top: 1px solid #1e1c18;
`

const FooterLink = styled(Link)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a4438;
  text-decoration: none;
  transition: color 0.15s ease;
  &:hover { color: #c8a97e; }
`

const FooterSep = styled.span`
  color: #2a2520;
  font-size: 0.7rem;
`