import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';

const services = [
  { icon: 'fa-magnifying-glass-chart', title: 'SEO & Organic Growth', desc: 'Dominate search rankings with technical audits, keyword strategy, and link-building that drives compounding traffic month after month.', stat: '+320%', statLabel: 'Avg. Traffic Lift', color: '#1565C0', link: '/services/seo-optimization' },
  { icon: 'fa-bullhorn', title: 'PPC & Paid Media', desc: 'Maximize ROI with precision-targeted Google Ads, Meta, and LinkedIn campaigns managed by certified paid-media specialists.', stat: '4.8x', statLabel: 'Avg. ROAS', color: '#0288D1', link: '/services/ppc-advertising' },
  { icon: 'fa-share-nodes', title: 'Social Media Marketing', desc: 'Build brand authority across Instagram, Facebook, LinkedIn & TikTok with data-backed content and community strategies.', stat: '2.1M+', statLabel: 'Reach Generated', color: '#29B6F6', link: '/services/social-media-marketing' },
  { icon: 'fa-pen-nib', title: 'Content Marketing', desc: 'From blog articles to video scripts and whitepapers — content that educates, converts, and ranks on page one.', stat: '3x', statLabel: 'Lead Quality Boost', color: '#5C6BC0', link: '/services/content-marketing' },
  { icon: 'fa-envelope-open-text', title: 'Email Marketing', desc: 'Automated nurture flows, segmented campaigns, and A/B-optimized messaging that keep your audience engaged and converting.', stat: '42%', statLabel: 'Open Rate (avg)', color: '#00BCD4', link: '/services/email-marketing' },
  { icon: 'fa-code', title: 'Web Design & CRO', desc: 'High-converting landing pages and full website builds focused on UX, speed scores, and measurable conversion uplift.', stat: '+68%', statLabel: 'Conversion Rate', color: '#26C6DA', link: '/services/web-design' },
];

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served', icon: 'fa-users' },
  { value: 12, suffix: 'M+', label: 'Revenue Generated', icon: 'fa-sack-dollar' },
  { value: 98, suffix: '%', label: 'Client Retention', icon: 'fa-heart' },
  { value: 11, suffix: ' yrs', label: 'Industry Experience', icon: 'fa-award' },
];

const process = [
  { num: '01', title: 'Discovery & Audit', desc: 'We deep-dive into your brand, competitors, and digital footprint to uncover gaps and prioritise the highest-impact opportunities.', icon: 'fa-binoculars' },
  { num: '02', title: 'Strategy Blueprint', desc: 'A bespoke growth roadmap is crafted — channels, KPIs, timelines, and budget allocation all aligned to your specific goals.', icon: 'fa-map' },
  { num: '03', title: 'Execute & Launch', desc: 'Our specialists activate campaigns, create assets, and deploy tech integrations with precision and speed.', icon: 'fa-rocket' },
  { num: '04', title: 'Optimise & Scale', desc: 'Continuous A/B testing, analytics reviews, and iteration ensure your results compound month over month.', icon: 'fa-chart-line' },
];

const industries = [
  { name: 'E-Commerce', icon: 'fa-bag-shopping' },
  { name: 'SaaS & Tech', icon: 'fa-microchip' },
  { name: 'Healthcare', icon: 'fa-heart-pulse' },
  { name: 'Real Estate', icon: 'fa-building' },
  { name: 'Education', icon: 'fa-graduation-cap' },
  { name: 'Finance', icon: 'fa-coins' },
  { name: 'Hospitality', icon: 'fa-hotel' },
  { name: 'Retail', icon: 'fa-store' },
];

const tools = [
  'Google Analytics', 'SEMrush', 'HubSpot', 'Salesforce',
  'Meta Ads', 'Mailchimp', 'Ahrefs', 'Hotjar',
  'Google Ads', 'Klaviyo', 'Webflow', 'Zapier',
];

