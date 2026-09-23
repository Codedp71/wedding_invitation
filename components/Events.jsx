'use client';
import styles from './Events.module.css';
import { EventIcon } from './Decorations';
import weddingData from '../data/weddingData';

export default function Events() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <h2 className="text-center reveal" style={{ fontSize: '2.8rem', marginBottom: '60px' }}>
        Wedding Ceremonies
      </h2>
      <div className={styles.grid}>
        {weddingData.events.map((evt) => (
          <div key={evt.id} className={`${styles.card} reveal`}>
            <div className={styles.icon}>
              <EventIcon type={evt.icon} />
            </div>
            <h3 className={styles.title}>{evt.title}</h3>
            <p className={styles.date}>{evt.date}</p>
            <p className={styles.time}>{evt.time}</p>
            <div className="gold-divider" />
            <p className={styles.venue}>{evt.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
