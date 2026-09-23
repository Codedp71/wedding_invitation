'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';
import weddingData from '../data/weddingData';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const photos = weddingData.gallery;

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((lightbox - 1 + photos.length) % photos.length);
  const next = () => setLightbox((lightbox + 1) % photos.length);

  return (
    <section className={`section-padding ${styles.section}`}>
      <h2 className="text-center reveal font-script" style={{ fontSize: '3rem', color: 'var(--color-maroon)', marginBottom: '40px' }}>
        Our Moments
      </h2>
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollTrack}>
          {photos.map((photo, i) => (
            <div key={i} className={styles.thumb} onClick={() => openLightbox(i)}>
              <div className={styles.cardFrame}>
                <div className={styles.innerImgWrapper}>
                  <Image src={photo.src} alt={`Moment ${i + 1}`} fill sizes="(max-width: 768px) 300px, 400px" loading="lazy" />
                  <div className={styles.zoomOverlay}>🔍</div>
                </div>
                <div className={`${styles.cardCaption} font-script`}>
                  {photo.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.close} onClick={closeLightbox}>✕</button>
          <button className={styles.navBtn} style={{ left: 16 }} onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <div className={styles.lbImg} onClick={(e) => e.stopPropagation()}>
            <Image src={photos[lightbox].src} alt="Gallery" width={900} height={600} />
            <div className={`${styles.lbCaption} font-script`}>{photos[lightbox].caption}</div>
          </div>
          <button className={styles.navBtn} style={{ right: 16 }} onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}
    </section>
  );
}
