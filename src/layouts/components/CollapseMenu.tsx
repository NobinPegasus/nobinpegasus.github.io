import React from 'react'
import styled, { keyframes } from 'styled-components'
import config from 'config/siteConfig'
import { Link } from 'gatsby'

export const CollapseMenu: React.FC<{
  menuIsOpen: boolean
  toggleMenuOpen: () => void
}> = ({ menuIsOpen, toggleMenuOpen }) => {
  if (!menuIsOpen) return null

  return (
    <TapIntercepter onClick={toggleMenuOpen}>
      <CollapseWrapper>
        <NavLinks>
          <li><Link to="/blog"         onClick={toggleMenuOpen}>Blog</Link></li>
          <li><Link to="/"             onClick={toggleMenuOpen}>About</Link></li>  {/* ← was /about */}
          <li><Link to="/publications" onClick={toggleMenuOpen}>Publications</Link></li>
          <li><Link to="/contact"      onClick={toggleMenuOpen}>Contact</Link></li>
          <li><Link to="/credits"      onClick={toggleMenuOpen}>Credits</Link></li>
          <li><Link to="/meet" onClick={toggleMenuOpen}>Let's Meet</Link></li>
          <li>
            <DhakaFinderBtn to="/dhaka-finder" onClick={toggleMenuOpen}>
              Dhaka Finder ✨
            </DhakaFinderBtn>
          </li>
          <li><a href="/search"   onClick={toggleMenuOpen}>Search</a></li>
          <li><a href="/feed.xml" onClick={toggleMenuOpen}>Feed</a></li>
        </NavLinks>
      </CollapseWrapper>
    </TapIntercepter>
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

const TapIntercepter = styled.div`
  position: fixed;
  top: 0; bottom: 0; left: 0; right: 0;
  z-index: 90;
  background: rgba(12, 12, 11, 0.5);
`

const CollapseWrapper = styled.div`
  background: #0f0e0d;
  border-bottom: 1px solid #1e1c18;
  position: fixed;
  top: 3.2rem;
  left: 0; right: 0;
  z-index: 95;
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 0.75rem 1.25rem 1rem;
  margin: 0;

  li { margin-bottom: 0.5rem; }

  a {
    font-family: 'JetBrains Mono', ${config.headerFontFamily}, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    line-height: 1.6rem;
    color: #7a7060;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover { color: #c8a97e; }
  }
`