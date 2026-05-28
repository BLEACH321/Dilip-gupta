import React from 'react';
import { ArrowUpRight, Award, ShieldCheck, Users, Briefcase } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const metrics = [
    {
      icon: <Briefcase className="metric-icon gold" />,
      value: "10+ Years",
      label: "Wealth & Life Insurance Expertise",
    },
    {
      icon: <Users className="metric-icon emerald" />,
      value: "500+",
      label: "Wealth Partners Activated",
    },
    {
      icon: <ShieldCheck className="metric-icon blue" />,
      value: "99%",
      label: "Client Retention Rate",
    },
    {
      icon: <Award className="metric-icon gold" />,
      value: "5+ Awards",
      label: "Outstanding Contributions",
    },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid container">
        <div className="hero-content">
          <div className="premium-badge glass-panel">
            <span className="badge-dot"></span>
            Senior Corporate Manager | Wealth Strategist
          </div>
          
          <h1 className="hero-title">
            Driving Wealth Growth & <br />
            <span className="gold-gradient-text">Financial Excellence</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Dilip Gupta</strong>. I specialize in building robust financial networks, empowering Insurance Marketing Firms (IMF), establishing key business partner alliances, and driving high-performance distribution models across Mumbai.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary pulse-gold">
              Book Financial Consultation <ArrowUpRight size={18} />
            </a>
            <a href="/assets/Dilip_Gupta_Resume.pdf" download="Dilip_Gupta_Resume.pdf" className="btn btn-secondary">
              Download CV
            </a>
          </div>

          <div className="metrics-grid">
            {metrics.map((item, index) => (
              <div key={index} className="metric-card glass-panel">
                <div className="metric-card-header">
                  {item.icon}
                  <span className="metric-value">{item.value}</span>
                </div>
                <p className="metric-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual-container">
          <div className="avatar-luxury-frame">
            <div className="glowing-ring gold-ring"></div>
            <div className="glowing-ring emerald-ring"></div>
            <div className="avatar-glass-inner">
              <img 
                src="/assets/profile.jpeg" 
                alt="Dilip Gupta" 
                className="profile-photo"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
            <div className="floating-metric fm-top glass-panel">
              <span className="fm-icon">📈</span>
              <div>
                <span className="fm-value">MF & Life</span>
                <span className="fm-label">Advisor Expert</span>
              </div>
            </div>
            <div className="floating-metric fm-bottom glass-panel">
              <span className="fm-icon">🏆</span>
              <div>
                <span className="fm-value">Mumbai Elite</span>
                <span className="fm-label">Target Achiever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elegant lighting blobs for luxury aesthetic */}
      <div className="bg-light-blob blob-gold"></div>
      <div className="bg-light-blob blob-emerald"></div>
    </section>
  );
};
export default Hero;
