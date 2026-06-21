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
          <p className={styles.contactItem}>💬 <a href="https://wa.me/916295404001?text=Hello+Sarkar+Plumbing" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>WhatsApp Us</a></p>
          <p className={styles.contactItem}>📍 <a href="https://maps.google.com/?q=Malda,West+Bengal" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Malda, West Bengal, India</a></p>
          <p className={styles.contactItem}>✉️ info@sarkarplumbing.com</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/profile.php?id=61571895566836" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/sarkarplumbingworks" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.youtube.com/@subhasishsarkar8030" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>SERVICE AREAS</h3>
          <ul className={styles.footerLinks} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <li>Malda</li>
            <li>English Bazar</li>
            <li>Old Malda</li>
            <li>Gazole</li>
            <li>Kaliachak</li>
            <li>Habibpur</li>
            <li>Chanchal</li>
            <li>Ratua</li>
          </ul>
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
