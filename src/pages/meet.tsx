import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Layout } from 'layouts'
import { SEO } from 'components'
import { MeetScheduler } from 'components/MeetScheduler'
import Helmet from 'react-helmet'
import config from 'config/siteConfig'

const MeetPage = () => (
  <Layout>
    <Helmet>
      <title>{`Let's Meet · ${config.siteTitle}`}</title>
    </Helmet>
    <SEO path="/meet" data={{ title: "Let's Meet" }} />

    <PageRoot>
      <Header>
        <HeroInner>
          <Eyebrow>
            <EyebrowDot />
            <span>Dhaka, BD</span>
          </Eyebrow>
          <PageTitle>Let's meet.</PageTitle>
          <PageSub>
            Coffee, football, a founder's chat, or a deep dive into security —
            pick a vibe and send a request.
          </PageSub>
        </HeroInner>
      </Header>

      <MeetScheduler />
    </PageRoot>
  </Layout>
)

export default MeetPage
export const Head = () => <SEO />

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0);    }
`

// ─── Styled ───────────────────────────────────────────────────────────────────

const PageRoot = styled.div`
  min-height: 100vh;
  background: #0c0c0b;
  color: #e8e4dc;
  font-family: 'Lora', Georgia, serif;
`

const Header = styled.section`
  max-width: 52rem;
  margin: 0 auto;
  padding: 7rem 2rem 3rem;
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

const PageTitle = styled.h1`
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 400;
  line-height: 1.1;
  color: #f0ece4;
  margin: 0 0 1rem;
`

const PageSub = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  line-height: 1.8;
  color: #7a7060;
  max-width: 34rem;
  margin: 0;
`