/**
 * MeetScheduler.tsx
 *
 * Drop into src/components/MeetScheduler.tsx
 *
 * Form submissions go to Formspree (free, no backend required).
 * 1. Create a free account at https://formspree.io
 * 2. Create a new form → copy your form ID (looks like "xpwzgkrd")
 * 3. Replace YOUR_FORMSPREE_ID below with that ID.
 *
 * Usage in index.tsx (after <AboutSection>):
 *   import { MeetScheduler } from 'components/MeetScheduler'
 *   ...
 *   <MeetScheduler />
 */

import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

// ─── Config ───────────────────────────────────────────────────────────────────

const YOUR_FORMSPREE_ID = 'xgodgpnl'

// ─── Types ────────────────────────────────────────────────────────────────────

type MeetType = 'coffee' | 'football' | 'founder' | 'security'
type Status = 'idle' | 'loading' | 'success' | 'error'

interface Meet {
  id: MeetType
  symbol: string
  title: string
  sub: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const MEETS: Meet[] = [
  { id: 'coffee',   symbol: '☕', title: 'Coffee chat',    sub: 'A slow, unhurried conversation'      },
  { id: 'football', symbol: '⚽', title: 'Football',       sub: 'Somewhere in Dhaka, weekends'        },
  { id: 'founder',  symbol: '◈',  title: "Founder's chat", sub: 'Products, startups, hard problems'   },
  { id: 'security', symbol: '⌬',  title: 'Security chat',  sub: 'Threat models, eBPF, CTFs, hacking'  },
]

const TIMES = [
  'Weekday morning',
  'Weekday evening',
  'Saturday',
  'Sunday',
  'Flexible',
]

// ─── Component ────────────────────────────────────────────────────────────────

export const MeetScheduler: React.FC = () => {
  const [meet, setMeet]     = useState<MeetType | null>(null)
  const [times, setTimes]   = useState<string[]>([])
  const [name, setName]     = useState('')
  const [email, setEmail]   = useState('')
  const [note, setNote]     = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const toggleTime = (t: string) =>
    setTimes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])

  const canSubmit = meet && times.length && name.trim() && email.trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('loading')

    const chosen = MEETS.find(m => m.id === meet)!
    try {
      const res = await fetch(`https://formspree.io/f/${YOUR_FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          meet_type:    chosen.title,
          availability: times.join(', '),
          name,
          email,
          note: note || '—',
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <Root>
        <SectionDivider>
          <DivLine /><DivGlyph>§</DivGlyph><DivLine />
        </SectionDivider>
        <SuccessBox>
          <SuccessGlyph>✓</SuccessGlyph>
          <SuccessTitle>Request received.</SuccessTitle>
          <SuccessSub>I'll reach out to you at {email} to sort the details.</SuccessSub>
          <ResetBtn type="button" onClick={() => {
            setStatus('idle'); setMeet(null); setTimes([])
            setName(''); setEmail(''); setNote('')
          }}>
            Send another →
          </ResetBtn>
        </SuccessBox>
      </Root>
    )
  }

  return (
    <Root>
      {/* <SectionDivider>
        <DivLine /><DivGlyph>§</DivGlyph><DivLine />
      </SectionDivider> */}

      <SectionHeader>
        <SectionLabel>Let's meet</SectionLabel>
        <SectionSub>
          If you're in Dhaka — or passing through — I'm always up for a real conversation.
          Pick a vibe and send a request.
        </SectionSub>
      </SectionHeader>

      <Form onSubmit={handleSubmit} noValidate>
        {/* Meet type */}
        <FieldLabel>What kind of meet?</FieldLabel>
        <MeetGrid>
          {MEETS.map(m => (
            <MeetCard
              key={m.id}
              type="button"
              $active={meet === m.id}
              onClick={() => setMeet(m.id)}
            >
              <MeetSymbol>{m.symbol}</MeetSymbol>
              <MeetTitle>{m.title}</MeetTitle>
              <MeetSub>{m.sub}</MeetSub>
            </MeetCard>
          ))}
        </MeetGrid>

        {/* Time */}
        <FieldLabel style={{ marginTop: '2rem' }}>When works for you?</FieldLabel>
        <ChipRow>
          {TIMES.map(t => (
            <Chip
              key={t}
              type="button"
              $active={times.includes(t)}
              onClick={() => toggleTime(t)}
            >
              {t}
            </Chip>
          ))}
        </ChipRow>

        {/* Contact */}
        <FieldLabel style={{ marginTop: '2rem' }}>Your details</FieldLabel>
        <InputRow>
          <InputWrap>
            <InputLabel>Name</InputLabel>
            <Input
              type="text"
              placeholder="Alex Reyes"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </InputWrap>
          <InputWrap>
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </InputWrap>
        </InputRow>
        <InputWrap style={{ marginTop: '0.75rem' }}>
          <InputLabel>Anything to add? <Muted>(optional)</Muted></InputLabel>
          <TextArea
            placeholder="What's on your mind, where in Dhaka you're based, or something you want to dig into..."
            value={note}
            onChange={e => setNote(e.target.value)}
            rows={3}
          />
        </InputWrap>

        {status === 'error' && (
          <ErrorMsg>Something went wrong — try again, or email me directly.</ErrorMsg>
        )}

        <SubmitBtn type="submit" disabled={!canSubmit || status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send request →'}
        </SubmitBtn>
      </Form>
    </Root>
  )
}

export default MeetScheduler

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0);    }
`

// ─── Styled components ────────────────────────────────────────────────────────

const Root = styled.section`
  max-width: 52rem;
  margin: 0 auto;
  padding: 0 2rem 5rem;
  animation: ${fadeUp} 0.6s 0.25s ease both;
`

const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`
const DivLine = styled.div`flex:1; height:1px; background:#2a2520;`
const DivGlyph = styled.span`font-family:'Lora',serif; font-size:1rem; color:#3a3428;`

const SectionHeader = styled.div`margin-bottom: 2rem;`

const SectionLabel = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7a7060;
  margin: 0 0 0.75rem;
  font-weight: 400;
`

const SectionSub = styled.p`
  font-family: 'Lora', Georgia, serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #b8b0a2;
  margin: 0;
  max-width: 36rem;
`

const Form = styled.form``

const FieldLabel = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #4a4438;
  margin: 0 0 0.75rem;
`

const MeetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const MeetCard = styled.button<{ $active: boolean }>`
  text-align: left;
  background: ${p => p.$active ? '#1a1712' : 'transparent'};
  border: 1px solid ${p => p.$active ? '#c8a97e' : '#2a2520'};
  border-radius: 2px;
  padding: 1rem 1.1rem;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;

  &:hover {
    border-color: ${p => p.$active ? '#c8a97e' : '#3a3428'};
  }
`

const MeetSymbol = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  line-height: 1;
`

const MeetTitle = styled.div`
  font-family: 'Lora', Georgia, serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #e8e4dc;
  margin-bottom: 0.2rem;
`

const MeetSub = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: #5a5248;
  line-height: 1.5;
`

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Chip = styled.button<{ $active: boolean }>`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.9rem;
  border-radius: 2px;
  border: 1px solid ${p => p.$active ? '#c8a97e' : '#2a2520'};
  background: ${p => p.$active ? '#1a1712' : 'transparent'};
  color: ${p => p.$active ? '#c8a97e' : '#7a7060'};
  cursor: pointer;
  transition: border-color 0.12s, color 0.12s, background 0.12s;

  &:hover {
    border-color: ${p => p.$active ? '#c8a97e' : '#3a3428'};
    color: ${p => p.$active ? '#c8a97e' : '#b8b0a2'};
  }
`

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const InputWrap = styled.div`display: flex; flex-direction: column; gap: 0.35rem;`

const InputLabel = styled.label`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.63rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a4438;
`

const inputBase = `
  font-family: 'Lora', Georgia, serif;
  font-size: 0.9rem;
  background: transparent;
  border: 1px solid #2a2520;
  border-radius: 2px;
  padding: 0.55rem 0.8rem;
  color: #e8e4dc;
  outline: none;
  transition: border-color 0.12s;
  width: 100%;
  box-sizing: border-box;

  &::placeholder { color: #3a3428; }
  &:focus { border-color: #c8a97e; }
`

const Input = styled.input`${inputBase}`
const TextArea = styled.textarea`${inputBase} resize: none; line-height: 1.7;`

const Muted = styled.span`color: #3a3428;`

const ErrorMsg = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  color: #a05a40;
  margin: 1rem 0 0;
`

const SubmitBtn = styled.button`
  margin-top: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.6rem 1.4rem;
  border: 1px solid #3a3428;
  border-radius: 2px;
  background: transparent;
  color: #c8a97e;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  &:hover:not(:disabled) {
    background: #c8a97e;
    color: #0c0c0b;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

// ─── Success state ────────────────────────────────────────────────────────────

const SuccessBox = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SuccessGlyph = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  color: #c8a97e;
  margin-bottom: 0.5rem;
`

const SuccessTitle = styled.p`
  font-family: 'Lora', Georgia, serif;
  font-size: 1.2rem;
  color: #e8e4dc;
  margin: 0;
`

const SuccessSub = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: #7a7060;
  margin: 0 0 1.25rem;
  line-height: 1.7;
`

const ResetBtn = styled.button`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  background: transparent;
  border: none;
  color: #c8a97e;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 3px;
  &:hover { color: #e8e4dc; }
`