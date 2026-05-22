import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { 
  Bath, 
  Droplet, 
  Hammer, 
  Building2, 
  Wrench, 
  Siren, 
  Settings, 
  ArrowDownToLine,
  Waves, 
  Utensils,
  CheckCircle2,
  ChevronDown,
  Phone,
  Star,
  Calendar,
  User
} from "lucide-react";
import styles from "./page.module.css";
import GalleryLightbox from '@/components/GalleryLightbox';

export default function Home() {
  const services = [
    { title: "Bathroom Plumbing", icon: <Bath size={32} /> },
    { title: "Drainage Pipeline", icon: <Waves size={32} /> },
    { title: "Renovation Projects", icon: <Hammer size={32} /> },
    { title: "Commercial & Residential", icon: <Building2 size={32} /> },
    { title: "Repair & Maintenance", icon: <Wrench size={32} /> },
    { title: "Emergency Service", icon: <Siren size={32} /> },
    { title: "Modern System Install", icon: <Settings size={32} /> },
    { title: "Borewell", icon: <ArrowDownToLine size={32} /> },
    { title: "Pumps Installation", icon: <Droplet size={32} /> },
    { title: "Kitchen Plumbing", icon: <Utensils size={32} /> },
  ];

  const whyChooseUs = [
    "Professional Plumbing Solutions",
    "Skilled & Certified Experts",
    "Fast Response Time",
    "Trusted Local Service",
    "Leak-Proof Guaranteed Work",
    "Clean & Professional Finish",
    "Affordable Pricing",
    "Quality Materials Used",
    "Customer Satisfaction Focused",
    "Reliable After-Service Support",
  ];

  const galleryImages = [
    "/IMG_20240828_154110776.jpg",
    "/IMG_20240914_172910989_PORTRAIT.jpg",
    "/IMG_20250730_175237597_HDR.jpg",
    "/FB_IMG_1737456179739.jpg",
    "/WhatsApp Image 2026-05-08 at 15.40.31.jpeg",
    "/WhatsApp Image 2026-05-08 at 15.40.32.jpeg",
    "/WhatsApp Image 2026-05-08 at 15.40.33.jpeg"
  ];

  const testimonials = [
    { name: 'Palash Mandal', text: 'Quick response service' },
    { name: 'Sujit Thakur', text: 'Good service.' },
    { name: 'Rohit Ram', text: 'Nice skills he has .. good job 👍👏' },
    { name: 'Sayani Mitra', text: 'Excellent service' },
    { name: 'SWARUP PRAMANIK', text: 'Very clean work, and polite behaviour. I am satisfied' },
    { name: 'Aditya Das', text: 'Nice' },
    { name: 'Bittu Ram', text: 'Khub Bhalo and Kore Chalet Hater and Khubi Valo' },
    { name: 'M K Enterprise', text: 'KHAJA BABA ENTERPRISE' },
    { name: 'Sahil', text: '—' },
    { name: 'Md Shahel Akhtar', text: '—' }
  ];

  return (
    <div className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <div className={styles.badge}>
                <span className={styles.hash}>#</span> NO1 PLUMBING SERVICES
              </div>
              <h1 className={`${styles.heroTitle} animate-fade-in`}>
                FAST, AFFORDABLE & ENERGY EFFICIENT PLUMBING SERVICES
              </h1>
              <p className={`${styles.heroSubtitle} animate-fade-in`}>
                We're your local plumbing experts dedicated to keeping your family comfortable through every season. With same day service, honest pricing, and guaranteed results, you can trust us to handle all your needs.
              </p>
              <div className={`${styles.heroButtons} animate-fade-in`}>
                <a href="#contact" className="btn-primary">Request Plumbing Service</a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.stat}><strong>4.5K+</strong><span>Projects Done</span></div>
                <div className={styles.stat}><strong>13K+</strong><span>Satisfied Customers</span></div>
                <div className={styles.stat}><strong>10+</strong><span>Years of Experience</span></div>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <div className={styles.blueSlantBg}></div>
              <div className={styles.heroImage}>
                <Image src="/hero.png" alt="Plumber at work" width={640} height={800} priority style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>Comprehensive plumbing solutions for every need</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
            <p className={styles.sectionSubtitle}>What sets us apart from the rest</p>
          </div>
          <div className={styles.whyChooseGrid}>
            {whyChooseUs.map((reason, index) => (
              <div key={index} className={styles.whyChooseItem}>
                <CheckCircle2 className={styles.checkIcon} size={24} />
                <span className={styles.whyChooseText}>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Testimonials Section */}
      <section className={styles.faqTestimonialsSection}>
        <div className={`container ${styles.faqContainer}`}>
          <div className={styles.faqLeft}>
            <h2 className={styles.faqTitle}>STILL HAVE QUESTIONS? WE'RE HERE TO HELP</h2>
            <div className={styles.faqButtons}>
              <a href="#contact" className="btn-primary">Contact Us</a>
              <div className={styles.faqCall}>
                <div className={styles.faqCallIcon}><Phone size={20} /></div>
                <div className={styles.faqCallText}>
                  <span>Call Or Chat</span>
                  <strong>+91 6295 404001</strong>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.faqRight}>
            <div className={styles.faqItem}>
              <span>HOW OFTEN SHOULD I SERVICE MY PLUMBING SYSTEM?</span>
              <ChevronDown size={20} />
            </div>
            <div className={styles.faqItem}>
              <span>DO YOU OFFER EMERGENCY PLUMBING SERVICES?</span>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <div className={`container ${styles.testimonialsContainer}`}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge} style={{ margin: '0 auto 1rem' }}>TESTIMONIALS</div>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>WHAT OUR CUSTOMERS SAY</h2>
          </div>

          <div className={styles.testimonialsMasonry}>
            {testimonials.slice(0, 6).map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="var(--accent-color)" color="var(--accent-color)" />)}
                </div>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.testimonialAuthorRow}>
                  <div className={styles.authorAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <span className={styles.testimonialAuthor}>{t.name}</span>
                  <div className={styles.quoteIcon}>"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Work</h2>
            <p className={styles.sectionSubtitle} style={{ color: 'rgba(255,255,255,0.8)' }}>A glimpse of our recently completed projects</p>
          </div>
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.aboutContent}>
            <div className={styles.badge}>
              ABOUT US
            </div>
            <h2 className={styles.aboutTitle}>
              TRUSTED PLUMBING EXPERT YOU CAN COUNT ON
            </h2>
            <p className={styles.aboutText}>
              At Sarkar Plumbing Works, your comfort comes first. We take pride in offering fast, friendly, and affordable plumbing solutions designed to keep your home or business comfortable through every season. Our skilled technicians are always ready to go the extra mile for you. We're a team of licensed professionals dedicated to providing reliable service.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '1rem' }}>Learn More About US</a>
          </div>
          
          <div className={styles.aboutImageGrid}>
            <div className={styles.img1}>
              <Image 
                src="/IMG_20240906_124626484_HDR.jpg" 
                alt="Plumbing work 1" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.img2}>
              <Image 
                src="/IMG_20240914_172910989_PORTRAIT.jpg" 
                alt="Plumbing work 2" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.circleBadge}>
              <div className={styles.circleBadgeInner}>
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                  </defs>
                  <text fontSize="11" fill="white" fontWeight="bold" letterSpacing="2">
                    <textPath href="#circle">
                      BUILD A SUCCESS BRAND WITH DEMOUI
                    </textPath>
                  </text>
                </svg>
                <div className={styles.circleArrow}>↗</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog / Insights Section */}
      <section id="blog" className={styles.blogSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.badge} style={{ margin: '0 auto 1rem' }}>LATEST PLUMBING TIPS & INSIGHTS</div>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>STAY AHEAD WITH SMART PLUMBING ADVICE FROM INDUSTRY EXPERTS</h2>
          </div>

          <div className={styles.blogGrid}>
            <div className={styles.blogCard}>
              <div className={styles.blogImageWrap}>
                <Image src="/IMG_20240906_124626484_HDR.jpg" alt="Blog 1" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span><Calendar size={14} /> Oct 8, 2025</span>
                  <span><User size={14} /> Eddie Lake</span>
                </div>
                <h3 className={styles.blogTitle}>TOP 5 SIGNS YOUR PLUMBING SYSTEM NEEDS MAINTENANCE</h3>
                <p className={styles.blogExcerpt}>Is your plumbing system making strange noises or struggling to maintain pressure? Learn what to look for.</p>
                <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Read More</button>
              </div>
            </div>

            <div className={styles.blogCard}>
              <div className={styles.blogImageWrap}>
                <Image src="/IMG_20240914_172910989_PORTRAIT.jpg" alt="Blog 2" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span><Calendar size={14} /> Oct 25, 2025</span>
                  <span><User size={14} /> James Hall</span>
                </div>
                <h3 className={styles.blogTitle}>CHOOSING THE RIGHT PLUMBING SYSTEM FOR YOUR HOME</h3>
                <p className={styles.blogExcerpt}>Learn how to choose the perfect fixtures based on your home's size, climate, and your family's needs.</p>
                <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className={styles.ctaBannerSection}>
        <div className={`container ${styles.ctaBannerContainer}`}>
          <div className={styles.ctaBannerContent}>
            <h2 className={styles.ctaBannerTitle}>NEED FAST PLUMBING SERVICE? WE'RE READY 24/7!</h2>
            <p className={styles.ctaBannerText}>
              Don't let a broken pipe or heater ruin your comfort. Our emergency technicians are available day and night to get your system running again. Call now for immediate assistance!
            </p>
            <div className={styles.ctaBannerButtons}>
              <a href="#contact" className="btn-primary">Call Now</a>
              <a href="tel:+916295404001" className="btn-secondary"><Phone size={18} style={{marginRight: '0.5rem'}}/> +91 6295 404001</a>
            </div>
          </div>
        </div>
      </section>

      <FloatingContact />
      <Footer />
    </div>
  );
}
