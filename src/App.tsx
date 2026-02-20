import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, ArrowRight, Clock, Target, Plus, Star, Zap, Activity, MonitorPlay, AlertTriangle } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
    const handleScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFAQ = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.parentElement;
    if (target) { target.classList.toggle('active'); }
  };

  return (
    <>
      <div className="container pt-6 mb-4">
        <div className="badge-live">
          <span className="dot"></span> LIVE BOOTCAMP • 100 SEATS
        </div>
      </div>

      {/* 1. HERO SECTION - MOBILE FIRST EXTREME */}
      <section className="section-tight" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="grid grid-cols-2 items-center">

            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex-col items-start w-full">

              <motion.h1 variants={fadeInUp} className="h1-mega">
                Don't Build It.<br />
                <span className="text-orange-grad">Validate It</span><br />
                In 60 Mins.
              </motion.h1>

              {/* MOBILE ONLY HERO IMAGE - Show right under headline to stop scroll */}
              <motion.div variants={fadeInUp} className="mobile-only hero-img-box w-full mb-6">
                <Target size={40} className="mb-2" style={{ color: 'var(--border-dark)' }} />
                [ Upload 4:5 Mobile Portrait PNG Here ]<br />
                <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Ideal size: 800x1000px</span>
                <div className="floating-pill-dark">
                  <Star size={14} fill="#FFD700" color="#FFD700" /> 4.9/5 RATED
                </div>
              </motion.div>

              <motion.p variants={fadeInUp} className="h3-bold text-muted mb-6" style={{ lineHeight: 1.4 }}>
                Stop writing code for ideas nobody wants. Get literal credit card swipes <span style={{ color: 'var(--text-black)' }}>before launching</span>.
              </motion.p>

              <motion.div variants={fadeInUp} className="w-full mb-8">
                <ul className="bullet-list">
                  <li><Check size={20} className="bullet-icon" /> Filter out bad ideas instantly.</li>
                  <li><Check size={20} className="bullet-icon" /> Force users to prove demand with cash.</li>
                </ul>
              </motion.div>

              {/* Huge Mobile CTA Block */}
              <motion.div variants={fadeInUp} className="w-full bg-light border border-light rounded-3xl p-5 mb-8 text-center" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-col items-start gap-1 text-left">
                    <span className="text-muted font-bold text-sm" style={{ textDecoration: 'line-through' }}>₹1,999</span>
                    <span className="text-4xl font-black text-black leading-none">₹99</span>
                  </div>
                  <div className="flex gap-1 items-center bg-white px-3 py-2 rounded-xl border border-light shadow-sm">
                    <span className="text-black font-black text-xl">{String(timeLeft.hours).padStart(2, '0')}</span><span className="text-muted">:</span>
                    <span className="text-black font-black text-xl">{String(timeLeft.minutes).padStart(2, '0')}</span><span className="text-muted">:</span>
                    <span className="text-xl font-black" style={{ color: 'var(--orange-1)' }}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                </div>

                <a href="#checkout" className="btn-super w-full">
                  SECURE YOUR SEAT
                </a>

                <div className="flex items-center justify-center gap-4 text-xs font-bold text-muted mt-4 uppercase">
                  <span className="flex items-center gap-1"><Shield size={14} /> Secure</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> 1.5 Hr</span>
                </div>
              </motion.div>
            </motion.div>

            {/* DESKTOP ONLY HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="desktop-only hero-img-box"
            >
              <Target size={64} className="mb-4 text-gray-300" />
              [ Place your Half-Body Transparent PNG here ]<br />
              <span className="text-sm mt-2 font-normal">Ideally 800x1000px, looking left</span>

              <div className="floating-pill-dark" style={{ top: '20%', left: '-30px', right: 'auto' }}>
                <Zap size={16} color="var(--orange-1)" /> 150+ FOUNDERS
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. MOBILE SCROLL STOPPER (STATS) */}
      <div className="container">
        <div className="mobile-stats-grid">
          <div className="stat-box">
            <span className="stat-box-val">400+</span>
            <span className="stat-box-lbl">Trained</span>
          </div>
          <div className="stat-box">
            <span className="stat-box-val">15+</span>
            <span className="stat-box-lbl">Killed Ideas</span>
          </div>
          <div className="stat-box">
            <span className="stat-box-val neon">60m</span>
            <span className="stat-box-lbl">To Clarity</span>
          </div>
          <div className="stat-box" style={{ background: 'var(--orange-1)', border: 'none' }}>
            <div className="flex justify-center gap-0.5 mb-1 text-white">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <span className="stat-box-val" style={{ color: '#fff', fontSize: '2rem' }}>4.9/5</span>
          </div>
        </div>
      </div>

      {/* 3. THE PROBLEM - HIGH CONTRAST STACK */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h2-mega text-black">The 90% Failure Trap</h2>
            <p className="h3-bold text-muted">Why brilliant people build products nobody buys.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* The Old Way */}
            <div className="card-light w-full">
              <div className="bg-light text-muted font-bold px-3 py-1 rounded w-fit mb-6 text-sm">THE OLD WAY (LOSING)</div>
              <h3 className="h3-bold text-black mb-6">Build First, Ask Later</h3>
              <div className="flex-col gap-4 mb-8">
                <div className="flex gap-3 text-muted font-bold text-lg"><span className="text-gray-400">×</span> Spend 3 months coding</div>
                <div className="flex gap-3 text-muted font-bold text-lg"><span className="text-gray-400">×</span> Launch on a Tuesday</div>
                <div className="flex gap-3 text-muted font-bold text-lg"><span className="text-gray-400">×</span> Pray for customers</div>
              </div>
              <div className="font-black text-gray-400 text-3xl md:text-4xl">- ₹50,000 Wasted</div>
            </div>

            {/* The New Way */}
            <div className="card-light border-orange w-full" style={{ position: 'relative', overflow: 'hidden' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -z-10"></div>
              <div className="inline-block bg-orange-100 font-black px-3 py-1 rounded w-fit mb-6 text-sm uppercase tracking-wider" style={{ color: 'var(--orange-1)' }}>The New Way (Winning)</div>
              <h3 className="h3-bold text-black mb-6">Validate First, Build Last</h3>
              <div className="flex-col gap-4 mb-8">
                <div className="flex gap-3 text-black font-bold text-lg"><CheckCircle2 className="shrink-0" size={24} style={{ color: 'var(--orange-1)' }} /> Create a Smoke Test</div>
                <div className="flex gap-3 text-black font-bold text-lg"><CheckCircle2 className="shrink-0" size={24} style={{ color: 'var(--orange-1)' }} /> Pitch to target market</div>
                <div className="flex gap-3 text-black font-bold text-lg"><CheckCircle2 className="shrink-0" size={24} style={{ color: 'var(--orange-1)' }} /> Collect pre-orders</div>
              </div>
              <div className="font-black text-4xl md:text-5xl" style={{ color: 'var(--orange-1)' }}>+ Infinite ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 3 STEP FRAMEWORK */}
      <section className="section bg-light" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h2-mega">The Sandbox Blueprint</h2>
            <p className="h3-bold text-muted">We execute this exact framework live.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="card-light shadow-sm w-full relative">
              <div className="text-6xl md:text-8xl font-black absolute top-2 right-4 text-gray-100 uppercase -z-10 pointer-events-none">01</div>
              <div className="bg-black text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                <Activity size={28} />
              </div>
              <h3 className="h3-bold text-black mb-4">The Mom Test</h3>
              <p className="text-muted font-bold text-lg leading-snug">Stop asking "would you use this?" Learn the 3 questions that reveal painful truths.</p>
            </div>

            <div className="card-dark w-full shadow-2xl relative" style={{ transform: 'scale(1.02)' }}>
              <div className="text-6xl md:text-8xl font-black absolute top-2 right-4 text-gray-800 uppercase -z-10 pointer-events-none">02</div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xl" style={{ background: 'var(--orange-1)' }}>
                <MonitorPlay size={28} color="#fff" />
              </div>
              <h3 className="h3-bold text-white mb-4">₹500 Smoke Test</h3>
              <p className="text-gray-400 font-bold text-lg leading-snug">Build a landing page with a fake checkout to measure literal credit card intent live.</p>
            </div>

            <div className="card-light shadow-sm w-full relative">
              <div className="text-6xl md:text-8xl font-black absolute top-2 right-4 text-gray-100 uppercase -z-10 pointer-events-none">03</div>
              <div className="bg-black text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                <Target size={28} />
              </div>
              <h3 className="h3-bold text-black mb-4">Intel Hack</h3>
              <p className="text-muted font-bold text-lg leading-snug">Ethically steal your competitor's traffic data to see exactly what messaging converts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HEAVY PRICING CTA */}
      <section className="section">
        <div className="container" id="checkout">
          <div className="pricing-card-dark flex-col items-center text-center">
            <div className="bg-white text-black text-xs font-black px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest shadow-xl">
              ⚠️ Live Workshop Offer
            </div>
            <h2 className="h2-mega text-white mb-4">Stop Guessing.</h2>
            <p className="h3-bold text-gray-400 mb-8 max-w-md mx-auto">Walk away with exact proof of demand before you code anything.</p>

            <div className="bg-black border border-gray-800 rounded-3xl p-6 w-full mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-bold text-lg">Standard</span>
                <span className="text-gray-600 line-through text-2xl font-black">₹1,999</span>
              </div>
              <div className="flex justify-between items-center pb-6 border-b border-gray-800">
                <span className="font-black text-xl md:text-2xl" style={{ color: 'var(--orange-1)' }}>Today Only</span>
                <span className="text-white font-black text-5xl md:text-6xl drop-shadow-[0_0_20px_rgba(255,69,0,0.4)]">₹99</span>
              </div>
              <div className="pt-6">
                <div className="timer-pill">
                  <AlertTriangle size={18} />
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            </div>

            <a href="#checkout" className="btn-super w-full py-5 text-xl">
              SECURE SEAT NOW
            </a>
            <div className="mt-6 text-center font-bold text-xs text-gray-500 uppercase tracking-wider">Only 100 Seats Total • Next Batch is ₹499</div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="section pt-0">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="h2-mega text-center mb-8">FAQ</h2>
          <div className="border-t-2 border-light">
            <div className="faq-item">
              <div className="faq-header" onClick={toggleFAQ}>
                Do I need an idea?
                <Plus size={24} className="faq-icon" />
              </div>
              <div className="faq-content text-lg">
                Absolutely not. We teach you how to start with a bleeding neck "Problem", rather than marrying a solution early.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-header" onClick={toggleFAQ}>
                Is there a recording?
                <Plus size={24} className="faq-icon" />
              </div>
              <div className="faq-content text-lg">
                No. We do not provide replays. This forces commitment and ensures a high-trust environment.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-header" onClick={toggleFAQ}>
                Refund policy?
                <Plus size={24} className="faq-icon" />
              </div>
              <div className="faq-content text-lg">
                Zero risk. If you don't feel it was worth 10X the ₹99 you paid, we refund you instantly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STICKY BOTTOM BAR FOR MOBILE */}
      <div className={`sticky-bottom-bar ${showSticky ? 'show' : ''}`}>
        <div className="flex-col gap-0 w-full" style={{ flex: 1 }}>
          <div className="text-gray-500 font-bold text-xs uppercase" style={{ textDecoration: 'line-through' }}>₹1,999</div>
          <div className="text-black font-black text-3xl leading-none">₹99</div>
        </div>
        <a href="#checkout" className="btn-super py-4 px-6 relative" style={{ flex: 1.5 }}>
          LOCK SEAT <ArrowRight size={20} className="absolute right-4" />
        </a>
      </div>
    </>
  )
}

export default App
