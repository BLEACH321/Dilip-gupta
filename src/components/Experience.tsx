import React, { useState } from 'react';
import { Calendar, Briefcase, ChevronDown, ChevronUp, MapPin, CheckCircle } from 'lucide-react';
import './Experience.css';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  department?: string;
  location: string;
  responsibilities: string[];
  tags: string[];
}

export const Experience: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const experiences: ExperienceItem[] = [
    {
      id: 0,
      company: "Shriram Life Insurance Company Ltd",
      role: "Sr. Corporate Manager",
      duration: "Sept 2023 – Till Now",
      department: "IMF & New Growth Initiatives",
      location: "Mumbai & ROM (Rest of Maharashtra)",
      responsibilities: [
        "Recruiting high-performance teams and handling Insurance Marketing Firms (IMF).",
        "Empaneling and activating key business partners including IMFs, Business Associates (BA), Chartered Accountants (CA), and Brokers.",
        "Developing and sustaining powerful mutual growth relationships with corporate financial entities.",
        "Conducting and providing advanced product training programs to all partners.",
        "Resolving advisors' technical queries and providing top-tier client service.",
        "Collating, sanitizing, and presenting weekly, fortnightly, and monthly MIS reports."
      ],
      tags: ["Corporate Management", "Partnerships", "Team Leadership", "Strategic Growth"]
    },
    {
      id: 1,
      company: "PNB Metlife Insurance Company Ltd",
      role: "Business Development Manager (BDM)",
      duration: "Jan 2022 – Sep 2023",
      department: "IMF & CAB",
      location: "Mumbai",
      responsibilities: [
        "Responsible for achieving monthly and annual corporate sales targets consistently.",
        "Managing product sales growth and individual sales effectiveness by reviewing activity schedules.",
        "Co-ordinating with partners across Mumbai to drive business development activities.",
        "Empaneling, onboarding and training new partners on insurance and wealth products.",
        "Conducting joint field meetings with partners to convert large-ticket retail clients.",
        "Managing diverse models: Brokers, Branch Model sales, Venue model, Wealth Partner, and Loan partner."
      ],
      tags: ["Business Development", "Sales Target Mastery", "Partner Training", "Multi-model Sales"]
    },
    {
      id: 2,
      company: "Aviva Life India Insurance Company Ltd",
      role: "Relationship Manager (RM)",
      duration: "June 2021 – Jan 2022",
      department: "S2S (Sales to Service)",
      location: "Mumbai",
      responsibilities: [
        "Providing dedicated, premium-quality financial services to existing walk-in clients.",
        "Cross-selling and up-selling sophisticated life insurance and protection portfolios.",
        "Generating qualified leads and arranging consultative face-to-face meetings with prospective high-net-worth customers."
      ],
      tags: ["Relationship Management", "Cross-selling", "Lead Generation", "Client Advisory"]
    },
    {
      id: 3,
      company: "Aditya Birla Sun Life Insurance Company Ltd",
      role: "Assistant Relationship Manager (ARM)",
      duration: "Nov 2019 – Oct 2020",
      department: "S2S",
      location: "Mumbai",
      responsibilities: [
        "Providing premium relationship advisory services to existing bank walk-in clients.",
        "Spearheading cross-selling and up-selling models for new wealth-preservation plans.",
        "Executing aggressive lead generation and conducting high-conversion customer meets."
      ],
      tags: ["Wealth Protection", "Walk-in Advisory", "Customer Meets", "Portfolio Optimization"]
    },
    {
      id: 4,
      company: "Pushapam Financial Servicers",
      role: "Mutual Fund (MF) Advisor",
      duration: "Jan 2016 – Nov 2019",
      department: "Wealth Management",
      location: "Mumbai",
      responsibilities: [
        "Providing dedicated financial planning and mutual fund services to key retail clients.",
        "Analyzing client portfolios to cross-sell and up-sell custom investment schemes.",
        "Structuring local lead generation strategies and holding financial planning seminars."
      ],
      tags: ["Mutual Funds", "Portfolio Structuring", "Asset Allocation", "Financial Planning"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Career Milestone Timeline</span>
          <h2 className="section-title">
            Professional <span className="gold-gradient-text">Experience</span>
          </h2>
          <div className="header-bar"></div>
        </div>

        <div className="experience-timeline-container">
          {/* Rotating background watermark logo model */}
          <div className="experience-background-logo-container">
            <img src="/assets/logo.png" className="exp-bg-logo" alt="" />
          </div>

          {/* Vertical timeline track line */}
          <div className="timeline-track"></div>

          <div className="timeline-items">
            {experiences.map((exp, idx) => {
              const isActive = activeCard === exp.id;
              return (
                <div 
                  key={exp.id} 
                  className={`timeline-item ${isActive ? 'active' : ''} ${idx % 2 === 0 ? 'left' : 'right'}`}
                  onClick={() => setActiveCard(exp.id)}
                >
                  {/* Timeline point indicator */}
                  <div className="timeline-dot">
                    <Briefcase size={16} />
                  </div>

                  {/* Glass Card content */}
                  <div className="timeline-card glass-panel">
                    <div className="card-top">
                      <div className="card-top-left">
                        <span className="exp-duration">
                          <Calendar size={14} /> {exp.duration}
                        </span>
                        <h3 className="exp-role">{exp.role}</h3>
                        <h4 className="exp-company">{exp.company}</h4>
                      </div>
                      <div className="card-toggle-icon">
                        {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>

                    {exp.department && (
                      <span className="exp-department">{exp.department}</span>
                    )}

                    <div className="exp-location">
                      <MapPin size={12} /> {exp.location}
                    </div>

                    <div className="exp-tags">
                      {exp.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tag-badge">{tag}</span>
                      ))}
                    </div>

                    {/* Expandable detailed section */}
                    <div className={`exp-details ${isActive ? 'expanded' : ''}`}>
                      <div className="details-divider"></div>
                      <ul className="details-list">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="details-item">
                            <CheckCircle size={16} className="check-icon" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
