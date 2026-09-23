'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Countdown.module.css';

// Deterministic seed-based pseudo-random generator
const pseudoRand = (i, seed) => {
  const x = Math.sin((i + 1) * 9999 + seed) * 10000;
  return x - Math.floor(x);
};

// 75 festive fluttering confetti pieces
const CONFETTI_PIECES = Array.from({ length: 75 }).map((_, i) => {
  const left = pseudoRand(i, 1) * 96 + 2; // 2% to 98%
  const delay = pseudoRand(i, 2) * 3.5; // 0s to 3.5s delay
  const duration = 3.5 + pseudoRand(i, 3) * 3.5; // 3.5s to 7s duration
  const size = 8 + pseudoRand(i, 4) * 8; // 8px to 16px size
  const colors = ['#D4868E', '#C8A45D', '#2C4C3B', '#E87A90', '#F7D070', '#842337', '#E0A96D'];
  const color = colors[Math.floor(pseudoRand(i, 5) * colors.length)];
  const isCircle = i % 3 === 0;
  const isRibbon = i % 7 === 0;
  const icon = i % 11 === 0 ? '🌸' : i % 13 === 0 ? '✨' : i % 17 === 0 ? '🎉' : i % 19 === 0 ? '⭐' : null;

  return {
    left: `${left.toFixed(2)}%`,
    delay: `${delay.toFixed(2)}s`,
    duration: `${duration.toFixed(2)}s`,
    size: `${size.toFixed(1)}px`,
    color,
    borderRadius: isCircle ? '50%' : isRibbon ? '2px 8px' : '2px',
    aspectRatio: isRibbon ? '1 / 2.5' : '1',
    icon,
  };
});

// Central 360° firework burst particles
const BURST_PARTICLES = Array.from({ length: 28 }).map((_, i) => {
  const angle = (i * 360) / 28;
  const rad = (angle * Math.PI) / 180;
  const distance = 140 + (i % 4) * 50;
  const x = Math.cos(rad) * distance;
  const y = Math.sin(rad) * distance;
  const colors = ['#D4868E', '#C8A45D', '#F7D070', '#842337', '#2C4C3B', '#E87A90'];
  return {
    x: `${x.toFixed(0)}px`,
    y: `${y.toFixed(0)}px`,
    color: colors[i % colors.length],
    size: `${8 + (i % 4) * 5}px`,
    delay: `${(i % 3) * 0.08}s`,
  };
});

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [arrived, setArrived] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date('2026-11-10T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setArrived(true);
      } else {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleReveal = () => {
    if (isJoining || isRevealed) return;
    setIsJoining(true);
    
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setIsRevealed(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <section className={`section-padding text-center ${styles.section} ${isRevealed ? styles.partySection : ''}`}>
      
      {/* Festive Party Celebration Layer */}
      {showConfetti && (
        <>
          {/* Central Firework Burst */}
          <div className={styles.burstContainer}>
            {BURST_PARTICLES.map((b, i) => (
              <div 
                key={`burst-${i}`} 
                className={styles.burstPiece} 
                style={{
                  '--burst-x': b.x,
                  '--burst-y': b.y,
                  width: b.size,
                  height: b.size,
                  backgroundColor: b.color,
                  animationDelay: b.delay,
                }} 
              />
            ))}
          </div>

          {/* Fluttering Swaying Confetti Shower */}
          <div className={styles.confettiContainer}>
            {CONFETTI_PIECES.map((c, i) => (
              <div 
                key={`confetti-${i}`} 
                className={styles.confetti} 
                style={{
                  left: c.left,
                  animationDelay: c.delay,
                  animationDuration: c.duration,
                  width: c.icon ? 'auto' : c.size,
                  height: c.icon ? 'auto' : c.size,
                  backgroundColor: c.icon ? 'transparent' : c.color,
                  borderRadius: c.borderRadius,
                  aspectRatio: c.aspectRatio,
                }}
              >
                {c.icon && <span className={styles.confettiIcon} style={{ fontSize: c.size }}>{c.icon}</span>}
              </div>
            ))}
          </div>
        </>
      )}

      {!isRevealed ? (
        <div className={styles.revealWrapper} onClick={handleReveal}>
          <div className={styles.frameContainer}>
            <video 
              ref={videoRef}
              src="/hands_animation.mp4" 
              className={styles.handFrame}
              playsInline
              muted
              onEnded={handleVideoEnd}
            />
          </div>
          <p className={`${styles.tapText} ${isJoining ? styles.fadeOut : ''}`}>
            Tap to join them together
          </p>
        </div>
      ) : (
        <div className={styles.revealedContent}>
          <div className={styles.saveDateBox}>
            <p className={styles.saveDateLabel}>SAVE THE DATE</p>
            <h2 className="font-script" style={{ 
              fontSize: '3.5rem', 
              color: '#842337', 
              margin: 0, 
              paddingBottom: '20px',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              flexWrap: 'wrap'
            }}>
              <span>10th</span>
              <span>November</span>
              <span>2026</span>
            </h2>
          </div>

          <div className={styles.grid}>
            <div className={styles.unitBox}>
              <span className={styles.number}>{String(time.days).padStart(2, '0')}</span>
              <span className={styles.label}>DAYS</span>
            </div>
            <div className={styles.unitBox}>
              <span className={styles.number}>{String(time.hours).padStart(2, '0')}</span>
              <span className={styles.label}>HOURS</span>
            </div>
            <div className={styles.unitBox}>
              <span className={styles.number}>{String(time.minutes).padStart(2, '0')}</span>
              <span className={styles.label}>MINUTES</span>
            </div>
            <div className={styles.unitBox}>
              <span className={styles.number}>{String(time.seconds).padStart(2, '0')}</span>
              <span className={styles.label}>SECONDS</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
