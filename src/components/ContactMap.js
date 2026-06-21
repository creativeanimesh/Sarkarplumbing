import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './ContactMap.module.css';

export default function ContactMap() {
  return (
    <section className={styles.contactSection} id="contact-form">
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.formWrap}>
          <div className="badge" style={{ display: 'inline-block', marginBottom: '1rem', padding: '0.25rem 0.75rem', border: '1px solid #ccc', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
            GET IN TOUCH
          </div>
          <h2 className={styles.contactTitle}>Request A Free Quote</h2>
          <p className={styles.contactSubtitle}>Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
          
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className={styles.inputGroup}>
              <select required>
                <option value="" disabled selected>Select Service</option>
                <option value="bathroom">Bathroom Plumbing</option>
                <option value="kitchen">Kitchen Plumbing</option>
                <option value="drainage">Drainage & Piping</option>
                <option value="pump">Water Pump Installation</option>
                <option value="emergency">Emergency Service</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="Tell us about your plumbing issue..." rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>

        <div className={styles.mapWrap}>
          <div className={styles.contactInfoCards}>
            <div className={styles.infoCard}>
              <MapPin className={styles.infoIcon} />
              <div>
                <strong>Location</strong>
                <p>Malda, West Bengal, India</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <Phone className={styles.infoIcon} />
              <div>
                <strong>Phone</strong>
                <p>+91 6295 404001</p>
              </div>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d88.06990105000001!3d25.000216700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39faf6d9e07fb6a1%3A0xc3b8a3e74a6a5700!2sMalda%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sarkar Plumbing Service Area Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
