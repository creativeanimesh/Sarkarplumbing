import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  title: "Drainage & Piping Services in Malda | Sarkar Plumbing Works",
  description: "Expert drainage & piping services in malda by Sarkar Plumbing Works. Fast, reliable, and affordable plumbing solutions.",
};

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flexGrow: 1, padding: '8rem 2rem 4rem', backgroundColor: 'var(--light-bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>Drainage & Piping Services in Malda</h1>
          <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
            Looking for reliable <strong>drainage & piping services in malda</strong>? Sarkar Plumbing Works offers professional, fast, and guaranteed services. Our experienced technicians ensure the highest quality workmanship for your home or business.
          </p>
          <Link href="/#contact-form" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Request Service Now</Link>
        </div>
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}
