import * as React from 'react'
import { Wrapper, SEO } from 'components'
import { Layout } from 'layouts'
import { Content } from 'layouts/components'
import Helmet from 'react-helmet'
import config from 'config/siteConfig'
import styled from 'styled-components'
import { media } from 'utils/media'

const DhakaFinder = () => {
  return (
    <Layout>
      <Helmet title={`Dhaka Finder | ${config.siteTitle}`} />

      <SEO
        path="/dhaka-finder/"
        data={{
          title: 'Dhaka Zone Finder',
          description:
            "Check if an address is inside Dhaka City"
        }}
      />

      <Wrapper>
        <Content>
          <ToolSection>
            <IframeFrame>
              <iframe
                src="https://dhaka-finder.vercel.app"
                title="Dhaka Zone Finder"
                loading="lazy"
              />
            </IframeFrame>
          </ToolSection>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default DhakaFinder

const ToolSection = styled.section`
  width: 100%;
  margin: 2rem auto 4rem;

  @media ${media.phone} {
    margin: 1rem auto 3rem;
  }
`

const IframeFrame = styled.div`
  width: 100%;
  height: 84vh;
  overflow: hidden;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
    background: #ffffff;
  }

  @media ${media.phone} {
    height: 88vh;
    border-radius: 14px;
  }
`