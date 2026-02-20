import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, AlertTriangle, Layers, Cpu,
  XCircle, CheckCircle2, ChevronRight,
  Target, Eye, Search, Zap, Star
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ paddingBottom: '100px' }}>

      {/* 1. HERO SECTION */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <motion.div variants={fadeInUp} className="hero-badge">
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--orange)', animation: 'pulse 2s infinite' }}></span>
              Live 90 Min Masterclass
            </motion.div>

            <motion.h1 variants={fadeInUp} className="hero-headline">
              Validate Your Startup <br />
              <span className="gradient-text-orange">Before Building It.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', textAlign: 'center', maxWidth: '700px', marginBottom: '3rem', fontWeight: 500 }}>
              Stop guessing. Force users to prove demand with literal credit card swipes BEFORE you spend 3 months writing code.
            </motion.p>

          </motion.div>
        </div>

        {/* 2. STATS STRIP */}
        <div className="container" style={{ marginTop: '2rem' }}>
          <div className="stats-strip-container">
            <div className="glass-card mini-stat-card glow-card-cyan">
              <div className="icon-wrapper"><AlertTriangle size={36} /></div>
              <div className="stat-text">80% of Startups<br />Fail Quietly</div>
            </div>
            <div className="glass-card mini-stat-card glow-card-orange">
              <div className="icon-wrapper" style={{ color: 'var(--orange)' }}><Target size={36} /></div>
              <div className="stat-text">₹50k Wasted<br />Before Validation</div>
            </div>
            <div className="glass-card mini-stat-card glow-card-cyan">
              <div className="icon-wrapper"><Layers size={36} /></div>
              <div className="stat-text">3-Step Proven<br />Validation System</div>
            </div>
            <div className="glass-card mini-stat-card glow-card-orange">
              <div className="icon-wrapper" style={{ color: 'var(--orange)' }}><Cpu size={36} /></div>
              <div className="stat-text">AI Powered<br />Testing Framework</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Why do <span className="gradient-text-cyan">90% of Founders</span> Fail?
          </h2>

          <div className="problem-layout">
            {/* Left: Pain Bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="pain-bullet">
                <AlertTriangle className="icon" size={24} />
                <p><strong style={{ color: '#fff' }}>Building In Secret</strong><br />Spending 3 months writing code without talking to a single paying user.</p>
              </div>
              <div className="pain-bullet">
                <AlertTriangle className="icon" size={24} />
                <p><strong style={{ color: '#fff' }}>The "Mom Test" Fallacy</strong><br />Asking friends and family if your idea is good (they will always lie to you).</p>
              </div>
              <div className="pain-bullet">
                <AlertTriangle className="icon" size={24} />
                <p><strong style={{ color: '#fff' }}>Fake Validation</strong><br />Thinking a "waitlist" email sign-up means people will actually pay you money.</p>
              </div>
            </div>

            {/* Right: Graphic Card */}
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.3)', boxShadow: '0 0 30px rgba(239, 68, 68, 0.1)' }}>
              <XCircle size={64} color="#EF4444" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>The ₹50k Mistake</h3>
              <p style={{ color: 'var(--text-muted)' }}>Founders spend thousands on servers, ads, and tools before getting their first ₹1 of validated revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VITAMIN VS PAINKILLER */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Are you building a <span className="gradient-text-orange">Vitamin</span> or a <span className="gradient-text-cyan">Painkiller?</span></h2>

          <div className="vit-vs-pain-grid">
            <div className="glass-card vp-card vitamin">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <XCircle size={32} color="#EF4444" />
                <h3>The Vitamin Idea</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>"Nice to have." Users like the concept but don't feel urgency to buy. Hard to sell, high churn, slow growth.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontWeight: 600 }}>
                <li style={{ color: '#EF4444' }}>× "We help you organize files better"</li>
                <li style={{ color: '#EF4444' }}>× "We give you daily inspiration quotes"</li>
              </ul>
            </div>

            <div className="glass-card vp-card painkiller">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <CheckCircle2 size={32} color="var(--cyan)" />
                <h3>The Painkiller Idea</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>"Must have right now." Solves a bleeding neck problem. Users swipe their cards instantly. High retention.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontWeight: 600 }}>
                <li style={{ color: 'var(--cyan)' }}>✓ "We stop your AWS bill from leaking $5k/mo"</li>
                <li style={{ color: 'var(--cyan)' }}>✓ "We automate 40hrs of manual tax filing"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3-STEP FRAMEWORK */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The Validation <span className="gradient-text-cyan">Blueprint</span></h2>

          <div className="framework-grid">
            <div className="glass-card step-card glow-card-orange">
              <div className="step-num">Step 01</div>
              <div className="step-icon"><Search size={28} /></div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>The Mom Test</h4>
              <p style={{ color: 'var(--text-muted)' }}>How to ask 3 specific questions that force users to reveal their actual purchasing intent, skipping the fake compliments.</p>
              <div className="mini-outcome text-orange">+ Extract the real pain</div>
            </div>

            <div className="glass-card step-card glow-card-cyan">
              <div className="step-num" style={{ color: 'var(--cyan)' }}>Step 02</div>
              <div className="step-icon"><Rocket size={28} /></div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>The Smoke Test</h4>
              <p style={{ color: 'var(--text-muted)' }}>Build a shadow landing page in 20 minutes to explicitly measure literal credit card clicks before your product exists.</p>
              <div className="mini-outcome">+ Secure raw intent</div>
            </div>

            <div className="glass-card step-card glow-card-orange">
              <div className="step-num">Step 03</div>
              <div className="step-icon"><Eye size={28} /></div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Competitor Spy</h4>
              <p style={{ color: 'var(--text-muted)' }}>Ethically tap into your competitor's ad traffic to see exactly what copy converts and what users are desperate for.</p>
              <div className="mini-outcome text-orange">+ Steal winning angles</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI EDGE SECTION */}
      <section className="section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="ai-edge-block">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Validate in <span className="gradient-text-orange">Hours</span>, Not Months.</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Leverage AI to write your copy, build your landing page, and generate your ad campaigns instantly.</p>

            <div className="ai-mockup">
              <div style={{ textAlign: 'center' }}>
                <Cpu size={48} color="rgba(0,240,255,0.5)" style={{ marginBottom: '1rem', margin: '0 auto' }} />
                <div style={{ color: '#fff', fontWeight: 800, letterSpacing: '0.1em' }}>[ AI BUILDER MOCKUP UI ]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WALK AWAY WITH */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What You <span className="gradient-text-cyan">Walk Away With</span></h2>

          <div className="walk-away-grid">
            <div className="glass-card walk-away-card glow-card-cyan">
              <div className="check-circle"><CheckCircle2 size={20} /></div>
              <span>A bulletproof startup idea validation framework</span>
            </div>
            <div className="glass-card walk-away-card glow-card-orange">
              <div className="check-circle" style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--orange)' }}><CheckCircle2 size={20} /></div>
              <span>Exact cold outreach scripts that get responses</span>
            </div>
            <div className="glass-card walk-away-card glow-card-cyan">
              <div className="check-circle"><CheckCircle2 size={20} /></div>
              <span>How to price your initial minimum viable offer</span>
            </div>
            <div className="glass-card walk-away-card glow-card-orange">
              <div className="check-circle" style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--orange)' }}><CheckCircle2 size={20} /></div>
              <span>Step-by-step shadow testing checkout guide</span>
            </div>
            <div className="glass-card walk-away-card glow-card-cyan">
              <div className="check-circle"><CheckCircle2 size={20} /></div>
              <span>The "Fake Door" landing page template</span>
            </div>
            <div className="glass-card walk-away-card glow-card-orange">
              <div className="check-circle" style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--orange)' }}><CheckCircle2 size={20} /></div>
              <span>Confidence to build ONLY what people pay for</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. AUTHORITY BLOCK */}
      <section className="section">
        <div className="container">
          <div className="authority-layout">
            <div className="auth-image glow-card-cyan glass-card">
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <Target size={48} color="#666" style={{ margin: '0 auto 1rem' }} />
                <div style={{ color: '#666', fontWeight: 800, letterSpacing: '0.05em' }}>[ KISHAN SHARMA PNG ]<br />Aspect 3:4</div>
              </div>
            </div>

            <div className="auth-content">
              <div style={{ color: 'var(--text-muted)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Your Live Coach</div>
              <h3>Kishan Sharma</h3>
              <span className="title text-cyan">India's Leading Startup Architect</span>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>With over 10 years of experience launching and scaling zero-to-one startups, I've spent millions on ads figuring out exactly what makes users swipe their credit cards. Now, I'm giving you the literal cheat codes.</p>

              <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.25rem', color: '#FACC15', marginBottom: '0.5rem' }}>
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>
                  <div style={{ fontWeight: 800 }}>400+ Founders Trained</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Average 4.9/5 Rating</div>
                </div>
                <div style={{ width: '1px', height: '40px', background: 'var(--glass-border)' }}></div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--orange)' }}>15+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Bad Ideas Killed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRICE CONTRAST */}
      <section className="section" id="checkout">
        <div className="container">
          <div className="price-stack-container">
            <div className="price-card glow-card-cyan">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '2.5rem' }}>
                Total Value <span className="gradient-text-orange">Stack</span>
              </h2>

              <ul className="value-stack-list">
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 size={20} color="var(--cyan)" /> Live 90 Min Masterclass</span>
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>₹1,999</span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 size={20} color="var(--cyan)" /> Idea Validation System Docs</span>
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>₹999</span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 size={20} color="var(--cyan)" /> AI Landing Page Template</span>
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>₹999</span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 size={20} color="var(--cyan)" /> Live Q&A and Hot Seating</span>
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>₹999</span>
                </li>
              </ul>

              <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', border: '1px solid var(--orange)' }}>
                <div className="total-value">
                  <span>Total Value</span>
                  <del style={{ color: '#888' }}>₹4,996</del>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                  <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>Exclusive Today's Price</span>
                  <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--orange)', lineHeight: 1, textShadow: '0 0 20px rgba(255,107,0,0.5)' }}>₹99</span>
                </div>
              </div>

              <a href="#checkout" className="btn-cta w-full" style={{ padding: '1.5rem', fontSize: '1.25rem' }}>
                Reserve My Seat For ₹99
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. STICKY CTA */}
      <div className={`sticky-bar ${showSticky ? 'visible' : ''}`}>
        <div className="sticky-timer-zone">
          <div className="offer-text"><Zap size={10} style={{ display: 'inline', color: 'var(--orange)' }} /> Flash Sale Valid</div>
          <div className="prices">
            <del>₹1,999</del>
            <span style={{ color: 'var(--orange)' }}>₹99</span>
          </div>
        </div>
        <a href="#checkout" className="btn-cta">
          Reserve Seat <ChevronRight size={18} />
        </a>
      </div>

    </div>
  )
}

export default App
