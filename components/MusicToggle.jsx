'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './MusicToggle.module.css';

export default function MusicToggle({ autoStart }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (autoStart && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [autoStart]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/background_music.mp3" type="audio/mpeg" />
      </audio>
      <button className={styles.btn} onClick={toggle} aria-label="Toggle music">
        <span className={`${styles.icon} ${playing ? styles.playing : ''}`}>
          {playing ? '🔊' : '🔇'}
        </span>
        <span className={styles.label}>{playing ? 'Music On' : 'Music Off'}</span>
      </button>
    </>
  );
}