const caseStudies = [
  {
    client: 'TechFlow SaaS',
    industry: 'Software',
    challenge: 'Low trial-to-paid conversion and high customer acquisition cost from paid channels.',
    result: 'Reduced CAC by 52% and grew MRR by $180K in 6 months through funnel redesign and PPC restructure.',
    metrics: [{ val: '52%', lbl: 'CAC Reduction' }, { val: '$180K', lbl: 'MRR Growth' }, { val: '3.2x', lbl: 'ROAS' }],
    icon: 'fa-microchip', color: '#1565C0',
  },
  {
    client: 'UrbanWear Co.',
    industry: 'E-Commerce Fashion',
    challenge: 'Plateaued organic traffic and poor email revenue despite a large subscriber list.',
    result: 'SEO overhaul plus email segmentation drove 210% traffic growth and 4x email revenue in 9 months.',
    metrics: [{ val: '210%', lbl: 'Traffic Growth' }, { val: '4x', lbl: 'Email Revenue' }, { val: '41%', lbl: 'Open Rate' }],
    icon: 'fa-bag-shopping', color: '#0288D1',
  },
  {
    client: 'GreenSpace Clinics',
    industry: 'Healthcare',
    challenge: 'Near-zero online visibility and minimal appointment bookings coming from digital channels.',
    result: 'Local SEO and Google Ads strategy generated 1,200+ new patient enquiries in Q1 alone.',
    metrics: [{ val: '1,200+', lbl: 'New Enquiries' }, { val: '#1', lbl: 'Local Rank' }, { val: '68%', lbl: 'Booking Rate' }],
    icon: 'fa-heart-pulse', color: '#29B6F6',
  },
];

const testimonials = [
  { name: 'Georgia Voll', role: 'CEO, TechFlow', text: 'LearnSpace Digital completely transformed our pipeline. Qualified leads tripled in 90 days and our sales team has never been busier.', rating: 5 },
  { name: 'Marcus Reid', role: 'Founder, UrbanWear', text: 'Their data-first approach is genuinely different. They don\'t just run ads — they architect growth systems. ROI speaks for itself.', rating: 5 },
  { name: 'Ellyse Perry', role: 'Director, GreenSpace', text: 'Patient enquiries went through the roof after the local SEO campaign. Professional, responsive, and genuinely invested in results.', rating: 5 },
  { name: 'Lauren Bell', role: 'Marketing Director, NextGen', text: 'Traffic up 200%, bounce rate down, conversions up. Every metric moved in the right direction. Outstanding team.', rating: 5 },
  { name: 'David Warner', role: 'Founder, EcoLife', text: 'Finally an agency that gets niche markets. Their content strategy spoke to our exact audience and the leads it brought were high quality.', rating: 5 },
  { name: 'James Anderson', role: 'CEO, Sparkly', text: 'Switched from two other agencies before finding LearnSpace. Night and day difference. The transparency and reporting alone is worth it.', rating: 5 },
];

const faqs = [
  { q: 'How long does it take to see results from SEO?', a: 'SEO is a long-term play — most clients see measurable ranking improvements in 3–4 months, with compounding returns from month 6 onwards. We also layer in quick-win technical fixes that can move the needle faster.' },
  { q: 'What budget do I need to get started with PPC?', a: 'We typically recommend a minimum of $1,500/month in ad spend to generate enough data for meaningful optimisation. However, we tailor strategies to your budget and will always be transparent about what is achievable.' },
  { q: 'Do you work with businesses outside India?', a: 'Absolutely. We serve clients across the US, UK, Australia, UAE, and Southeast Asia. Our team operates across time zones to ensure seamless communication.' },
  { q: 'What makes LearnSpace different from other agencies?', a: 'Three things: radical transparency (you own all accounts and data), dedicated specialists (not account managers farming work out), and a performance-first mindset — we track revenue impact, not vanity metrics.' },
  { q: 'Can I see reports on my campaign performance?', a: 'Yes — every client gets a live dashboard and a detailed monthly report covering all KPIs, progress vs. targets, and our roadmap for the next 30 days. No black boxes, ever.' },
];

const journey = [
  { year: '2015', title: 'Founded in Hyderabad', desc: 'Started with a team of 3 and a single client — a vision to make enterprise-grade digital marketing accessible to growing businesses.' },
  { year: '2018', title: 'First 100 Clients', desc: 'Reached a major milestone, expanded to 20+ specialists, and moved into our first official HQ. Launched our proprietary reporting dashboard.' },
  { year: '2021', title: 'Global Expansion', desc: 'Opened offices serving US, UK, and UAE markets. Launched our SaaS analytics platform and crossed $10M in client revenue generated.' },
  { year: '2026', title: 'Industry Leader', desc: 'Recognised as a top-10 boutique growth agency globally. 500+ clients, $12M+ revenue driven, and a team of 60 across 4 countries.' },
];

