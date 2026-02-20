import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, CheckCircle2, Zap, Target, Activity, Plus, ShieldCheck, TrendingUp, Users, Clock, Compass, ChevronRight, XCircle } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
  const [timeLeft, setTimeLeft] = useState({ minutes: 12, seconds: 59 });
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
    const handleScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFAQ = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.parentElement;
    if (target) { target.classList.toggle('active'); }
  };

  return (
    <>
      {/* MASSIVE UNIQUE GRADIENT GRID FIRST FOLD */}
      <div className="hero-wrapper">
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <header className="text-center">
            <div className="brand-header-pill">
              <Target size={16} color="var(--accent-primary)" />
              <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Idea To Reality Workshop</span>
            </div>
          </header>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center pb-8">
            <motion.div variants={fadeInUp} className="hero-badge">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              STARTING THIS SUNDAY • 90 MIN BOOTCAMP
            </motion.div>

            <motion.h1 variants={fadeInUp} className="heading-mega">
              Stop Guessing & Building In Secret.<br />
              Validate Your Idea In <span className="highlight">60 Minutes.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="hero-subheadline">
              Force massive market proof with literal credit card swipes <span style={{ color: '#fff', borderBottom: '2px solid var(--accent-primary)' }}>BEFORE</span> you burn ₹50,000 on development or Facebook Ads.
            </motion.p>

            {/* FIRST FOLD BUTTON (Missing specifically requested!) */}
            <motion.div variants={fadeInUp} style={{ margin: '2rem auto 0', maxWidth: '350px' }}>
              <a href="#checkout" className="btn-primary" style={{ animation: 'pulse-glow 2s infinite' }}>
                BOOK SPOT NOW AT ₹99 <ChevronRight size={22} />
              </a>
              <div style={{ color: 'var(--text-muted-light)', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.75rem' }}>
                ⚡ Only 14 Seats Remaining
              </div>
            </motion.div>

            {/* COACH CARD */}
            <motion.div variants={fadeInUp} className="instructor-hero-card">
              <div className="instructor-img-box">
                <div style={{ color: '#334155', marginBottom: '0.25rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
                </div>
                <div style={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 800, textTransform: 'uppercase' }}>UPLOAD PNG<br />800x1000px</div>
              </div>

              <div style={{ textAlign: 'left' }}>
                <div className="coach-label">Your Live Coach</div>
                <div className="coach-name">Kishan Sharma</div>
                <div className="coach-title">India's Leading Startup Strategist</div>

                <div className="coach-stats">
                  <div className="stat-line">
                    <Check size={16} color="var(--accent-primary)" strokeWidth={3} /> Trained 400+ Founders
                  </div>
                  <div className="stat-line">
                    <Check size={16} color="var(--accent-primary)" strokeWidth={3} /> Killed 15+ Bad Ideas Live
                  </div>
                  <div className="stat-line">
                    <Check size={16} color="var(--accent-primary)" strokeWidth={3} /> generated ₹5Cr+ in Pre-sales
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '3rem' }}>
        <div className="stats-strip">
          <div className="stat-card">
            <div style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}><Target size={24} /></div>
            <div className="value">400+</div>
            <div className="label">Founders Trained</div>
          </div>
          <div className="stat-card">
            <div style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}><Activity size={24} /></div>
            <div className="value">15+</div>
            <div className="label">Bad Ideas Killed</div>
          </div>
          <div className="stat-card">
            <div style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}><Zap size={24} /></div>
            <div className="value">60min</div>
            <div className="label">Time To Clarity</div>
          </div>
          <div className="stat-card">
            <div className="flex gap-1" style={{ marginBottom: '0.25rem', justifyContent: 'center' }}>
              <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
            </div>
            <div className="value" style={{ color: 'var(--accent-primary)' }}>4.9/5</div>
            <div className="label" style={{ color: 'rgba(255, 90, 31, 0.8)' }}>Global Rating</div>
          </div>
        </div>
      </div>

      <div className="bg-dotted">

        {/* BIG AUDIENCE QUALIFIER SECTION (Added to make it lengthy and conversion optimized) */}
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 className="heading-section">
              Who Cannot Afford To Miss This?
              <span className="underline"></span>
            </h2>

            <div className="who-for-grid">
              {/* BAD FIT */}
              <div className="who-card red">
                <h3 style={{ color: '#DC2626' }}>This Is NOT For You If...</h3>
                <ul className="list-check cross">
                  <li><XCircle size={22} className="check-icon" /> You want a "get rich quick scheme" without doing sales.</li>
                  <li><XCircle size={22} className="check-icon" /> You are scared of hearing "No" from customers.</li>
                  <li><XCircle size={22} className="check-icon" /> You'd rather spend 3 months coding in isolation than validate.</li>
                </ul>
              </div>

              {/* GOOD FIT */}
              <div className="who-card green">
                <h3 style={{ color: '#059669' }}>This IS Perfect For You If...</h3>
                <ul className="list-check">
                  <li><CheckCircle2 size={22} className="check-icon" /> You have a startup idea but don't know where to start.</li>
                  <li><CheckCircle2 size={22} className="check-icon" /> You've failed a startup before and want a framework.</li>
                  <li><CheckCircle2 size={22} className="check-icon" /> You want to force the market to literally pay you for MVP validation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* CHECKLIST */}
        <section className="section" style={{ background: 'var(--bg-light)' }}>
          <div className="container" style={{ maxWidth: '750px' }}>
            <h2 className="heading-section">
              Why exactly do 90% of startups fail?
              <span className="underline"></span>
            </h2>

            <div style={{ background: 'var(--bg-white)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <ul className="list-check">
                <li><CheckCircle2 size={24} className="check-icon" /> <strong>Blind Building:</strong> They write code before talking to real users.</li>
                <li><CheckCircle2 size={24} className="check-icon" /> <strong>False Positives:</strong> They ask Mom for validation instead of the market.</li>
                <li><CheckCircle2 size={24} className="check-icon" /> <strong>Silent Launches:</strong> They launch silently on a Tuesday to absolute crickets.</li>
                <li><CheckCircle2 size={24} className="check-icon" /> <strong>Wasted Ad Spend:</strong> They burn ₹50,000 on Facebook Ads with zero proof.</li>
                <li><CheckCircle2 size={24} className="check-icon" /> <strong>Scope Creep:</strong> They build complex features users absolutely never asked for.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OUTCOMES GRID (6 MINI CARDS) */}
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 className="heading-section">
              Clear Outcomes You Will Achieve
              <span className="underline"></span>
            </h2>

            <div className="outcomes-grid">
              <div className="outcome-card">
                <div className="icon-box"><ShieldCheck size={24} /></div>
                <div className="text text-lg">Confidence to pitch any idea fearlessly</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><TrendingUp size={24} /></div>
                <div className="text text-lg">Framework to secure early pre-sales</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><Users size={24} /></div>
                <div className="text text-lg">Extract raw truth from target users</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><Zap size={24} /></div>
                <div className="text text-lg">Launch conversion landing pages in 1hr</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><Clock size={24} /></div>
                <div className="text text-lg">Save 6+ months of writing bad code</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><Compass size={24} /></div>
                <div className="text text-lg">Exact roadmap to scale safely</div>
              </div>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
              <a href="#checkout" className="btn-primary" style={{ maxWidth: '400px', animation: 'pulse-glow 2s infinite' }}>
                I WANT THESE RESULTS TOO <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* 3-STEP CURRICULUM FRAMEWORK */}
        <section className="section" style={{ background: 'var(--bg-light)' }}>
          <div className="container" style={{ maxWidth: '850px' }}>
            <h2 className="heading-section">
              The 90-Minute Curriculum Breakdown
              <span className="underline"></span>
            </h2>

            <div className="numbered-step-card">
              <div className="num-box">01.</div>
              <div className="content-box">
                <h4 style={{ fontSize: '1.4rem' }}>The Mom Test Extraction</h4>
                <p style={{ fontSize: '1.05rem', marginTop: '0.5rem' }}>Learn the exact 3 specific questions that force users to reveal their painful truths instead of polite lies. Stop asking "would you use this?"</p>
              </div>
            </div>

            <div className="numbered-step-card" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
              <div className="num-box">02.</div>
              <div className="content-box">
                <h4 style={{ fontSize: '1.4rem' }}>₹500 Smoke Test Wireframe</h4>
                <p style={{ fontSize: '1.05rem', marginTop: '0.5rem' }}>Live execution of building a shadow landing page with a fake checkout to measure literal credit card intent before building a single backend feature.</p>
              </div>
            </div>

            <div className="numbered-step-card">
              <div className="num-box">03.</div>
              <div className="content-box">
                <h4 style={{ fontSize: '1.4rem' }}>The Competitor Intel Hack</h4>
                <p style={{ fontSize: '1.05rem', marginTop: '0.5rem' }}>Ethically map your competitor's traffic flows to see precisely what messaging converts and exploit gaps in their acquisition funnels.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AUTHORITY BLOCK MASSIVE */}
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '850px' }}>
            <div className="authority-block" style={{ transform: 'none' }}>
              <div className="auth-avatar">Image</div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Meet Kishan Sharma</h3>
              <div style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', fontSize: '0.85rem' }}>India's Top Validation Expert</div>
              <p style={{ color: 'var(--text-muted-light)', fontSize: '1.1rem', fontWeight: 500, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                I've spent the last 5 years helping over 400 founders transition from guessing in the dark to generating real pre-sale revenue without writing a single line of backend code. I despise theoretical advice, we build real landing pages together in 90 minutes.
              </p>

              <div className="auth-stats-grid">
                <div className="auth-stat">
                  <div className="auth-stat-val">₹5Cr+</div>
                  <div className="auth-stat-lbl">Pre-sales Generated</div>
                </div>
                <div className="auth-stat">
                  <div className="auth-stat-val">400+</div>
                  <div className="auth-stat-lbl">Founders Coached</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE STACK & PRICING */}
        <section className="section pb-24" style={{ background: 'var(--bg-light)' }}>
          <div className="container" id="checkout">
            <div className="heading-section">
              Don't Pay ₹50,000 In Mistakes.<br />
              <span className="highlight" style={{ color: 'var(--accent-primary)' }}>Pay ₹99 To Guarantee Success.</span>
            </div>

            <div className="value-stack-box" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div style={{ display: 'inline-block', background: 'rgba(255, 90, 31, 0.15)', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 800, padding: '0.5rem 1.2rem', borderRadius: '100px', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(255, 90, 31, 0.3)' }}>
                  🚨 Price Increases At Midnight
                </div>
                <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '0.5rem' }}>The Total Value Stack</h2>
              </div>

              <div style={{ background: '#0A0D14', padding: '2rem', borderRadius: '16px', border: '1px solid #1E293B', marginBottom: '2.5rem' }}>
                <div className="value-row">
                  <span style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-primary)" /> Live 90 Min Masterclass Access</span>
                  <span className="value-price">₹1,499</span>
                </div>
                <div className="value-row">
                  <span style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-primary)" /> Validation Notion Template</span>
                  <span className="value-price">₹1,999</span>
                </div>
                <div className="value-row">
                  <span style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-primary)" /> Secret Smoke-Test Swipe File</span>
                  <span className="value-price">₹999</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', marginTop: '1rem', borderTop: '2px solid #1E293B' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Total Value</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#475569', textDecoration: 'line-through' }}>₹4,497</span>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted-light)', marginBottom: '0.5rem' }}>Secure Your Spot Now For Only</div>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '2rem', textShadow: '0 0 50px rgba(255,90,31,0.5)' }}>
                  ₹99
                </div>
                <a href="#checkout" className="btn-primary" style={{ padding: '1.5rem', fontSize: '1.25rem' }}>
                  LOCK MY SEAT NOW AT ₹99 <ChevronRight size={24} />
                </a>
              </div>
            </div>

            {/* FAQ ACCORDION */}
            <div className="faq-wrap" style={{ maxWidth: '800px', margin: '4rem auto 0' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h3>
              <div className="faq-item">
                <div className="faq-header" onClick={toggleFAQ}>
                  Do I need an idea to join?
                  <Plus size={20} className="faq-icon" />
                </div>
                <div className="faq-content">No. We teach you how to start with a bleeding neck "Problem", rather than marrying a solution early.</div>
              </div>
              <div className="faq-item">
                <div className="faq-header" onClick={toggleFAQ}>
                  Is there a recording provided?
                  <Plus size={20} className="faq-icon" />
                </div>
                <div className="faq-content">No. We do not provide replays. This forces commitment and ensures a high-trust environment during execution.</div>
              </div>
              <div className="faq-item">
                <div className="faq-header" onClick={toggleFAQ}>
                  What is the refund policy?
                  <Plus size={20} className="faq-icon" />
                </div>
                <div className="faq-content">Zero risk. If you don't feel it was worth 10X the ₹99 you paid, we refund you instantly without asking any questions.</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* STICKY CTA CTA */}
      <div className={`sticky-bar ${showSticky ? 'visible' : ''}`}>
        <div className="sticky-timer-zone">
          <div className="offer-text" style={{ color: 'var(--accent-primary)' }}>Closing in</div>
          <div className="time">{String(timeLeft.minutes).padStart(2, '0')}<span style={{ fontSize: '0.8rem', color: '#666', margin: '0 2px' }}>M</span> {String(timeLeft.seconds).padStart(2, '0')}<span style={{ fontSize: '0.8rem', color: '#666', margin: '0 2px' }}>S</span></div>
        </div>
        <a href="#checkout" className="sticky-cta-zone w-full" style={{ padding: '1rem' }}>
          Join Now At Just<br />
          <span style={{ fontSize: '0.9rem' }}><del style={{ color: '#000', opacity: 0.6, marginRight: '4px' }}>₹1999</del></span>
          <span style={{ fontSize: '1.3rem' }}>₹99/-</span>
        </a>
      </div>
    </>
  )
}

export default App
