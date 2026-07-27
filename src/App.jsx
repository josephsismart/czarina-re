import { useState } from 'react'
import { Phone, Mail, MapPin, Award, Home, Building2, ChevronRight, Star, GraduationCap, Menu, X, Heart } from 'lucide-react'

const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
import './App.css'

const PROPERTIES = [
  {
    id: 1,
    title: 'Modern 2BR Condo Unit',
    location: 'Butuan City',
    price: 'â±2,500,000',
    type: 'Condominium',
    beds: 2,
    baths: 1,
    area: '45 sqm',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Residential Lot in Subdivision',
    location: 'Butuan City',
    price: 'â±1,800,000',
    type: 'Lot',
    beds: null,
    baths: null,
    area: '150 sqm',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Brand New House & Lot',
    location: 'Agusan del Norte',
    price: 'â±4,200,000',
    type: 'House & Lot',
    beds: 3,
    baths: 2,
    area: '120 sqm',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Commercial Space Downtown',
    location: 'Butuan City',
    price: 'â±6,500,000',
    type: 'Commercial',
    beds: null,
    baths: null,
    area: '200 sqm',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
]

const TESTIMONIALS = [
  {
    name: 'Maria Santos',
    text: 'Czarina helped us find our dream home in Butuan. Her professionalism and dedication made the entire process seamless.',
    rating: 5,
  },
  {
    name: 'Juan dela Cruz',
    text: 'As a first-time buyer, I was nervous about the process. Czarina guided me every step of the way with patience and expertise.',
    rating: 5,
  },
  {
    name: 'Ana Reyes',
    text: 'Her knowledge of the local market and property appraisal gave us confidence in our investment. Highly recommended!',
    rating: 5,
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-brand" onClick={() => scrollTo('hero')}>
            <Building2 size={28} />
            <span>CZ Properties</span>
          </div>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li onClick={() => scrollTo('about')}>About</li>
            <li onClick={() => scrollTo('properties')}>Properties</li>
            <li onClick={() => scrollTo('testimonials')}>Testimonials</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-tag">Licensed Real Estate Broker & Appraiser</p>
            <h1>Czarina Van T. Bokingo</h1>
            <p className="hero-subtitle">
              Your trusted partner in finding the perfect property in Butuan City and Agusan del Norte. Let me help you make your dream home a reality.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollTo('properties')}>
                View Properties <ChevronRight size={18} />
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
                Get in Touch
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Properties Sold</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <img src="/hero.png" alt="Czarina Van Bokingo" className="hero-image" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <p className="section-tag">Get to Know Me</p>
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am <strong>Czarina Van T. Bokingo</strong>, a licensed Real Estate Broker and
                Real Estate Appraiser based in Butuan City. With a passion for helping families
                and investors find the right property, I bring professionalism, market expertise,
                and genuine care to every transaction.
              </p>
              <p>
                As a graduate of <strong>Xavier University {'â'} Ateneo de Cagayan</strong> and a
                Licensed Professional Teacher (LPT) with a Master's degree (MPSM), I combine
                academic rigor with real-world experience to deliver exceptional service.
              </p>
              <p>
                Under <strong>Property Provider Realty</strong>, I am committed to
                "Providing The Best We Can!" {'â'} whether you're buying your first home,
                investing in commercial property, or need a reliable property appraisal.
              </p>
            </div>
            <div className="credentials">
              <div className="credential-card">
                <Award size={32} />
                <div>
                  <h4>Licensed Real Estate Broker</h4>
                  <p>PRC Licensed</p>
                </div>
              </div>
              <div className="credential-card">
                <Home size={32} />
                <div>
                  <h4>Real Estate Appraiser</h4>
                  <p>Certified Property Valuation</p>
                </div>
              </div>
              <div className="credential-card">
                <GraduationCap size={32} />
                <div>
                  <h4>LPT | MPSM</h4>
                  <p>Xavier University {'â'} Ateneo de Cagayan</p>
                </div>
              </div>
              <div className="credential-card">
                <Building2 size={32} />
                <div>
                  <h4>Property Provider Realty</h4>
                  <p>Providing The Best We Can!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="properties">
        <div className="container">
          <p className="section-tag">Explore Listings</p>
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">Discover our handpicked selection of premium properties in Butuan City and surrounding areas</p>
          <div className="property-grid">
            {PROPERTIES.map((p) => (
              <div key={p.id} className="property-card">
                <div className="property-image">
                  <img src={p.image} alt={p.title} />
                  <span className="property-type">{p.type}</span>
                </div>
                <div className="property-info">
                  <h3>{p.title}</h3>
                  <p className="property-location"><MapPin size={14} /> {p.location}</p>
                  <div className="property-details">
                    {p.beds && <span>{p.beds} Beds</span>}
                    {p.baths && <span>{p.baths} Baths</span>}
                    <span>{p.area}</span>
                  </div>
                  <div className="property-footer">
                    <span className="property-price">{p.price}</span>
                    <button className="btn btn-sm" onClick={() => scrollTo('contact')}>Inquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <p className="section-tag">Client Stories</p>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">Hear from families and investors who found their perfect property</p>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="#c9a84c" color="#c9a84c" />
                  ))}
                </div>
                <p>"{t.text}"</p>
                <h4>{'â'} {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Find Your Dream Property?</h2>
          <p>Let me guide you through every step of your real estate journey with care and expertise.</p>
          <button className="btn btn-gold" onClick={() => scrollTo('contact')}>
            <Heart size={18} /> Let's Talk Today
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <p className="section-tag">Reach Out</p>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Ready to start your property journey? I'd love to hear from you.</p>
          <div className="contact-grid">
            <div className="contact-info">
              <a href="tel:09091972507" className="contact-item">
                <Phone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>0909 197 2507 (Smart)</p>
                </div>
              </a>
              <a href="mailto:czarinavan@gmail.com" className="contact-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>czarinavan@gmail.com</p>
                </div>
              </a>
              <a href="https://www.facebook.com/czarina.van.bokingo" target="_blank" rel="noreferrer" className="contact-item">
                <Facebook size={24} />
                <div>
                  <h4>Facebook</h4>
                  <p>Czarina Van Bokingo</p>
                </div>
              </a>
              <a href="https://www.instagram.com/cz.propertiesph" target="_blank" rel="noreferrer" className="contact-item">
                <Instagram size={24} />
                <div>
                  <h4>Instagram</h4>
                  <p>@cz.propertiesph</p>
                </div>
              </a>
              <div className="contact-item">
                <MapPin size={24} />
                <div>
                  <h4>Location</h4>
                  <p>Butuan City, Agusan del Norte</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your inquiry! Czarina will get back to you soon.') }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message" rows={5} required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <Building2 size={24} />
            <span>CZ Properties</span>
          </div>
          <p>&copy; 2025 Czarina Van T. Bokingo {'â'} Property Provider Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
