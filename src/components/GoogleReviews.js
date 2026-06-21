import { Star } from 'lucide-react';

export default function GoogleReviews() {
  // Placeholder Google Reviews
  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#fff', textAlign: 'center' }}>
      <div className="container">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', backgroundColor: '#f8f9fa', padding: '1rem 2rem', borderRadius: '50px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" style={{ width: '30px', height: '30px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '4px', color: '#fbbc05' }}>
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <div style={{ fontWeight: '700', color: '#333' }}>
              4.9/5 Rating <span style={{ fontWeight: '400', color: '#666', fontSize: '0.9rem' }}>Based on 150+ Google Reviews</span>
            </div>
          </div>
        </div>
        <p style={{ marginTop: '2rem', color: '#666', maxWidth: '600px', margin: '2rem auto 0' }}>
          We take pride in our work. Check out what our customers on Google have to say about our fast and reliable plumbing services in Malda.
        </p>
      </div>
    </section>
  );
}
