import styles from './Venue.module.css';
import weddingData from '../data/weddingData';

export default function Venue() {
  const { venue } = weddingData;
  return (
    <section className={`section-padding text-center ${styles.section}`}>
      <h2 className="reveal" style={{ fontSize: '2.8rem', marginBottom: '48px' }}>
        Wedding Venue
      </h2>
      <div className={`${styles.card} reveal`}>
        <h3 className={styles.name}>{venue.name}</h3>
        <p className={styles.address}>{venue.address}</p>
        <div className="gold-divider" />
        <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
          📍 View on Map
        </a>
      </div>
    </section>
  );
}
