import React from 'react';
import { GraduationCap, Languages, Heart, Lightbulb, Compass, Award } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const education = [
    {
      degree: "Graduation",
      score: "Completed",
      institution: "Mumbai University",
      year: "Bachelor's Degree",
    },
  ];

  const languages = [
    { name: "Hindi", proficiency: 100, label: "Native / Professional" },
    { name: "Marathi", proficiency: 95, label: "Native / Professional" },
    { name: "English", proficiency: 90, label: "Professional Working" },
  ];

  const skills = [
    {
      name: "Strategic Sales & Advisory",
      description: "Proven track record in cross-selling, up-selling mutual funds and comprehensive life insurance plans.",
      percentage: 95,
      icon: <Award className="skill-icon text-gold" />,
    },
    {
      name: "Team Handling & Leadership",
      description: "Recruiting, nurturing and leading dynamic teams of agents and partners to meet target requirements.",
      percentage: 90,
      icon: <Compass className="skill-icon text-emerald" />,
    },
    {
      name: "Business Partnership & Empanelment",
      description: "High competence in activating and managing relationships with IMFs, BAs, CAs, and Brokers across regions.",
      percentage: 92,
      icon: <Lightbulb className="skill-icon text-blue" />,
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Executive Biography</span>
          <h2 className="section-title">
            About <span className="gold-gradient-text">Dilip Gupta</span>
          </h2>
          <div className="header-bar"></div>
        </div>

        <div className="about-grid">
          <div className="about-bio glass-panel">
            <h3 className="bio-title">High-Performance Wealth Partner Manager</h3>
            <p className="bio-text">
              I am a results-oriented corporate manager based in Mumbai, with an extensive career specializing in the Life Insurance and Mutual Fund sectors. Over the years, I have successfully partnered with leading firms like Shriram Life, PNB MetLife, Aviva Life, Aditya Birla, and Pushapam Financial.
            </p>
            <p className="bio-text">
              My expertise lies in driving strategic market penetration, managing insurance marketing firms, developing distribution partners, providing advanced training, and implementing high-efficiency MIS report workflows. I am passionate about creating strong financial networks and delivering premium values.
            </p>

            <div className="bio-highlights">
              <div className="highlight-item">
                <Heart className="highlight-icon" />
                <div>
                  <h4>Interests & Hobbies</h4>
                  <p>Learning New Things, Participating in Social Activities, Cricket</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-education-languages">
            {/* Education */}
            <div className="edu-panel glass-panel">
              <div className="panel-title-area">
                <GraduationCap className="panel-icon gold" />
                <h3>Education</h3>
              </div>
              <div className="edu-list">
                {education.map((edu, idx) => (
                  <div key={idx} className="edu-card">
                    <div className="edu-card-header">
                      <h4>{edu.degree}</h4>
                      <span className="edu-score">{edu.score}</span>
                    </div>
                    <p className="edu-meta">{edu.institution} | {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="lang-panel glass-panel">
              <div className="panel-title-area">
                <Languages className="panel-icon emerald" />
                <h3>Languages Spoken</h3>
              </div>
              <div className="lang-list">
                {languages.map((lang, idx) => (
                  <div key={idx} className="lang-card">
                    <div className="lang-info">
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-label">{lang.label}</span>
                    </div>
                    <div className="lang-progress-bar">
                      <div 
                        className="lang-progress-fill" 
                        style={{ width: `${lang.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid section */}
        <div className="skills-showcase">
          <h3 className="showcase-title">Core Business Competencies</h3>
          <div className="skills-grid grid-3">
            {skills.map((skill, index) => (
              <div key={index} className="skill-showcase-card glass-panel">
                <div className="skill-card-top">
                  {skill.icon}
                  <span className="skill-badge">{skill.percentage}% Mastery</span>
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-desc">{skill.description}</p>
                <div className="skill-bar-container">
                  <div className="skill-bar-fill" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
