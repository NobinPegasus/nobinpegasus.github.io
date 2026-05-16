import React from 'react'
import styled, { keyframes } from 'styled-components'
import { media } from 'utils/media'
import config from 'config/siteConfig'

// ─── Animations ───────────────────────────────────────────────────────────────

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`

const scanline = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`

// ─── Styled Components ────────────────────────────────────────────────────────

const HeaderWrapper = styled.header<{ left?: boolean }>`
  position: relative;
  background: transparent;
  text-align: ${({ left }) => (left ? 'left' : 'left')};
  z-index: 5;
  margin-top: 3.2rem; /* navbar height */
  overflow: hidden;

  /* subtle scanline sweep */
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 40px;
    background: linear-gradient(
      to bottom,
      rgba(200, 169, 126, 0.03),
      transparent
    );
    animation: ${scanline} 6s linear infinite;
    pointer-events: none;
  }
`

const Terminal = styled.div`
  border-bottom: 1px solid #1e1c18;
  padding: 0.6rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media ${media.phone} {
    padding: 0.5rem 1rem;
  }
`

const Dots = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;

  span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;

    &:nth-child(1) { background: #3d3a32; }
    &:nth-child(2) { background: #3d3a32; }
    &:nth-child(3) { background: #3d3a32; }
  }
`

const Prompt = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', ${config.headerFontFamily}, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  overflow: hidden;
`

const PromptUser = styled.span`
  color: #7a7060;
`

const PromptPath = styled.span`
  color: #3d3a32;
`

const PromptTitle = styled.span`
  color: #c8a97e;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
`

const Cursor = styled.span`
  display: inline-block;
  width: 7px;
  height: 0.85em;
  background: #c8a97e;
  opacity: 0.7;
  margin-left: 2px;
  vertical-align: middle;
  animation: ${blink} 1.2s step-end infinite;
`

const Eyebrow = styled.span`
  font-family: 'JetBrains Mono', ${config.headerFontFamily}, monospace;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #3d3a32;
  margin-left: auto;
  flex-shrink: 0;

  @media ${media.phone} { display: none; }
`

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  children: any
  banner?: string
  bannerAttribution?: string
  left?: boolean
  eyebrow?: string
}

export const Header = ({ children, eyebrow }: Props) => {
  // Extract text from children (SectionTitle renders an h1/h2/div)
  const label = typeof children === 'string'
    ? children
    : children?.props?.children ?? ''

  return (
    <HeaderWrapper>
      <Terminal>
        <Dots>
          <span /><span /><span />
        </Dots>
        <Prompt>
          <PromptUser>nobin</PromptUser>
          <PromptPath>~/</PromptPath>
          <PromptTitle>{label}</PromptTitle>
          <Cursor />
        </Prompt>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      </Terminal>
    </HeaderWrapper>
  )
}