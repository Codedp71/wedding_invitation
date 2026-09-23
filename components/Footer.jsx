import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`text-center ${styles.footer}`}>
      <h2 className="font-script" style={{ fontSize: '3.5rem', color: 'var(--color-gold)', marginBottom: '8px' }}>
        Pankaj & Manpreet
      </h2>
      <p className={styles.tagline}>Two hearts, one beautiful journey.</p>
      <div className="gold-divider" />
      <p className={styles.date}>10 November 2026</p>
      <p className={styles.madeWith}>Made with ❤️</p>
    </footer>
  );
}
