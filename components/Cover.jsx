'use client';
import { useState } from 'react';
import styles from './Cover.module.css';

export default function Cover({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleTap = () => {
    setOpening(true);
    onOpen();
  };

  return (
    <div className={`${styles.coverOverlay} ${opening ? styles.opening : ''}`}>
      {/* Left door panel */}
      <div className={styles.doorLeft}>
        <div className={styles.doorBgLeft} />
        <div className={styles.doorBorderRight} />
      </div>

      {/* Right door panel */}
      <div className={styles.doorRight}>
        <div className={styles.doorBgRight} />
        <div className={styles.doorBorderLeft} />
      </div>

      {/* Center opening element (wax seal + mandala + button) */}
      <div className={styles.centerContent}>
        {/* Mandala background */}
        <svg className={styles.mandala} width="350" height="350" viewBox="0 0 400 400" fill="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 200 200)`}>
              <ellipse cx="200" cy="60" rx="14" ry="40" stroke="#C8A45D" strokeWidth="0.8" fill="#C8A45D" fillOpacity="0.06" />
              <ellipse cx="200" cy="110" rx="8" ry="22" stroke="#C8A45D" strokeWidth="0.5" fill="none" />
            </g>
          ))}
          <circle cx="200" cy="200" r="180" stroke="#C8A45D" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="150" stroke="#C8A45D" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="45" stroke="#C8A45D" strokeWidth="1" fill="#C8A45D" fillOpacity="0.05" />
        </svg>

        {/* Wax seal with names */}
        <div className={styles.seal}>
          <div className={styles.sealInner}>
            <span className={`${styles.sealName} font-script`}>Pankaj</span>
            <span className={styles.sealAmp}>&</span>
            <span className={`${styles.sealName} font-script`}>Manpreet</span>
          </div>
        </div>

        <button className={styles.tapBtn} onClick={handleTap} disabled={opening}>
          <span className={styles.sparkle}>✦</span>
          TAP HERE
          <span className={styles.sparkle}>✦</span>
        </button>
      </div>
    </div>
  );
}
