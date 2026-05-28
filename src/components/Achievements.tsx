import React from 'react';
import { Trophy, Globe, Percent, Sparkles, ShieldAlert } from 'lucide-react';
import './Achievements.css';

export const Achievements: React.FC = () => {
  const achievementsList = [
    {
      icon: <Globe className="ach-icon" />,
      title: "International Performance Trip",
      count: "1 Trip",
      detail: "Awarded a fully-sponsored international trip through the prestigious corporate company performance program for outstanding sales and network expansion.",
      highlight: "Elite Performer"
    },
    {
      icon: <Trophy className="ach-icon" />,
      title: "Mumbai Outstanding Contribution",
      count: "2 Times",
      detail: "Received the highly acclaimed company awards twice in the Mumbai region for remarkable partner management and volume targets.",
      highlight: "Regional Champion"
    },
    {
      icon: <Percent className="ach-icon" />,
      title: "Performance Salary Increment",
      count: "2 Times",
      detail: "Recognized with double 6-month out-of-turn performance salary increments for exceeding baseline corporate targets.",
      highlight: "Rapid Growth"
    },
    {
      icon: <Sparkles className="ach-icon" />,
      title: "Annual Target Completion",
      count: "2 Times",
      detail: "Achieved absolute annual target milestones twice, showing consistency and long-term business generation excellence.",
      highlight: "Consistent Achiever"
    },
    {
      icon: <ShieldAlert className="ach-icon" />,
      title: "Early Target Certificates",
      count: "3 Times",
      detail: "Awarded three certificates of honor for hitting designated sales and onboarding milestones well ahead of schedules.",
      highlight: "Speed & Execution"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Trophies & Milestones</span>
          <h2 className="section-title">
            Achievements & <span className="gold-gradient-text">Awards</span>
          </h2>
          <div className="header-bar"></div>
        </div>

        <div className="achievements-showcase-grid">
          {achievementsList.map((ach, idx) => (
            <div key={idx} className="achievement-card glass-panel">
              <div className="ach-header">
                <div className="ach-icon-wrapper">
                  {ach.icon}
                </div>
                <span className="ach-badge">{ach.highlight}</span>
              </div>
              <div className="ach-body">
                <span className="ach-number">{ach.count}</span>
                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-desc">{ach.detail}</p>
              </div>
              <div className="card-ambient-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
