import * as React from 'react'
import { Header, Wrapper, SectionTitle, SEO } from 'components'
import { Layout } from 'layouts'
import { Content } from 'layouts/components'
import Helmet from 'react-helmet'
import config from 'config/siteConfig'
import styled from 'styled-components'

const DhakaFinder = () => {
  return (
    <Layout>
      <Helmet title={`Dhaka Finder | ${config.siteTitle}`} />
      <SEO
        path="/dhaka-finder/"
        data={{
          title: 'Dhaka Delivery Zone Finder',
          description: 'Check if an address is inside Dhaka City, Dhaka Suburbs, or Outside Dhaka.'
        }}
      />
      <Header banner="/assets/contact3.jpg">
        <SectionTitle>Dhaka Finder</SectionTitle>
      </Header>
      <Wrapper>
        <Content>
          <IframeWrapper>
            <iframe
              src="https://dhaka-finder.vercel.app"
              title="Dhaka Delivery Zone Finder"
            />
          </IframeWrapper>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default DhakaFinder

const IframeWrapper = styled.div`
  width: 100%;
  height: 80vh;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
`