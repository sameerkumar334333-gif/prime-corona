import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, CheckCircle2, Zap, Target, Activity, Plus } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function App() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 17, seconds: 40 });
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { minutes, seconds } = prev;
        if (seconds > 0) { seconds--; }
        else {
          seconds = 59;
          if (minutes > 0) { minutes--; }
        }
        return { minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFAQ = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.parentElement;
    if (target) { target.classList.toggle('active'); }
  };

  return (
    <>
      {/* 1. HERO SECTION (DARK TOP FOLD) */}
      <div className="hero-wrapper bg-dark-section">
        <div className="container">
          <header className="brand-header border-b border-gray-800">
            <div className="brand-title" style={{ color: '#fff' }}>Idea To Reality Workshop</div>
          </header>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="top-fold-container">
            <div className="hero-badge">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              LIVE 90 MINUTE BOOTCAMP
            </div>

            <motion.h1 variants={fadeInUp} className="heading-mega text-center">
              Before You Burn ₹50k Building It—
              Validate It In 60 Minutes.
            </motion.h1>

            <motion.p variants={fadeInUp} className="hero-subheadline text-muted-light text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              Stop guessing. Force users to prove demand with literal credit card swipes <span style={{ color: '#fff', borderBottom: '2px solid var(--accent-primary)' }}>BEFORE</span> you code anything.
            </motion.p>

            <motion.div variants={fadeInUp} className="instructor-hero-card w-full">
              <div className="instructor-img-box">
                <div style={{ color: '#666', marginBottom: '0.25rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
                </div>
                <div style={{ fontSize: '0.65rem', color: '#666', fontWeight: 800, textTransform: 'uppercase' }}>UPLOAD PNG<br />800x1000px</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>Your Live Coach</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>[ Instructor Name ]</div>
                <div style={{ fontSize: '0.9rem', color: '#A3A3A3', fontWeight: 500, marginBottom: '0.5rem' }}>India's Leading Startup Strategist</div>

                <div style={{ display: 'grid', gap: '0.5rem', marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #333' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>
                    <Check size={14} color="var(--accent-primary)" strokeWidth={3} /> Trained over 400+ Founders
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>
                    <Check size={14} color="var(--accent-primary)" strokeWidth={3} /> Killed 15+ Bad Ideas Live
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 2. STATS STRIP (Overlapping) */}
      <div className="container" style={{ paddingBottom: '2rem' }}>
        <div className="stats-strip">
          <div className="stat-card">
            <div className="icon"><Target size={24} /></div>
            <div className="value">400+</div>
            <div className="label">Founders Trained</div>
          </div>
          <div className="stat-card">
            <div className="icon"><Activity size={24} /></div>
            <div className="value">15+</div>
            <div className="label">Bad Ideas Killed</div>
          </div>
          <div className="stat-card">
            <div className="icon"><Zap size={24} /></div>
            <div className="value">60min</div>
            <div className="label">To Complete Clarity</div>
          </div>
          <div className="stat-card" style={{ background: 'var(--accent-primary)', color: '#fff', borderColor: 'var(--accent-primary)' }}>
            <div className="flex gap-1 mb-2">
              <Star size={20} fill="var(--accent-yellow)" color="var(--accent-yellow)" />
              <Star size={20} fill="var(--accent-yellow)" color="var(--accent-yellow)" />
              <Star size={20} fill="var(--accent-yellow)" color="var(--accent-yellow)" />
            </div>
            <div className="value">4.9/5</div>
            <div className="label" style={{ color: 'rgba(255,255,255,0.8)' }}>Average Rating</div>
          </div>
        </div>
      </div>

      {/* BODY WITH DOTTED BACKGROUND */}
      <div className="bg-dotted">

        {/* 3. PROBLEM LIST (Checkmarks Style from Ref 1) */}
        <section className="section bg-white" style={{ background: '#fff' }}>
          <div className="container">
            <h2 className="heading-section">
              Why exactly do startups fail?
              <span className="underline"></span>
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg-light)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
              <ul className="list-check">
                <li><CheckCircle2 size={24} className="check-icon" /> They spend 3 months writing code before talking to users.</li>
                <li><CheckCircle2 size={24} className="check-icon" /> They launch quietly on a Tuesday to absolute crickets.</li>
                <li><CheckCircle2 size={24} className="check-icon" /> They ask Mom if the idea is good (she always says yes).</li>
                <li><CheckCircle2 size={24} className="check-icon" /> They spend ₹50,000 on Facebook Ads with zero validation.</li>
                <li><CheckCircle2 size={24} className="check-icon" /> They build features users explicitly never asked for.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. 3-STEP VALIDATION FRAMEWORK (Numbered style Ref 2) */}
        <section className="section bg-peach-soft">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="heading-section">
              What You Will Learn In 90 Mins?
              <span className="underline"></span>
            </h2>

            <div className="numbered-step-card">
              <div className="num-box">01.</div>
              <div className="content-box">
                <h4>The Mom Test Extraction</h4>
                <p>Stop asking "would you use this?" and learn the exact 3 specific questions that force users to reveal their painful truths.</p>
              </div>
            </div>

            <div className="numbered-step-card" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
              <div className="num-box">02.</div>
              <div className="content-box">
                <h4>₹500 Smoke Test Wireframe</h4>
                <p>Live execution of building a shadow landing page with a fake checkout to measure literal credit card intent before building.</p>
              </div>
            </div>

            <div className="numbered-step-card">
              <div className="num-box">03.</div>
              <div className="content-box">
                <h4>The Competitor Intel Hack</h4>
                <p>Ethically map your competitor's traffic flows to see precisely what messaging converts and what falls flat.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 6. COHORT PILLS (Ref 1 topics) */}
        <section className="section bg-white" style={{ background: '#fff' }}>
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h2 className="heading-section">
              Bonus Topics Covered Live
              <span className="underline"></span>
            </h2>

            <div className="pill-container">
              <span className="pill-tag">B2B SaaS Pricing</span>
              <span className="pill-tag">Waitlist Conversion Hacks</span>
              <span className="pill-tag">Cold Email Deliverability</span>
              <span className="pill-tag">No-Code Landing Pages</span>
              <span className="pill-tag">Meta Ads for $5/Day</span>
              <span className="pill-tag">Analytics Setup</span>
            </div>
          </div>
        </section>

        {/* 9. VALUE STACK (Huge contrast box) */}
        <section className="section pb-24">
          <div className="container" style={{ maxWidth: '750px' }} id="checkout">
            <div className="value-stack-box">
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.8rem', fontWeight: 800, padding: '0.5rem 1rem', borderRadius: '100px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  🔥 Offer Ends Today
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Total Value Stack</h2>
                <p style={{ color: 'var(--text-muted-light)', fontWeight: 500 }}>Everything you get when you pre-book your seat right now.</p>
              </div>

              <div style={{ background: '#111', padding: '1.5rem', borderRadius: '16px', border: '1px solid #333', marginBottom: '2rem' }}>
                <div className="value-row">
                  <span style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle2 size={16} color="var(--accent-primary)" /> Live 90 Min Masterclass</span>
                  <span className="value-price">₹1,499</span>
                </div>
                <div className="value-row">
                  <span style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle2 size={16} color="var(--accent-primary)" /> Validation Notion Template</span>
                  <span className="value-price">₹1,999</span>
                </div>
                <div className="value-row">
                  <span style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle2 size={16} color="var(--accent-primary)" /> Smoke-Test Swipe File</span>
                  <span className="value-price">₹999</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', marginTop: '0.5rem', borderTop: '2px solid #333' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Total Value</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#A3A3A3', textDecoration: 'line-through' }}>₹4,497</span>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted-light)', marginBottom: '0.5rem' }}>Today's Exclusive Price</div>
                <div style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '2rem', textShadow: '0 0 40px rgba(255,68,0,0.4)' }}>
                  ₹99
                </div>
                <a href="#checkout" className="btn-primary" style={{ padding: '1.5rem', fontSize: '1.25rem' }}>
                  LOCK MY SEAT NOW FOR ₹99
                </a>
              </div>
            </div>

            {/* 11. FAQ ACCORDION */}
            <div className="faq-wrap">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h3>
              <div className="faq-item">
                <div className="faq-header" onClick={toggleFAQ}>
                  Do I need an idea to join?
                  <Plus size={20} className="faq-icon" />
                </div>
                <div className="faq-content">No. We teach you how to start with a bleeding neck "Problem", rather than marrying a solution early.</div>
              </div>
              <div className="faq-item">
                <div className="faq-header" onClick={toggleFAQ}>
                  Is there a recording?
                  <Plus size={20} className="faq-icon" />
                </div>
                <div className="faq-content">No. We do not provide replays. This forces commitment and ensures a high-trust environment.</div>
              </div>
              <div className="faq-item">
                <div className="faq-header" onClick={toggleFAQ}>
                  Refund policy?
                  <Plus size={20} className="faq-icon" />
                </div>
                <div className="faq-content">Zero risk. If you don't feel it was worth 10X the ₹99 you paid, we refund you instantly.</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 10. SPLIT COLOR STICKY CTA (Reference 1 exact style: Black timer left, Yellow CTA right) */}
      <div className={`sticky-bar ${showSticky ? 'visible' : ''}`}>
        <div className="sticky-timer-zone">
          <div className="offer-text">Offer Ends in</div>
          <div className="time">{String(timeLeft.minutes).padStart(2, '0')}<span style={{ fontSize: '0.8rem', color: '#666', margin: '0 2px' }}>M</span> {String(timeLeft.seconds).padStart(2, '0')}<span style={{ fontSize: '0.8rem', color: '#666', margin: '0 2px' }}>S</span></div>
        </div>
        <a href="#checkout" className="sticky-cta-zone w-full">
          Join Now At Just<br />
          <span style={{ fontSize: '0.85rem' }}><del style={{ color: '#888', marginRight: '4px' }}>₹1999</del></span>
          <span style={{ fontSize: '1.25rem' }}>₹99/-</span>
        </a>
      </div>
    </>
  )
}

export default App
