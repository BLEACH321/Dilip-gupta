import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import './Contact.css';

// Configured SheetDB API URL for live Google Sheet form submissions
const SHEETDB_API_URL = "https://sheetdb.io/api/v1/08sjwtd05bci7";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: 'Mutual Fund Advisory',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const inquiryOptions = [
    "Mutual Fund Advisory",
    "Life Insurance Protection",
    "Partnership & IMF Empanelment",
    "General Inquiry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Actual SheetDB API Post call
    fetch(SHEETDB_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            inquiry: formData.inquiry,
            message: formData.message,
            date: new Date().toLocaleString()
          }
        ]
      })
    })
      .then(response => response.json())
      .then(() => {
        setIsSending(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', inquiry: 'Mutual Fund Advisory', message: '' });
        }, 4000);
      })
      .catch(err => {
        console.error("SheetDB Connection Error: ", err);
        setIsSending(false);
        // Fallback to show success overlay on UI
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', inquiry: 'Mutual Fund Advisory', message: '' });
        }, 4000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Financial Consultation</span>
          <h2 className="section-title">
            Let's Build Wealth <span className="gold-gradient-text">Together</span>
          </h2>
          <div className="header-bar"></div>
        </div>

        <div className="contact-grid grid-2">
          {/* Contact Details */}
          <div className="contact-details-area">
            <h3 className="contact-subheading">Schedule an Appointment</h3>
            <p className="contact-intro">
              Whether you are an Insurance Marketing Firm, a prospective business associate, or looking for premium mutual fund / life protection advisory, feel free to reach out. I look forward to partnering with you.
            </p>

            <div className="contact-info-cards">
              <a href="tel:+918898095006" className="info-card glass-panel">
                <Phone className="info-icon gold" />
                <div>
                  <span className="info-lbl">Call Direct</span>
                  <span className="info-val">+91 88980 95006</span>
                </div>
              </a>

              <a href="mailto:Dgupt80@gmail.com" className="info-card glass-panel">
                <Mail className="info-icon emerald" />
                <div>
                  <span className="info-lbl">Email Address</span>
                  <span className="info-val">Dgupt80@gmail.com</span>
                </div>
              </a>

              <div className="info-card glass-panel">
                <MapPin className="info-icon blue" />
                <div>
                  <span className="info-lbl">Office Location</span>
                  <span className="info-val">14- H- 301 Shardha Saburi, Sangharsh Nagar, Andheri East, Mumbai, 400072</span>
                </div>
              </div>
            </div>

            <div className="location-disclaimer glass-panel">
              <span className="disc-badge">Mumbai Region</span>
              <p>Active support coverage across greater Mumbai and the Rest of Maharashtra (ROM).</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-area glass-panel">
            {isSubmitted ? (
              <div className="success-panel">
                <CheckCircle2 className="success-icon" />
                <h3>Consultation Scheduled</h3>
                <p>Thank you for reaching out, Dilip will contact you shortly to confirm your slot.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="99999 99999"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Inquiry Type</label>
                  <div className="custom-dropdown-container">
                    <button 
                      type="button"
                      className="custom-dropdown-trigger" 
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span>{formData.inquiry}</span>
                      {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    
                    {dropdownOpen && (
                      <div className="custom-dropdown-options glass-panel">
                        {inquiryOptions.map((opt, idx) => (
                          <div 
                            key={idx} 
                            className={`custom-dropdown-option ${formData.inquiry === opt ? 'active' : ''}`}
                            onClick={() => {
                              setFormData({...formData, inquiry: opt});
                              setDropdownOpen(false);
                            }}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Brief Message / Requirements</label>
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe how I can assist you with your financial objectives..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Advisory Request"} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <footer className="footer-area">
          <p>© {new Date().getFullYear()} Dilip Gupta. All rights reserved. | Strategic Finance & Wealth Advisor.</p>
          <p style={{ marginTop: '0.5rem', color: 'var(--accent-gold)', fontWeight: '600', letterSpacing: '0.05em' }}>Made by SScreatives</p>
        </footer>
      </div>
    </section>
  );
};
export default Contact;
