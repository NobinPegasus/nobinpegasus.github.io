import * as React from 'react'
import { Header, Wrapper, SectionTitle, SectionHeader, SEO } from 'components'
import { Layout } from 'layouts'
import { Content } from 'layouts/components'
import Helmet from 'react-helmet'
import config from 'config/siteConfig'
import { theme } from 'config/theme'
import styled from 'styled-components'
import { media } from 'utils/media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sendEmail  from 'layouts/components/sendEmail'
import {
  faGithub,
  faTwitter,
  faMastodon,
  faStackOverflow,
  faInstagram,
  faSoundcloud,
  faYoutube,
  faLinkedin,
  faDiscord
} from '@fortawesome/free-brands-svg-icons'
import { RightImage } from 'components/RightImage'
import { Link } from 'gatsby'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <Layout>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <SEO
        path="/contact/"
        data={{
          title: 'NobinPegasus Portfolio',
          description: "NobinPegasus's Professional Portfolio"
        }}
      />
      <Header banner="/assets/contact3.jpg">
        <SectionTitle>Contact</SectionTitle>
      </Header>
      <Wrapper>
        <Content>
          <_Contact />
        </Content>
      </Wrapper>
    </Layout>
  )
}

// Gatsby needs this default export to work.
// eslint-disable-next-line import/no-default-export
export default Contact

const _Contact: React.FC = () => (
  <>

    <Footer>
      <FooterIcons>
        <BigFAIcon>
          <FooterLink
            href="https://github.com/nobinpegasus"
            title="Zeshan Ahmed Nobin"
            rel="me"
          >
            <FontAwesomeIcon icon={faGithub} />
          </FooterLink>
        </BigFAIcon>
        <BigFAIcon>
          <FooterLink
            href="https://stackoverflow.com/users/12936009/nobinpegasus"
            title="Stack Overflow"
            rel="me"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </FooterLink>
        </BigFAIcon>
        <BigFAIcon>
          <FooterLink
            href="https://twitter.com/zeshan_nobin"
            title="Twitter"
            rel="me"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </FooterLink>
        </BigFAIcon>
      </FooterIcons>
    </Footer>

    <Footer>
      <FooterIcons>
        <BigFAIcon>
          <FooterLink
            href="http://linkedin.com/in/zeshanahmednobin"
            title="LinkedIn"
            rel="me"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </FooterLink>
        </BigFAIcon>
        <BigFAIcon>
          <FooterLink
            href="https://discordapp.com/users/NobinPegasus#5654"
            title="Discord"
            rel="me"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </FooterLink>
        </BigFAIcon>
        <BigFAIcon>


          <FooterLink
            href = "#"
            title="Email"
            rel="me"
            onClick={sendEmail}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </FooterLink>
        </BigFAIcon>
      </FooterIcons>
    </Footer>
      
  </>
)

const LeftDiv = styled.div`
  max-width: 50%;

  @media ${media.phone} {
    max-width: initial;
  }
`

const FigCaption = styled.figcaption`
  display: block;
  padding: 0;
  text-align: left;

  width: 35%;
  max-width: 325px;
  position: relative;
  right: -65%;
  top: 2rem;

  &:before {
    content: '';
    display: block;
    color: white;
    position: relative;
    width: 357px;
    height: 164px;
    right: 397px;
    top: 3.6em;
    background-image: url(/assets/portfolio/callout.svg);
    @media ${media.tablet} {
      width: 205px;
      max-width: initial;
      height: 94px;
      top: 2em;
      right: 235px;
      background-image: url(/assets/portfolio/callout_small.svg);
    }

    @media ${media.phone} {
      display: none;
    }
  }

  h2 {
    font-size: 2.5rem;
  }
  @media ${media.tablet} {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
  @media ${media.phone} {
    padding: 0rem 1rem;
    text-align: center;
    width: 100%;
    max-width: initial;
    position: initial;
    right: initial;

    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
`

const TitleCaption: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle
}) => (
  <FigCaption>
    <h2 style={{ margin: '0' }}>{title}</h2>
    <p style={{ margin: '0' }}>{subtitle}</p>
  </FigCaption>
)

const Footer = styled.footer`
  text-align: center;
  padding-top: 1rem;

  span {
    margin: 0 1rem;

    @media ${media.phone} {
      margin: 0 0.3rem;
    }
  }
`

const FooterLink = styled.a`
  color: ${theme.colors.grey.default};
  &:hover {
    color: ${theme.colors.primary};
  }
`

const BigFAIcon: React.FC = (props) => (
  <span className="fa-layers fa-fw fa-3x">{props.children}</span>
)

const FooterIcons = styled.div`
  margin: 1.5rem 0;
`

const ExposureIcon = styled.div`
  margin: auto;
  height: 60px; /* Matches Fontawesome */
  width: 53px;
  background: url('/assets/portfolio/exposure.png') no-repeat;
  background-size: contain;

  @media ${media.phone} {
    height: 42px;
    width: 37px;
  }

  &:hover {
    /* I don't like this at all, ugh. */
    background: url('/assets/portfolio/exposure_hover.png') no-repeat;
    background-size: contain;
  }
`

