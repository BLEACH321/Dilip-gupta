import React, { useState } from 'react';
import { TrendingUp, Calculator, Network } from 'lucide-react';
import './FinanceWidgets.css';

export const FinanceWidgets: React.FC = () => {
  // SIP Calculator State
  const [monthlyInvest, setMonthlyInvest] = useState<number>(10000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [years, setYears] = useState<number>(15);

  // Math logic for compound interest
  const P = monthlyInvest;
  const i = expectedReturn / 12 / 100;
  const n = years * 12;
  
  // SIP Formula: M = P * [ ( (1 + i)^n - 1 ) / i ] * (1 + i)
  const totalWealth = Math.round(
    P * (((Math.pow(1 + i, n) - 1) / i) * (1 + i))
  );
  const totalInvested = P * n;
  const wealthGain = totalWealth - totalInvested;

  // Custom formatting
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const partnerNetwork = [
    { type: "IMF", label: "Insurance Marketing Firm", count: "45+", activeRate: "92%" },
    { type: "BA", label: "Business Associates", count: "120+", activeRate: "88%" },
    { type: "CA", label: "Chartered Accountants", count: "80+", activeRate: "90%" },
    { type: "Broker", label: "Independent Brokers", count: "250+", activeRate: "95%" }
  ];

  return (
    <section id="specializations" className="widgets-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Interactive Wealth Panel</span>
          <h2 className="section-title">
            Finance & Advisory <span className="gold-gradient-text">Specializations</span>
          </h2>
          <div className="header-bar"></div>
        </div>

        <div className="widgets-grid grid-2">
          {/* SIP / Mutual Fund Calculator */}
          <div className="calculator-widget glass-panel">
            <div className="widget-header">
              <Calculator className="widget-icon gold" />
              <h3>Interactive Mutual Fund (SIP) Calculator</h3>
            </div>
            <p className="widget-desc">
              Demonstrating mutual fund compound growth pathways. Slide the variables to calculate future returns.
            </p>

            <div className="slider-group">
              <div className="slider-label-row">
                <span>Monthly Investment</span>
                <span className="slider-value">{formatCurrency(monthlyInvest)}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000" 
                value={monthlyInvest}
                onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                className="custom-range"
              />
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span>Expected Return Rate (p.a.)</span>
                <span className="slider-value">{expectedReturn}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="30" 
                step="0.5" 
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="custom-range"
              />
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span>Time Period</span>
                <span className="slider-value">{years} Years</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="40" 
                step="1" 
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="custom-range"
              />
            </div>

            <div className="results-panel">
              <div className="result-item">
                <span className="result-lbl">Total Invested</span>
                <span className="result-val text-secondary">{formatCurrency(totalInvested)}</span>
              </div>
              <div className="result-item">
                <span className="result-lbl">Estimated Returns</span>
                <span className="result-val text-emerald">{formatCurrency(wealthGain)}</span>
              </div>
              <div className="result-item total">
                <span className="result-lbl">Total Value</span>
                <span className="result-val text-gold">{formatCurrency(totalWealth)}</span>
              </div>
            </div>
          </div>

          {/* Partner & Distribution Model */}
          <div className="network-widget glass-panel">
            <div className="widget-header">
              <Network className="widget-icon emerald" />
              <h3>Partner Distribution Framework</h3>
            </div>
            <p className="widget-desc">
              Dilip's core competence in corporate activation, empanelment, and strategic support structures across the Mumbai metropolitan area.
            </p>

            <div className="network-dashboard-grid">
              {partnerNetwork.map((net, idx) => (
                <div key={idx} className="network-card glass-panel">
                  <div className="net-top">
                    <span className="net-badge">{net.type}</span>
                    <span className="net-count">{net.count}</span>
                  </div>
                  <h4 className="net-label">{net.label}</h4>
                  <div className="net-metrics">
                    <div className="net-sub-metric">
                      <span className="ns-label">Active Support</span>
                      <span className="ns-val">{net.activeRate}</span>
                    </div>
                  </div>
                  <div className="net-progress-bar">
                    <div className="net-progress-fill" style={{ width: net.activeRate }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="expert-note glass-panel">
              <TrendingUp className="note-icon" />
              <div>
                <h4>Mutual Fund & Protection Synergy</h4>
                <p>Establishing an integrated model to maximize cross-sell products per partner network to achieve top-tier business metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinanceWidgets;
