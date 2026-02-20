import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, CheckCircle2, Zap, Target, Activity, Plus, ShieldCheck, TrendingUp, Users, Clock, Compass } from 'lucide-react';

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
      <div className="hero-wrapper bg-dark-section">
        <div className="container">
          <header className="border-b border-gray-800 pb-4 mb-4 text-center">
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>Idea To Reality Workshop</div>
          </header>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center pb-8">
            <div className="hero-badge">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              LIVE 90 MINUTE BOOTCAMP
            </div>

            <motion.h1 variants={fadeInUp} className="heading-mega">
              Before You Burn ₹50k Building It—
              Validate It In 60 Minutes.
            </motion.h1>

            <motion.p variants={fadeInUp} style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem', fontWeight: 500, maxWidth: '600px', margin: '0 auto' }}>
              Force users to prove demand with literal credit card swipes <span style={{ color: '#fff', borderBottom: '2px solid var(--accent-primary)' }}>BEFORE</span> you code anything.
            </motion.p>

            {/* Enlarged Coach Section with Kishan Sharma */}
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
                    <Check size={16} color="var(--accent-primary)" strokeWidth={3} /> Trained early-stage 400+ Founders
                  </div>
                  <div className="stat-line">
                    <Check size={16} color="var(--accent-primary)" strokeWidth={3} /> Killed 15+ Bad Ideas Live
                  </div>
                  <div className="stat-line">
                    <Check size={16} color="var(--accent-primary)" strokeWidth={3} /> Helped generate ₹5Cr+ in Pre-sales
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
            <div style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}><Target size={20} /></div>
            <div className="value">400+</div>
            <div className="label">Founders Trained</div>
          </div>
          <div className="stat-card">
            <div style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}><Activity size={20} /></div>
            <div className="value">15+</div>
            <div className="label">Bad Ideas Killed</div>
          </div>
          <div className="stat-card">
            <div style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}><Zap size={20} /></div>
            <div className="value">60min</div>
            <div className="label">Time To Clarity</div>
          </div>
          <div className="stat-card">
            <div className="flex gap-1" style={{ marginBottom: '0.25rem', justifyContent: 'center' }}>
              <Star size={14} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <Star size={14} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <Star size={14} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <Star size={14} fill="var(--accent-primary)" color="var(--accent-primary)" />
              <Star size={14} fill="var(--accent-primary)" color="var(--accent-primary)" />
            </div>
            <div className="value" style={{ color: 'var(--accent-primary)' }}>4.9/5</div>
            <div className="label" style={{ color: 'rgba(255, 90, 31, 0.8)' }}>Student Rating</div>
          </div>
        </div>
      </div>

      <div className="bg-dotted">

        {/* CHECKLIST: SHORTER LINES */}
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '750px' }}>
            <h2 className="heading-section">
              Why exactly do startups fail?
              <span className="underline"></span>
            </h2>

            <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <ul className="list-check">
                <li><CheckCircle2 size={20} className="check-icon" /> They write code before talking to real users.</li>
                <li><CheckCircle2 size={20} className="check-icon" /> They ask Mom for validation instead of the market.</li>
                <li><CheckCircle2 size={20} className="check-icon" /> They launch silently on a Tuesday to absolute crickets.</li>
                <li><CheckCircle2 size={20} className="check-icon" /> They burn ₹50,000 on Facebook Ads with zero proof.</li>
                <li><CheckCircle2 size={20} className="check-icon" /> They build features users absolutely never asked for.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OUTCOMES GRID (6 MINI CARDS) */}
        <section className="section">
          <div className="container" style={{ maxWidth: '850px' }}>
            <h2 className="heading-section">
              Clear Outcomes You Will Achieve
              <span className="underline"></span>
            </h2>

            <div className="outcomes-grid">
              <div className="outcome-card">
                <div className="icon-box"><ShieldCheck size={20} /></div>
                <div className="text">Confidence to pitch any idea</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><TrendingUp size={20} /></div>
                <div className="text">Framework to get pre-sales</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><Users size={20} /></div>
                <div className="text">Extract truth from target users</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><Zap size={20} /></div>
                <div className="text">Launch landing pages in 1hr</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><Clock size={20} /></div>
                <div className="text">Save 6+ months of bad code</div>
              </div>
              <div className="outcome-card">
                <div className="icon-box"><Compass size={20} /></div>
                <div className="text">Exact roadmap to scale safely</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-STEP FRAMEWORK */}
        <section className="section bg-white" style={{ background: '#fff' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="heading-section">
              The Validation Framework
              <span className="underline"></span>
            </h2>

            <div className="numbered-step-card">
              <div className="num-box">01.</div>
              <div className="content-box">
                <h4>The Mom Test Extraction</h4>
                <p>Learn the exact 3 specific questions that force users to reveal their painful truths.</p>
              </div>
            </div>

            <div className="numbered-step-card" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
              <div className="num-box">02.</div>
              <div className="content-box">
                <h4>₹500 Smoke Test Wireframe</h4>
                <p>Live execution of building a shadow page with a fake checkout to measure literal intent.</p>
              </div>
            </div>

            <div className="numbered-step-card">
              <div className="num-box">03.</div>
              <div className="content-box">
                <h4>The Competitor Intel Hack</h4>
                <p>Ethically map your competitor's traffic flows to see precisely what messaging converts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AUTHORITY BLOCK */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="authority-block">
              <div className="auth-avatar">Image</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.25rem' }}>Meet Kishan Sharma</h3>
              <p style={{ color: 'var(--text-muted-light)', fontSize: '0.95rem', fontWeight: 500, maxWidth: '500px', margin: '0 auto' }}>
                I've spent the last 5 years helping over 400 founders transition from guessing to generating real pre-sale revenue without writing a single line of backend code.
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

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px' }}>
                <div className="flex gap-1">
                  <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
                  <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
                  <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
                  <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
                  <Star size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Rated 4.9/5 by global students</span>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE STACK & FAQ */}
        <section className="section pb-24 bg-white" style={{ background: '#fff' }}>
          <div className="container" style={{ maxWidth: '750px' }} id="checkout">
            <div className="value-stack-box">
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.75rem', fontWeight: 800, padding: '0.4rem 1rem', borderRadius: '100px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  🔥 Offer Ends Today
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Total Value Stack</h2>
                <p style={{ color: 'var(--text-muted-light)', fontSize: '0.9rem', fontWeight: 500 }}>Everything you get when you pre-book your seat right now.</p>
              </div>

              <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-dark)', marginBottom: '2rem' }}>
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', marginTop: '0.5rem', borderTop: '2px solid var(--border-dark)' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>Total Value</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-muted-dark)', textDecoration: 'line-through' }}>₹4,497</span>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted-light)', marginBottom: '0.5rem' }}>Today's Exclusive Price</div>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '2rem', textShadow: '0 0 40px rgba(255,90,31,0.4)' }}>
                  ₹99
                </div>
                <a href="#checkout" className="btn-primary" style={{ padding: '1.25rem', fontSize: '1.1rem' }}>
                  LOCK MY SEAT NOW FOR ₹99
                </a>
              </div>
            </div>

            {/* FAQ ACCORDION */}
            <div className="faq-wrap">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h3>
              <div className="faq-item">
                <div className="faq-header" onClick={toggleFAQ}>
                  Do I need an idea to join?
                  <Plus size={18} className="faq-icon" />
                </div>
                <div className="faq-content">No. We teach you how to start with a bleeding neck "Problem", rather than marrying a solution early.</div>
              </div>
              <div className="faq-item">
                <div className="faq-header" onClick={toggleFAQ}>
                  Is there a recording?
                  <Plus size={18} className="faq-icon" />
                </div>
                <div className="faq-content">No. We do not provide replays. This forces commitment and ensures a high-trust environment.</div>
              </div>
              <div className="faq-item">
                <div className="faq-header" onClick={toggleFAQ}>
                  Refund policy?
                  <Plus size={18} className="faq-icon" />
                </div>
                <div className="faq-content">Zero risk. If you don't feel it was worth 10X the ₹99 you paid, we refund you instantly.</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* STICKY CTA */}
      <div className={`sticky-bar ${showSticky ? 'visible' : ''}`}>
        <div className="sticky-timer-zone">
          <div className="offer-text">Offer Ends in</div>
          <div className="time">{String(timeLeft.minutes).padStart(2, '0')}<span style={{ fontSize: '0.8rem', color: '#666', margin: '0 2px' }}>M</span> {String(timeLeft.seconds).padStart(2, '0')}<span style={{ fontSize: '0.8rem', color: '#666', margin: '0 2px' }}>S</span></div>
        </div>
        <a href="#checkout" className="sticky-cta-zone w-full">
          Join Now At Just<br />
          <span style={{ fontSize: '0.85rem' }}><del style={{ color: '#888', marginRight: '4px' }}>₹1999</del></span>
          <span style={{ fontSize: '1.1rem' }}>₹99/-</span>
        </a>
      </div>
    </>
  )
}

export default App
