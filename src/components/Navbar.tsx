import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Specializations', href: '#specializations' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar glass-panel ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src="/assets/logo.png" alt="Logo" className="nav-logo-image" />
          <span className="logo-text">
            DILIP GUPTA<span className="logo-accent">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} className="sun-icon" /> : <Moon size={20} className="moon-icon" />}
          </button>
        </div>

        {/* Mobile Hamburger & Theme Selector */}
        <div className="navbar-mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn mobile-theme-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu glass-panel ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