const Home = () => {
  useReveal();
  const [activeStage, setActiveStage] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handle = (e) => {
      const rx = ((e.clientY / window.innerHeight) - 0.5) * 10;
      const ry = ((e.clientX / window.innerWidth) - 0.5) * -10;
      const orb = hero.querySelector('.hero-orbit-container');
      if (orb) orb.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    hero.addEventListener('mousemove', handle);
    return () => hero.removeEventListener('mousemove', handle);
  }, []);

  return (
    <main style={{ overflowX: 'hidden' }}>

      {/* HERO */}
      <section id="home" className="hero-modern" ref={heroRef}>
        <div className="modern-grid-overlay"></div>
        <div className="reveal fade-up" style={{ marginBottom: '28px', zIndex: 2 }}>
          <span className="badge" style={{ background: 'rgba(21,101,192,0.1)', color: 'var(--primary-color)', border: '1px solid rgba(21,101,192,0.25)', borderRadius: '50px', padding: '8px 22px', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.12em' }}>
            🏆 #1 Boutique Growth Agency 2026
          </span>
        </div>
        <div className="hero-modern-wrapper">
          <div className="hero-modern-content">
            <h1 className="reveal mask-reveal" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', lineHeight: 1.05 }}>
              We turn digital<br /><span className="accent-text">channels into</span><br />growth engines.
            </h1>
            <p className="reveal fade-up text-muted" style={{ transitionDelay: '0.2s', fontSize: '1.1rem', maxWidth: '520px', lineHeight: 1.8, marginBottom: '2rem' }}>
              LearnSpace Digital is a performance-first marketing agency helping ambitious brands scale through SEO, paid media, content, and conversion optimisation.
            </p>
            <div className="reveal fade-up" style={{ transitionDelay: '0.3s', display: 'flex', gap: '32px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {[['500+', 'Clients'], ['$12M+', 'Revenue Driven'], ['98%', 'Retention']].map(([val, lbl]) => (
                <div key={lbl} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>{val}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{lbl}</div>
                </div>
              ))}
            </div>
            <div className="hero-modern-btns reveal fade-up" style={{ transitionDelay: '0.4s' }}>
              <Link to="/contact" className="btn btn-modern-white magnetic">Get a Free Audit</Link>
              <Link to="/services" className="btn btn-modern-dark magnetic">Explore Services</Link>
            </div>
            <div className="reveal fade-up" style={{ transitionDelay: '0.55s', marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex' }}>
                {['G','M','E','L'].map((l, i) => (
                  <div key={i} style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--grad-primary)', border: '2px solid var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#fff', marginLeft: i > 0 ? -10 : 0 }}>{l}</div>
                ))}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text-main)' }}>500+</strong> brands trust us to grow their digital revenue
              </p>
            </div>
          </div>
          <div className="hero-orbit-container reveal fade-right" style={{ transitionDelay: '0.6s', transition: 'transform 0.1s linear' }}>
            <div className="orbiting-skills">
              <div className="center-logo"><i className="fa-solid fa-chart-line"></i></div>
              <div className="orbit orbit-inner">
                <div className="skill-icon" title="SEO"><i className="fa-solid fa-magnifying-glass"></i></div>
                <div className="skill-icon" title="Content Marketing"><i className="fa-solid fa-pen-nib"></i></div>
                <div className="skill-icon" title="Email Marketing"><i className="fa-solid fa-envelope-open-text"></i></div>
              </div>
              <div className="orbit orbit-middle">
                <div className="skill-icon" title="Social Media"><i className="fa-brands fa-instagram"></i></div>
                <div className="skill-icon" title="Web Design"><i className="fa-solid fa-code"></i></div>
                <div className="skill-icon" title="PPC Advertising"><i className="fa-solid fa-bullhorn"></i></div>
                <div className="skill-icon" title="Analytics"><i className="fa-solid fa-chart-pie"></i></div>
              </div>
              <div className="orbit orbit-outer">
                <div className="skill-icon" title="Strategy"><i className="fa-solid fa-lightbulb"></i></div>
                <div className="skill-icon" title="Branding"><i className="fa-solid fa-fingerprint"></i></div>
                <div className="skill-icon" title="Growth"><i className="fa-solid fa-rocket"></i></div>
                <div className="skill-icon" title="Video Marketing"><i className="fa-solid fa-video"></i></div>
                <div className="skill-icon" title="E-commerce"><i className="fa-solid fa-bag-shopping"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS MARQUEE */}
      <div style={{ background: 'var(--primary-color)', padding: '14px 0', overflow: 'hidden' }}>
        <Marquee speed={25}>
          {tools.map((t, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginRight: 48, color: '#fff', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
              <i className="fa-solid fa-circle" style={{ fontSize: '4px', opacity: 0.6 }}></i>{t}
            </span>
          ))}
        </Marquee>
      </div>

      {/* STATS */}
      <section className="reveal bg-soft-1" style={{ padding: '80px 20px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {stats.map((s, i) => (
              <div key={i} className="reveal fade-up" style={{ transitionDelay: `${i * 0.1}s`, textAlign: 'center', padding: '40px 24px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', backdropFilter: 'blur(12px)' }}>
                <i className={`fa-solid ${s.icon}`} style={{ fontSize: '1.6rem', color: 'var(--primary-color)', marginBottom: 14, display: 'block' }}></i>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--text-main)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                  <Counter target={s.value} />{s.suffix}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider divider-with-text divider-gradient reveal fade-in-up"><span className="divider-text">What We Do</span></div>

      {/* SERVICES */}
      <section className="reveal bg-soft-1" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title reveal fade-up">Full-Spectrum Digital Marketing</h2>
            <p className="section-subtitle reveal fade-up" style={{ transitionDelay: '0.1s' }}>Every service is built on data, managed by certified specialists, and measured against real business outcomes.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {services.map((svc, i) => (
              <Link to={svc.link} key={i} className="reveal fade-up" style={{ transitionDelay: `${i * 0.08}s`, display: 'block', padding: '36px 32px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', backdropFilter: 'blur(16px)', textDecoration: 'none', color: 'inherit', transition: 'all 0.35s ease', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${svc.color}22`; e.currentTarget.style.borderColor = svc.color + '55'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle, ${svc.color}18, transparent 70%)`, borderRadius: '50%', transform: 'translate(30%,-30%)' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${svc.color}18`, border: `1px solid ${svc.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${svc.icon}`} style={{ fontSize: '1.3rem', color: svc.color }}></i>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: svc.color, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{svc.stat}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{svc.statLabel}</div>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: 10, fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{svc.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20 }}>{svc.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: svc.color, fontSize: '0.85rem', fontWeight: 600 }}>
                  Learn more <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider divider-with-text reveal fade-in-up"><span className="divider-text">Our Process</span></div>

      {/* PROCESS */}
      <section className="reveal bg-soft-1" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">How We Grow Your Business</h2>
            <p className="section-subtitle">A proven 4-step framework that turns strategy into measurable results.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {process.map((step, i) => (
              <div key={i} className="reveal fade-up" style={{ transitionDelay: `${i * 0.12}s`, padding: '40px 28px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', backdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 16, right: 20, fontSize: '4rem', fontWeight: 900, color: 'var(--primary-color)', opacity: 0.07, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{step.num}</div>
                <div style={{ width: 50, height: 50, borderRadius: 12, background: 'rgba(21,101,192,0.12)', border: '1px solid rgba(21,101,192,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <i className={`fa-solid ${step.icon}`} style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}></i>
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Step {step.num}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: 12, fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider divider-with-text reveal fade-in-up"><span className="divider-text">Case Studies</span></div>

      {/* CASE STUDIES */}
      <section className="reveal bg-soft-1" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">Real Results, Real Businesses</h2>
            <p className="section-subtitle">Case studies from clients who trusted us to grow their digital revenue.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 36, flexWrap: 'wrap' }}>
            {caseStudies.map((cs, i) => (
              <button key={i} onClick={() => setActiveCaseStudy(i)} style={{ padding: '10px 22px', borderRadius: 50, border: `1px solid ${i === activeCaseStudy ? 'var(--primary-color)' : 'var(--glass-border)'}`, background: i === activeCaseStudy ? 'var(--primary-color)' : 'var(--glass-bg)', color: i === activeCaseStudy ? '#fff' : 'var(--text-muted)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.25s', backdropFilter: 'blur(8px)' }}>
                {cs.client}
              </button>
            ))}
          </div>
          {caseStudies.map((cs, i) => i === activeCaseStudy && (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: 'clamp(28px, 4vw, 48px)', backdropFilter: 'blur(16px)', animation: 'fadeIn 0.4s ease' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: `${cs.color}18`, border: `1px solid ${cs.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${cs.icon}`} style={{ fontSize: '1.4rem', color: cs.color }}></i>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{cs.client}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cs.industry}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>The Challenge</div>
                  <p style={{ lineHeight: 1.7 }}>{cs.challenge}</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>The Outcome</div>
                  <p style={{ lineHeight: 1.7 }}>{cs.result}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
                {cs.metrics.map((m, j) => (
                  <div key={j} style={{ padding: '24px 28px', background: `${cs.color}0D`, border: `1px solid ${cs.color}25`, borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{m.lbl}</span>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: cs.color, fontFamily: 'var(--font-heading)' }}>{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider divider-with-text reveal fade-in-up"><span className="divider-text">Why Choose Us</span></div>

      {/* WHY CHOOSE US */}
      <section className="why-choose reveal bg-soft-1">
        <div className="container">
          <h2 className="section-title">Built Different. Built to Perform.</h2>
          <p className="section-subtitle">Six reasons fast-growing brands choose LearnSpace Digital over the competition.</p>
          <div className="features-grid stagger-container">
            {[
              { icon: 'fa-users-gear', title: 'Certified Specialists', desc: 'Every channel managed by a certified expert — Google, Meta, HubSpot, and SEMrush certified practitioners on your account.' },
              { icon: 'fa-chart-pie', title: 'Data-Driven Decisions', desc: 'We do not act on hunches. Every strategy starts with a deep analytics audit and is guided by real-time performance data.' },
              { icon: 'fa-lock-open', title: 'You Own Everything', desc: 'Your ad accounts, your data, your website assets — always. We never lock clients into proprietary systems.' },
              { icon: 'fa-headset', title: 'Dedicated Account Team', desc: 'A named account manager, strategist, and creative specialist work exclusively on your campaigns. No junior handoffs.' },
              { icon: 'fa-lightbulb', title: 'Bespoke Strategy', desc: 'No templates, no copy-paste campaigns. Every growth plan is researched and built from scratch for your specific goals.' },
              { icon: 'fa-file-lines', title: 'Radical Transparency', desc: 'Live dashboards, monthly reports, and weekly check-ins. You always know what is happening, why, and what is next.' },
            ].map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-icon-box"><i className={`fa-solid ${feature.icon}`}></i></div>
                <div className="feature-text"><h3>{feature.title}</h3><p className="text-muted">{feature.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider divider-with-text reveal fade-in-up"><span className="divider-text">Industries We Serve</span></div>

      {/* INDUSTRIES */}
      <section className="reveal bg-soft-1" style={{ padding: '80px 20px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">Deep Industry Expertise</h2>
            <p className="section-subtitle">We understand your market, your customers, and your competitive landscape before strategy is even written.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
            {industries.map((ind, i) => (
              <div key={i} className="reveal fade-up" style={{ transitionDelay: `${i * 0.06}s`, padding: '28px 16px', textAlign: 'center', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', backdropFilter: 'blur(12px)', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary-color)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <i className={`fa-solid ${ind.icon}`} style={{ fontSize: '1.6rem', color: 'var(--primary-color)', marginBottom: 12, display: 'block' }}></i>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider divider-with-text reveal fade-in-up"><span className="divider-text">Our History</span></div>

      {/* JOURNEY */}
      <section className="timeline-section bg-soft-1" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">From a three-person startup to a globally recognised growth agency.</p>
          <div className="funnel-journey-wrapper">
            <div className="funnel-viz-container">
              <div className="funnel-viz">
                {journey.map((_, idx) => (
                  <div key={idx} className={`funnel-stage stage-${idx} ${activeStage === idx ? 'active' : ''}`} style={{ '--stage-index': idx }} onClick={() => setActiveStage(idx)}>
                    <div className="funnel-ring"></div>
                    <div className="stage-label"><i className="fa-solid fa-arrow-down"></i></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="funnel-menu">
              {journey.map((item, idx) => (
                <div key={idx} className={`funnel-item ${activeStage === idx ? 'active' : ''}`} onClick={() => setActiveStage(idx)}>
                  <div className="funnel-item-header"><span className="funnel-year">{item.year}</span><h4>{item.title}</h4></div>
                  <div className="funnel-item-content"><p>{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider divider-with-text reveal fade-in-up"><span className="divider-text">Client Love</span></div>

      {/* TESTIMONIALS */}
      <section className="testimonials reveal bg-soft-1">
        <div className="container">
          <h2 className="section-title">Trusted by 500+ Brands</h2>
          <p className="section-subtitle">Real feedback from real clients who have seen real results.</p>
          <div className="testimonial-slider">
            <div className="testimonial-track">
              {[...testimonials, ...testimonials].map((review, idx) => (
                <div key={idx} className="review-card">
                  <div className="stars">{[...Array(review.rating)].map((_, s) => <i key={s} className="fa-solid fa-star"></i>)}</div>
                  <p>"{review.text}"</p>
                  <div className="client-info">
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--grad-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', color: '#fff', flexShrink: 0 }}>{review.name[0]}</div>
                    <div><h4>{review.name}</h4><small className="text-muted">{review.role}</small></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="reveal" style={{ padding: '80px 20px' }}>
        <div className="container">
          <div style={{ background: 'var(--grad-primary)', borderRadius: 'var(--radius-lg)', padding: 'clamp(40px, 6vw, 80px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, background: 'rgba(255,255,255,0.12)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }}></div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: 16, position: 'relative' }}>
              Ready to Outgrow Your Competition?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520, margin: '0 auto 36px', fontSize: '1.05rem', lineHeight: 1.75, position: 'relative' }}>
              Book a free 45-minute strategy call. We will audit your current digital presence and show you exactly where the growth opportunities are hiding.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
              <Link to="/contact" style={{ padding: '14px 36px', background: '#fff', color: 'var(--primary-color)', borderRadius: 50, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.25s', display: 'inline-block' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Book Free Strategy Call
              </Link>
              <Link to="/services" style={{ padding: '14px 36px', background: 'rgba(255,255,255,0.15)', color: '#fff', borderRadius: 50, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.25s', display: 'inline-block' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider divider-with-text reveal fade-in-up"><span className="divider-text">Get In Touch</span></div>

      {/* CONTACT */}
      <section id="contact" className="contact reveal bg-soft-1">
        <div className="container">
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-subtitle">Whether you are ready to launch or just exploring options — we would love to hear from you.</p>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Have questions? Send us a message and we will respond within 24 hours.</p>
              <div style={{ marginBottom: '20px' }}><i className="fa-solid fa-location-dot" style={{ color: 'var(--secondary-color)', width: '25px' }}></i><span>Hyderabad, Telangana, India</span></div>
              <div style={{ marginBottom: '20px' }}><i className="fa-solid fa-phone" style={{ color: 'var(--primary-color)', width: '25px' }}></i><span>+91 98765 43210</span></div>
              <div style={{ marginBottom: '20px' }}><i className="fa-solid fa-envelope" style={{ color: 'var(--neon-cyan)', width: '25px' }}></i><span>hello@learnspacedigital.com</span></div>
              <div style={{ marginTop: '40px' }}>
                <h4 style={{ marginBottom: '15px' }}>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="contact-form-box">
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
                <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
                <div className="form-group"><input type="tel" placeholder="Phone Number" /></div>
                <div className="form-group">
                  <select style={{ width: '100%', padding: '14px 18px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)', fontSize: '0.95rem', outline: 'none' }}>
                    <option value="">Service you are interested in</option>
                    {services.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div className="form-group"><textarea rows="4" placeholder="Tell us about your goals and current challenges..." required></textarea></div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="divider divider-with-text reveal fade-in-up"><span className="divider-text">FAQ</span></div>

      {/* FAQ */}
      <section className="faq-section reveal bg-soft-1">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know before we start working together.</p>
          <div className="faq-container">
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <i className={`fa-solid fa-chevron-${activeFaq === idx ? 'up' : 'down'} faq-icon`}></i>
                  </div>
                  <div className="faq-answer" style={{ display: activeFaq === idx ? 'block' : 'none' }}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
};

export default Home;
