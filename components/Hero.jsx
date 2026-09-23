'use client';
import Image from 'next/image';
import { MandalaSVG } from './Decorations';
import styles from './Hero.module.css';
import weddingData from '../data/weddingData';

// Removed inline Ganesha SVG (now using Gapnti.png)

// Inline SVG: Lotus flowers
function LotusSVG({ className, flip }) {
  return (
    <svg className={className} width="80" height="60" viewBox="0 0 80 60" fill="none" style={flip ? { transform: 'scaleX(-1)' } : {}}>
      <path d="M40 55C40 55 30 40 20 35C10 30 5 32 5 35C5 40 15 50 40 55Z" fill="#E8B4B8" fillOpacity="0.4" stroke="#D4868E" strokeWidth="0.5" />
      <path d="M40 55C40 55 50 40 60 35C70 30 75 32 75 35C75 40 65 50 40 55Z" fill="#E8B4B8" fillOpacity="0.4" stroke="#D4868E" strokeWidth="0.5" />
      <path d="M40 55C40 55 35 38 30 30C25 22 22 22 24 26C28 35 35 48 40 55Z" fill="#F0C8CC" fillOpacity="0.5" stroke="#D4868E" strokeWidth="0.5" />
      <path d="M40 55C40 55 45 38 50 30C55 22 58 22 56 26C52 35 45 48 40 55Z" fill="#F0C8CC" fillOpacity="0.5" stroke="#D4868E" strokeWidth="0.5" />
      <path d="M40 55C40 55 38 35 40 25C42 35 40 55 40 55Z" fill="#F5D5D8" fillOpacity="0.6" stroke="#D4868E" strokeWidth="0.5" />
      {/* Stem */}
      <line x1="40" y1="55" x2="40" y2="60" stroke="#6B8F71" strokeWidth="1" />
    </svg>
  );
}

// Inline SVG: Tree silhouette
function TreeSVG({ className }) {
  return (
    <svg className={className} width="120" height="200" viewBox="0 0 120 200" fill="none">
      <ellipse cx="60" cy="60" rx="50" ry="55" fill="#4A7A5A" fillOpacity="0.25" />
      <ellipse cx="45" cy="45" rx="35" ry="40" fill="#5A8A6A" fillOpacity="0.2" />
      <ellipse cx="75" cy="50" rx="30" ry="35" fill="#4A7A5A" fillOpacity="0.18" />
      <rect x="55" y="100" width="10" height="100" rx="3" fill="#8B7355" fillOpacity="0.25" />
    </svg>
  );
}

const PETALS = [
  { left: '8%', delay: '0s', duration: '8s', size: '14px' },
  { left: '22%', delay: '1.2s', duration: '11s', size: '20px' },
  { left: '37%', delay: '2.5s', duration: '9s', size: '16px' },
  { left: '53%', delay: '0.8s', duration: '12s', size: '22px' },
  { left: '68%', delay: '3.1s', duration: '7s', size: '15px' },
  { left: '84%', delay: '1.7s', duration: '10s', size: '18px' },
  { left: '15%', delay: '4.0s', duration: '9s', size: '21px' },
  { left: '30%', delay: '2.0s', duration: '8s', size: '13px' },
  { left: '45%', delay: '0.4s', duration: '11s', size: '17px' },
  { left: '60%', delay: '3.6s', duration: '10s', size: '19px' },
  { left: '75%', delay: '1.0s', duration: '12s', size: '16px' },
  { left: '90%', delay: '2.8s', duration: '8s', size: '20px' },
];

export default function Hero() {
  const { couple } = weddingData;
  return (
    <section className={styles.hero}>
      {/* Background decorative elements */}
      <div className={styles.scenery}>
        <div className={styles.watercolorBg} />
        <div className={styles.pillarLeft} />
        <div className={styles.pillarRight} />
        <TreeSVG className={styles.treeLeft} />
        <TreeSVG className={styles.treeRight} />
        <LotusSVG className={styles.lotusLeft} />
        <LotusSVG className={styles.lotusRight} flip />
        <LotusSVG className={styles.lotusCenter} />
      </div>

      {/* Floating rose petals */}
      <div className={styles.petals}>
        {PETALS.map((p, i) => (
          <span key={i} className={styles.petal} style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
          }}>🌸</span>
        ))}
      </div>

      <MandalaSVG size={600} className={styles.mandala} />

      <div className={`${styles.content} reveal`}>
        <div className={styles.ganeshaWrapper}>
          <Image 
            src="/Gapnti.png" 
            alt="Ganesha" 
            width={120} 
            height={120} 
            className={styles.ganeshaImg} 
            priority
          />
        </div>
        <p className={styles.blessing}>।। श्री गणेशाय नमः ।।</p>
        <p className={styles.subBlessing}>We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of</p>
        <div className="gold-divider" />
        <h1 className={`${styles.names} font-script`}>
          {couple.groom} <span className={styles.amp}>&</span> {couple.bride}
        </h1>
        <p className={styles.tagline}>{couple.tagline}</p>
        <div className="ornamental-divider"><span>❖</span></div>
      </div>
    </section>
  );
}
