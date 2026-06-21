import styles from './BrandMarquee.module.css';

export default function BrandMarquee() {
  const brands = [
    "Jaquar", "Kohler", "Grohe", "Cera", "Ashirvad", 
    "Astral", "Prince", "Oriplast", "Ajay", "Skipper", "Supreme"
  ];

  return (
    <div className={styles.marqueeContainer}>
      <h3 className={styles.marqueeTitle}>Our Trusted Brand Partners</h3>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          {brands.map((brand, i) => (
            <div key={i} className={styles.brandLogo}>
              {brand}
            </div>
          ))}
          {/* Duplicate for infinite effect */}
          {brands.map((brand, i) => (
            <div key={`dup-${i}`} className={styles.brandLogo}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
