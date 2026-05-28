import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import FinanceWidgets from './components/FinanceWidgets';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import WelcomeScreen from './components/WelcomeScreen';
import './App.css';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-wrapper">
      {!hasEntered && <WelcomeScreen onEnter={() => setHasEntered(true)} />}
      
      {/* Portfolio main view (reveals after entry gate) */}
      <div className={`main-portfolio-content ${hasEntered ? 'entry-revealed' : 'entry-hidden'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Experience />
        <FinanceWidgets />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default App;
