import React from 'react'
import styled, { keyframes } from 'styled-components'
import config from 'config/siteConfig'
import { CollapseMenu, MenuButton } from 'layouts/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faRssSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { media } from 'utils/media'

interface Props {
  toggleMenuOpen: () => void
  menuIsOpen: boolean
}

export const Navbar = (props: Props) => {
  const { toggleMenuOpen, menuIsOpen } = props

  return (
    <>
      <Bar menuIsOpen={menuIsOpen}>
        <FlexContainer>
          <Link
            to="/"
            style={{
              height: '4.2rem',
              padding: '1.0rem',
              margin: '0.5rem 0',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src="/assets/home.png" />
          </Link>

          <NavLinks>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/credits">Credits</Link></li>
            <li><Link to="/meet">Let's Meet</Link></li>

            {/* Dhaka Finder */}
            <li>
              <DhakaFinderBtn to="/dhaka-finder">
                Dhaka Finder ✨
              </DhakaFinderBtn>
            </li>

            <li>
              <a href="/search">
                <FontAwesomeIcon icon={faSearch} fixedWidth />
              </a>
            </li>
            <li>
              <Link to="/feed.xml">
                <FontAwesomeIcon icon={faRssSquare} fixedWidth />
              </Link>
            </li>
          </NavLinks>

          <BurgerWrapper>
            <MenuButton
              menuIsOpen={menuIsOpen}
              toggleMenuOpen={toggleMenuOpen}
              transparent={false}
            />
          </BurgerWrapper>
        </FlexContainer>
      </Bar>
      <CollapseMenu menuIsOpen={menuIsOpen} toggleMenuOpen={toggleMenuOpen} />
    </>
  )
}

// ─── Animations ───────────────────────────────────────────────────────────────

const flowGradient = keyframes`
  0%   { background-position: 0%   50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0%   50%; }
`

const pulseGlow = keyframes`
  0%   { box-shadow: 0 0 0 0px rgba(168, 85, 247, 0.4); }
  70%  { box-shadow: 0 0 0 6px rgba(168, 85, 247, 0);   }
  100% { box-shadow: 0 0 0 0px rgba(168, 85, 247, 0);   }
`

// ─── Styled Components ────────────────────────────────────────────────────────

const DhakaFinderBtn = styled(Link)`
  && {
    display: inline-flex;
    align-items: center;
    margin-left: 0.5rem;
    padding: 0.35rem 1rem;
    color: #ffffff;
    background: linear-gradient(270deg, #3b82f6, #a855f7, #14b8a6, #3b82f6);
    background-size: 300% 300%;
    border-radius: 999px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.75rem;
    animation:
      ${flowGradient} 4s ease infinite,
      ${pulseGlow} 2s infinite;
    transition: transform 0.2s ease, filter 0.2s ease;

    &:hover {
      color: #ffffff;
      transform: translateY(-2px);
      filter: brightness(1.15);
    }
  }
`

const Image = styled.img`
  margin: 0;
  height: 65%;
  /* Invert the logo so it reads on dark bg.
     Remove this line if your logo is already light-coloured. */
  filter: invert(1) brightness(0.85);
`

const Bar = styled.nav<{ menuIsOpen: boolean }>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #0c0c0b;
  border-bottom: 1px solid ${({ menuIsOpen }) => (menuIsOpen ? 'transparent' : '#1e1c18')};
  z-index: 1000;
  font-size: 0.75rem;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 0.5rem;
  justify-content: space-between;
`

const NavLinks = styled.ul`
  justify-self: stretch;
  list-style-type: none;
  margin: auto 0 auto auto;

  li {
    display: inline-block;
    padding: 0;
    margin: auto 0;
    line-height: 1.5rem;

    @media ${media.phone} {
      display: none;
    }
  }

  a {
    display: inline-block;
    /* Use JetBrains Mono if loaded, fall back gracefully */
    font-family: 'JetBrains Mono', ${config.headerFontFamily}, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    color: #7a7060;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem;
    transition: color 0.15s ease;

    &:hover {
      color: #c8a97e;
    }
  }
`

const BurgerWrapper = styled.div`
  display: none;

  @media ${media.phone} {
    display: initial;
    margin: auto 0;
  }
`