'use client'

import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const profiles = [
  { number: '01', name: 'J Profile', variants: 'Left / Right / Full', tone: 'Walnut', shape: 'j' },
  { number: '02', name: 'Concave', variants: 'Left / Right / Center', tone: 'Sage', shape: 'concave' },
  { number: '03', name: 'Teardrop', variants: 'Center', tone: 'Oak', shape: 'teardrop' },
  { number: '04', name: 'Full C', variants: 'Full', tone: 'Greige', shape: 'c' },
  { number: '05', name: 'W Profile', variants: 'W Profile', tone: 'Charcoal', shape: 'w' },
  { number: '06', name: 'Diamond', variants: 'Left / Right / Center', tone: 'Oak', shape: 'diamond' },
  { number: '07', name: 'Straight', variants: 'Straight', tone: 'White', shape: 'straight' },
  { number: '08', name: '45° Profile', variants: '45° Edge', tone: 'Walnut', shape: 'angle' },
]

function Logo() {
  return <div className="logo-mark" aria-label="Everlast Design and Build">EVERLAST<span>DESIGN + BUILD</span></div>
}

function ProfileShape({ type }: { type: string }) {
  return <div className={`profile-shape shape-${type}`} aria-hidden="true"><span /></div>
}

export function CataloguePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="catalogue-shell">
      <header className="site-header">
        <Logo />
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
          <a href="#applications" onClick={() => setMenuOpen(false)}>Applications</a>
          <a href="#specifications" onClick={() => setMenuOpen(false)}>Specifications</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Request catalogue <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img src="/everlast-hero.png" alt="Warm minimalist kitchen with seamless walnut and greige cabinetry" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow light">Edge Profile Collection / 2026</p>
          <h1 id="hero-title">The quiet<br /><em>edge</em> of luxury.</h1>
          <p className="hero-intro">Precision-engineered soft-forming solutions for the next generation of handleless interiors.</p>
          <a className="text-link light" href="#collection">Explore the collection <ArrowUpRight size={16} /></a>
        </div>
        <div className="hero-meta"><span>01</span><span className="hero-line" /><span>08</span><span>Profiles</span></div>
      </section>

      <section className="intro-section" id="collection">
        <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>The collection</span></div>
        <div className="intro-grid">
          <h2>Designed to disappear.<br /><em>Made to be felt.</em></h2>
          <div>
            <p className="lead-copy">A considered system of seamless edge profiles that brings softness, precision and permanence to contemporary cabinetry.</p>
            <p className="body-copy">From a quiet J edge on a bedroom wardrobe to the architectural sweep of a full C on a kitchen island, every profile is engineered around the way a space is lived in.</p>
            <a className="text-link" href="#specifications">View technical approach <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="section-heading"><div><p className="eyebrow">Eight expressions</p><h2>Find your <em>form.</em></h2></div><p className="section-note">Every profile is available in 18 mm panel construction with PVC edge tape and our signature soft-forming process.</p></div>
        <div className="profile-grid">
          {profiles.map((profile) => <article className="profile-card" key={profile.number}>
            <div className={`profile-visual tone-${profile.tone.toLowerCase()}`}><span className="profile-number">{profile.number}</span><ProfileShape type={profile.shape} /><span className="profile-material">{profile.tone}</span></div>
            <div className="profile-info"><div><h3>{profile.name}</h3><p>{profile.variants}</p></div><ArrowUpRight size={17} /></div>
          </article>)}
        </div>
      </section>

      <section className="application-section" id="applications">
        <div className="application-image"><div className="application-caption"><span>Application 01</span><strong>Handleless kitchen / Full C</strong></div></div>
        <div className="application-copy"><p className="eyebrow">In context</p><h2>Everyday spaces,<br /><em>elevated.</em></h2><p className="body-copy">A seamless edge is more than a detail. It changes the way light moves across a room, the way a hand finds a drawer, and the way a material feels over time.</p><a className="text-link" href="#contact">See applications <ArrowUpRight size={16} /></a><div className="application-index"><span>01</span><span className="index-line" /><span>03</span></div></div>
      </section>

      <section className="spec-section" id="specifications">
        <div className="section-kicker"><span>02</span><span className="kicker-line" /><span>Made precisely</span></div>
        <div className="spec-grid"><div><h2>The details<br /><em>matter.</em></h2><p className="body-copy">Precision is felt in the smallest moments. Our process creates a continuous, tactile transition between panel and edge, without compromise.</p></div><div className="spec-list"><div><span>Panel thickness</span><strong>18 mm</strong></div><div><span>Edge tape</span><strong>0.5 — 1.0 mm PVC</strong></div><div><span>Process</span><strong>Soft-forming technology</strong></div><div><span>Applications</span><strong>Residential + commercial</strong></div></div></div>
      </section>

      <footer className="site-footer" id="contact"><div><Logo /><p className="footer-tagline">Seamless by design.<br />Everlasting by nature.</p></div><div className="footer-links"><a href="mailto:studio@everlastdesign.sg">studio@everlastdesign.sg</a><a href="tel:+6561234567">+65 6123 4567</a><span>Singapore / 2026</span></div><div className="footer-bottom"><span>Everlast Design and Build Pte Ltd</span><a href="#hero-title">Back to top ↑</a></div></footer>
    </main>
  )
}
