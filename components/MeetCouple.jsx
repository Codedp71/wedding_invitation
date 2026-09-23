'use client';
import Image from 'next/image';
import styles from './MeetCouple.module.css';
import weddingData from '../data/weddingData';

export default function MeetCouple() {
  const { couple } = weddingData;
  return (
    <section className={`section-padding ${styles.section}`}>
      <h2 className={`text-center reveal`} style={{ fontSize: '2.8rem', marginBottom: '60px' }}>
        Meet The Couple
      </h2>
      <div className={styles.grid}>
        <div className={`${styles.card} reveal`}>
          <div className={styles.imgWrap}>
            <Image 
              src={couple.groomPhoto} 
              alt={couple.groom} 
              fill 
              sizes="(max-width: 768px) 100vw, 450px" 
              style={{ 
                objectFit: couple.groomFit || 'cover', 
                objectPosition: couple.groomObjectPosition || 'center 2%' 
              }} 
            />
          </div>
          <div className={styles.info}>
            <h3 className="font-script">{couple.groom}</h3>
            <p>{couple.groomBio}</p>
          </div>
        </div>
        <div className={`${styles.card} reveal`}>
          <div className={styles.imgWrap}>
            <Image 
              src={couple.bridePhoto} 
              alt={couple.bride} 
              fill 
              sizes="(max-width: 768px) 100vw, 450px" 
              style={{ 
                objectFit: couple.brideFit || 'cover', 
                objectPosition: couple.brideObjectPosition || 'center 41%' 
              }} 
            />
          </div>
          <div className={styles.info}>
            <h3 className="font-script">{couple.bride}</h3>
            <p>{couple.brideBio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
