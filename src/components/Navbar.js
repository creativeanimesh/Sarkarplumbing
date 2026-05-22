"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Phone } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const phone = '(234) 345-4574'; // Using reference phone or original, user said "(234) 345-4574" in reference. I will keep original phone but format it to look good. Let's use +91 6295 404 001.
  const formattedPhone = '+91 6295 404001';

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Sarkar Plumbing Logo"
            width={48}
            height={48}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Sarkar Plumbing</span>
        </Link>

        <button className={styles.mobileToggle} aria-label="Toggle menu" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <span className={styles.hamburger}></span>
        </button>
        <ul id="main-nav" className={`${styles.navLinks} ${open ? styles.open : ''}`}>
          <li><Link href="/" className={styles.navLink} onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="#about" className={styles.navLink} onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="#services" className={styles.navLink} onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link href="#blog" className={styles.navLink} onClick={() => setOpen(false)}>Blog</Link></li>
          <li><Link href="#contact" className={styles.navLink} onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>

        <div className={styles.callBlock}>
          <div className={styles.callIcon}>
            <Phone size={20} />
          </div>
          <div className={styles.callInfo}>
            <span className={styles.callLabel}>Call Or Chat</span>
            <a href={`tel:${formattedPhone.replace(/\s+/g, '')}`} className={styles.callNumber}>
              {formattedPhone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
