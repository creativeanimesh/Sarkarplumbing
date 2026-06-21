import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import styles from './MeetExpert.module.css';

export default function MeetExpert() {
  const skills = [
    "Residential Plumbing",
    "Commercial Plumbing",
    "Pump Installation",
    "Renovation Projects"
  ];

  return (
    <section className={styles.expertSection}>
      <div className={`container ${styles.expertContainer}`}>
        <div className={styles.expertImageWrap}>
          <div className={styles.expertImage}>
            {/* Using a placeholder avatar since no specific photo was provided yet */}
            <Image 
              src="/hero.png" 
              alt="Subhasish Sarkar - Founder" 
              width={400} 
              height={500} 
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
          <div className={styles.experienceBadge}>
            <strong>10+</strong>
            <span>Years of<br/>Experience</span>
          </div>
        </div>
        
        <div className={styles.expertContent}>
          <div className="badge" style={{ display: 'inline-block', marginBottom: '1rem', padding: '0.25rem 0.75rem', border: '1px solid #ccc', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
            MEET THE EXPERT
          </div>
          <h2 className={styles.expertTitle}>Subhasish Sarkar</h2>
          <h3 className={styles.expertRole}>Founder, Sarkar Plumbing Works</h3>
          
          <p className={styles.expertBio}>
            Hi, I&apos;m Subhasish Sarkar. With over a decade of hands-on experience, I founded Sarkar Plumbing Works to provide the residents and businesses of Malda with reliable, high-quality, and transparent plumbing services. I believe in doing the job right the first time.
          </p>
          
          <h4 className={styles.skillsHeading}>Specialized Experience In:</h4>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                <span>{skill}</span>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <a href="#contact" className="btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
