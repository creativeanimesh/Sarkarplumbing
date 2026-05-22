import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>WORKING HOURS</h3>
          <ul className={styles.hoursList}>
            <li><span>Mon - Fri:</span> 8:00 AM - 6:00 PM</li>
            <li><span>Sat:</span> 9:00 AM - 3:00 PM</li>
            <li><span>Sun:</span> Closed / Emergency Only</li>
          </ul>
        </div>
        
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>QUICK LINKS</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#blog">Our Blog</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
            <li><Link href="#faq">FAQs</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>CONTACT US</h3>
          <p className={styles.contactItem}>📞 +91 6295 404001</p>
          <p className={styles.contactItem}>📍 Malda, West Bengal, India</p>
          <p className={styles.contactItem}>✉️ info@sarkarplumbing.com</p>
          <div className={styles.socialIcons}>
            <a href="#">F</a>
            <a href="#">in</a>
            <a href="#">Y</a>
            <a href="#">X</a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>INSTAGRAM POST</h3>
          <div className={styles.instaGrid}>
            <div className={styles.instaImg}><Image src="/IMG_20240906_124626484_HDR.jpg" alt="Insta" fill sizes="150px" style={{ objectFit: 'cover' }} /></div>
            <div className={styles.instaImg}><Image src="/IMG_20240914_172910989_PORTRAIT.jpg" alt="Insta" fill sizes="150px" style={{ objectFit: 'cover' }} /></div>
            <div className={styles.instaImg}><Image src="/IMG_20250730_175237597_HDR.jpg" alt="Insta" fill sizes="150px" style={{ objectFit: 'cover' }} /></div>
            <div className={styles.instaImg}><Image src="/FB_IMG_1737456179739.jpg" alt="Insta" fill sizes="150px" style={{ objectFit: 'cover' }} /></div>
            <div className={styles.instaImg}><Image src="/WhatsApp Image 2026-05-08 at 15.40.31.jpeg" alt="Insta" fill sizes="150px" style={{ objectFit: 'cover' }} /></div>
            <div className={styles.instaImg}><Image src="/WhatsApp Image 2026-05-08 at 15.40.32.jpeg" alt="Insta" fill sizes="150px" style={{ objectFit: 'cover' }} /></div>
          </div>
        </div>
      </div>
      
      <div className={`container ${styles.footerBottom}`}>
        <Link href="/" className={styles.footerLogo}>
          <Image src="/logo.png" alt="Sarkar Plumbing Logo" width={32} height={32} />
          <span>Sarkar Plumbing</span>
        </Link>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Sarkar Plumbing. All Right Reserved | Privacy Policy | Terms Of Condition</p>
          <p style={{ marginTop: '0.5rem' }}>Developed & Maintained by <a href="https://codohub.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>Codohub</a></p>
        </div>
      </div>
    </footer>
  );
}
