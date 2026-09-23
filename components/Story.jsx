'use client';
import Image from 'next/image';
import styles from './Story.module.css';
import weddingData from '../data/weddingData';

export default function Story() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <h2 className="text-center reveal font-script" style={{ fontSize: '3rem', color: 'var(--color-maroon)', marginBottom: '50px' }}>
        Our Love Story
      </h2>
      <div className={styles.timeline}>
        {weddingData.story.map((item, i) => (
          <div key={i} className={`${styles.item} ${i % 2 !== 0 ? styles.reverse : ''} reveal`}>
            <div className={styles.text}>
              <span className={styles.chapter}>{item.chapter}</span>
              <h3>{item.title}</h3>
              {item.text.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
            <div className={`${styles.cardContainer} ${i % 2 === 0 ? styles.tiltLeft : styles.tiltRight}`}>
              <div className={styles.photoFrame}>
                <div className={styles.imgWrap}>
                  <Image 
                    src={item.photo} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 420px" 
                    style={{ 
                      objectFit: item.fit || 'cover', 
                      objectPosition: item.objectPosition || 'center' 
                    }} 
                    priority={i < 2}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {weddingData.epilogue && (
        <div className={`${styles.epilogueContainer} reveal`}>
          <div className={styles.epilogueCard}>
            <div className={styles.epilogueHeader}>
              <h3>{weddingData.epilogue.title}</h3>
            </div>
            <div className={styles.epilogueBody}>
              {weddingData.epilogue.text.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.epilogueSignature}>
              <span>{weddingData.epilogue.signature}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
