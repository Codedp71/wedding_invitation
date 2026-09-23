'use client';
import { useState, useEffect } from 'react';
import styles from './Wishes.module.css';

const DEFAULT_WISHES = [
  { id: 1, name: 'Aarav Sharma', message: 'Wishing you both a lifetime of love and happiness!' },
  { id: 2, name: 'Priya Patel', message: 'So excited to celebrate your special day. Congratulations!' }
];

export default function Wishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState(DEFAULT_WISHES);
  const [sent, setSent] = useState(false);

  // Load saved wishes from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_wishes');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      const newWish = { id: Date.now(), name: name.trim(), message: message.trim() };
      const updatedWishes = [newWish, ...wishes];
      setWishes(updatedWishes);
      
      // Save permanently in browser storage
      try {
        localStorage.setItem('wedding_wishes', JSON.stringify(updatedWishes));
      } catch (e) {
        console.error(e);
      }

      setSent(true);
      setName('');
      setMessage('');
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className={`${styles.card} reveal`}>
        <div className={styles.header}>
          <h2 className={styles.title}>WARM WISHES</h2>
          <p className={styles.subtitle}>(LEAVE A MESSAGE)</p>
        </div>

        {sent ? (
          <div className={styles.success}>
            <span className={styles.successIcon}>🌸</span>
            <p>Thank you! Your wish has been added.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">YOUR NAME <span className={styles.asterisk}>*</span></label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name" 
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">WISHES & MESSAGES</label>
              <textarea 
                id="message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send us a little note..." 
                rows={4}
                required 
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span className={styles.flowerIcon}>🌸</span>
              <span className={styles.sendIcon}>➢</span> SEND WISH
            </button>
          </form>
        )}
      </div>
      
      <div className={`${styles.wishesWall} reveal`}>
        <h3 className={styles.wallTitle}>FROM OUR LOVED ONES</h3>
        <div className={styles.masonry}>
          {wishes.map((w) => (
            <div key={w.id} className={styles.wishNote}>
              <p className={styles.wishMsg}>"{w.message}"</p>
              <p className={styles.wishName}>— {w.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
