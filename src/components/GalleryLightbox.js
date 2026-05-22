"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './GalleryLightbox.module.css';

export default function GalleryLightbox({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setIndex(i => Math.min(images.length - 1, i + 1));
      if (e.key === 'ArrowLeft') setIndex(i => Math.max(0, i - 1));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, images.length]);

  return (
    <div>
      <div className={styles.grid} role="list">
        {images.map((src, i) => (
          <button key={i} className={styles.item} onClick={() => { setIndex(i); setOpen(true); }} aria-label={`Open image ${i+1}`}>
            <img src={src} alt={`Project image ${i+1}`} />
          </button>
        ))}
      </div>

      {open && (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-label={`Image ${index+1} of ${images.length}`}>
          <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close" autoFocus>✕</button>
          <div className={styles.controls}>
            <button onClick={() => setIndex(i => Math.max(0, i - 1))} aria-label="Previous">‹</button>
            <button onClick={() => setIndex(i => Math.min(images.length - 1, i + 1))} aria-label="Next">›</button>
          </div>
          <div className={styles.content}>
            <img src={images[index]} alt={`Project image ${index + 1}`} />
          </div>
        </div>
      )}
    </div>
  );
}
