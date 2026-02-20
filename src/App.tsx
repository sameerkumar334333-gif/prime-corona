import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Target } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 59, seconds: 59 });
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) { seconds--; }
        else {
          seconds = 59;
          if (minutes > 0) { minutes--; }
          else {
            minutes = 59;
            if (hours > 0) { hours--; }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="container" style={{ paddingBottom: '100px' }}>

        {/* LOGO TITLE */}
        <header className="logo-header">
          <h2>Idea To Reality<br />Workshop</h2>
          <div className="logo-divider">
            <span></span><span></span><span></span><span></span>
          </div>
        </header>

        {/* MAIN HERO CARD (Centered, Gold Border, Red Badge) */}
        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="hero-card-wrapper"
        >
          <div className="hero-red-badge">
            90 MINUTE ONLINE WORKSHOP<br />
            Filter Your Idea & Prove Demand Live
          </div>

          <div className="hero-main-card">
            <motion.h1 variants={fadeInUp} className="h1-centered">
              Before You Burn ₹50k Building It—
              Validate It In 60 Minutes.
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-subtext">
              Stop guessing. Force users to prove demand with literal credit card swipes BEFORE you launch.
            </motion.p>
          </div>
        </motion.div>

        {/* INSTRUCTOR DETAILS ROW */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="instructor-row">
            <div className="instructor-img-placeholder">
              <Target size={30} color="#666" className="mb-2" />
              <span style={{ color: '#666', fontSize: '0.75rem', textAlign: 'center' }}>Half-body PNG<br />Looking Left</span>
            </div>

            <div className="instructor-info">
              <div className="label">I will be your coach for 90 minutes</div>
              <div className="name">[ Instructor Name ]</div>
              <div className="title">Serial Entrepreneur & Startup Coach</div>
              <div className="stats">
                <span style={{ color: 'var(--text-gold)' }}>Killed 15+ Bad Ideas</span><br />
                Trained over 400+ Founders in the Last Year
              </div>
            </div>
          </div>

          {/* RATINGS CARD */}
          <div className="rating-card mb-4" style={{ marginBottom: '3rem' }}>
            <div className="rating-stars">
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
            </div>
            <div className="rating-text">
              <strong>400+ Founders Trained</strong><br />
              My Programs score a 4.9/5 Rating
            </div>
          </div>
        </motion.div>


        {/* PROBLEM SECTION */}
        <section className="generic-section">
          <h2>The 90% Failure Trap 🔻</h2>
          <div className="problem-grid">

            <div className="feature-box">
              <h3>The Old Way (Losing)</h3>
              <ul className="feature-list">
                <li><span style={{ color: '#666' }}>×</span> Spend 3 months coding secretly</li>
                <li><span style={{ color: '#666' }}>×</span> Launch quietly on a Tuesday</li>
                <li><span style={{ color: '#666' }}>×</span> Pray for customers to arrive</li>
              </ul>
              <div style={{ color: '#DC2626', fontWeight: 800, marginTop: '1rem', fontSize: '1.2rem' }}>
                - ₹50,000 Wasted
              </div>
            </div>

            <div className="feature-box" style={{ borderColor: 'var(--border-gold)', background: 'var(--bg-card-light)' }}>
              <h3 style={{ color: 'var(--text-gold)', borderColor: '#444' }}>The New Way (Winning)</h3>
              <ul className="feature-list">
                <li style={{ color: '#fff' }}><CheckCircle2 size={18} color="var(--border-gold)" /> Create a Smoke Test Offer</li>
                <li style={{ color: '#fff' }}><CheckCircle2 size={18} color="var(--border-gold)" /> Pitch to target market</li>
                <li style={{ color: '#fff' }}><CheckCircle2 size={18} color="var(--border-gold)" /> Collect pre-orders/swipes</li>
              </ul>
              <div style={{ color: 'var(--text-gold)', fontWeight: 800, marginTop: '1rem', fontSize: '1.2rem' }}>
                + Infinite ROI
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* STICKY BOTTOM BAR (Like the screenshot exactly) */}
      <div className="sticky-bottom-bar" style={{ transform: showSticky ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.4s ease' }}>
        <div className="sticky-prices">
          <div className="price-row">
            <span className="current">₹99</span>
            <span className="strike">₹999</span>
          </div>
          <div className="timer-text">
            Offer Ends in {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')} Mins
          </div>
        </div>
        <a href="#checkout" className="btn-orange text-center flex-col items-center justify-center p-2" style={{ flexGrow: 1, marginLeft: '1rem' }}>
          <span style={{ fontSize: '0.85rem', display: 'block' }}>BOOK YOUR SPOT NOW AT</span>
          <span style={{ fontSize: '1.1rem', display: 'block' }}>₹99/-</span>
        </a>
      </div>
    </>
  )
}

export default App
