import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, CheckCircle2, ChevronRight } from 'lucide-react';

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
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 52 });
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
    const handleScroll = () => setShowSticky(window.scrollY > 250);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="container" style={{ paddingBottom: '90px', paddingTop: '1rem' }}>

        {/* BRAND LOGO */}
        <header className="brand-header">
          <div className="brand-title">Idea To Reality Workshop</div>
        </header>

        {/* HERO TYPOGRAPHY */}
        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="top-fold-container"
        >
          <div className="hero-badge">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            LIVE 90 MINUTE BOOTCAMP
          </div>

          <motion.h1 variants={fadeInUp} className="hero-headline">
            Before You Burn ₹50k Building It—
            Validate It In 60 Minutes.
          </motion.h1>

          <motion.p variants={fadeInUp} className="hero-subheadline">
            Stop guessing. Force users to prove demand with literal credit card swipes <span style={{ color: '#fff', borderBottom: '1px solid var(--accent-primary)' }}>BEFORE</span> you code anything.
          </motion.p>

          {/* PREMIUM INSTRUCTOR CARD */}
          <motion.div variants={fadeInUp} className="glass-panel w-full">
            <div className="instructor-profile">

              {/* Image specific to user size request */}
              <div className="instructor-img-box">
                <div style={{ color: 'var(--border-strong)', marginBottom: '0.25rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
                </div>
                <div className="img-label">HALF-BODY PNG<br />Looking Left</div>
              </div>

              <div className="instructor-details">
                <div className="role-label">Your Live Coach</div>
                <div className="name">[ Instructor Name ]</div>
                <div className="title">India's Leading Startup Strategist</div>

                {/* Dense stats directly in the card */}
                <div className="stats-grid">
                  <div className="stat-row">
                    <Check size={14} color="var(--accent-primary)" strokeWidth={3} />
                    <span>Trained over 400+ Founders</span>
                  </div>
                  <div className="stat-row">
                    <Check size={14} color="var(--accent-primary)" strokeWidth={3} />
                    <span>Killed 15+ Bad Ideas Live</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* COMPACT SOCIAL PROOF STRIP */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="proof-bar">
          <div className="stars-container">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>
          <div className="proof-text">
            <strong>400+ Founders</strong> Rate Us 4.9/5
          </div>
        </motion.div>

        {/* COMPARISON GRID (The 90% Failure Trap) */}
        <section className="content-section">
          <h2 className="section-title">The 90% Failure Trap</h2>
          <div className="comparison-grid">

            <div className="comp-card">
              <h4 className="text-red">The Old Way (Losing)</h4>
              <ul className="comp-list">
                <li><span style={{ color: '#EF4444' }}>×</span> Spend 3 months coding secretly</li>
                <li><span style={{ color: '#EF4444' }}>×</span> Launch quietly on a Tuesday</li>
                <li><span style={{ color: '#EF4444' }}>×</span> Pray for customers to arrive</li>
              </ul>
              <div style={{ color: '#EF4444', fontWeight: 800, marginTop: '1rem', fontSize: '1.2rem', padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
                - ₹50,000 Wasted
              </div>
            </div>

            <div className="comp-card success">
              <h4 className="text-green">The New Way (Winning)</h4>
              <ul className="comp-list">
                <li className="win"><CheckCircle2 size={16} color="#10B981" /> Create a Smoke Test Offer</li>
                <li className="win"><CheckCircle2 size={16} color="#10B981" /> Pitch to target market</li>
                <li className="win"><CheckCircle2 size={16} color="#10B981" /> Collect pre-orders/swipes</li>
              </ul>
              <div style={{ color: '#10B981', fontWeight: 800, marginTop: '1rem', fontSize: '1.2rem', padding: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
                + Infinite ROI
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* NEW MODERN STICKY CHECKOUT */}
      <div className="sticky-checkout" style={{ transform: showSticky ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.4s ease' }}>
        <div className="sticky-pricing">
          <span className="original-price text-muted">₹1,999</span>
          <span className="live-price" style={{ display: 'flex', alignItems: 'flex-end', gap: '0.4rem' }}>
            ₹99
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', paddingBottom: '0.2rem' }}>
              in {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </span>
        </div>
        <a href="#checkout" className="btn-primary" style={{ flexGrow: 1, marginLeft: '1rem' }}>
          Book Spot <ChevronRight size={20} className="ml-1" />
        </a>
      </div>
    </>
  )
}

export default App
