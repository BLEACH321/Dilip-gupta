import React, { useState, useEffect } from 'react';
import { ShieldCheck, Play, Radio } from 'lucide-react';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Terminal Ready.');
  const [isFading, setIsFading] = useState(false);

  // Trigger speech synthesis
  const speakWelcome = () => {
    if ('speechSynthesis' in window) {
      // Clear any pending utterances
      window.speechSynthesis.cancel();
      
      const welcomeText = "दिलीप गुप्ता के व्यावसायिक पोर्टफोलियो में आपका स्वागत है। इनकी विशेषज्ञता में शामिल हैं: इंश्योरेंस सेल्स, म्यूचुअल फंड्स, क्लाइंट रिलेशनशिप मैनेजमेंट, क्रॉस-सेलिंग और अप-सेलिंग, लीड जनरेशन, टीम हैंडलिंग और रिक्रूटमेंट, बिजनेस डेवलपमेंट, इंश्योरेंस मार्केटिंग फर्म हैंडलिंग, पार्टनर और ब्रोकर मैनेजमेंट, प्रोडक्ट ट्रेनिंग, सेल्स टारगेट अचीवमेंट, एमआईएस रिपोर्टिंग, कस्टमर सर्विस, बिजनेस पार्टनर कोऑर्डिनेशन, और फाइनेंशियल सर्विसेज।";
      const utterance = new SpeechSynthesisUtterance(welcomeText);
      utterance.lang = 'hi-IN';
      
      // Select best Hindi voice
      const voices = window.speechSynthesis.getVoices();
      const premiumVoice = voices.find(voice => voice.lang.includes('hi-IN'));
      
      if (premiumVoice) {
        utterance.voice = premiumVoice;
      }
      
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStart = () => {
    setIsStarted(true);
    setStatusText('Initializing Secure Terminal...');
    
    // Speak welcome immediately on user click (browser security permission granted!)
    speakWelcome();
  };

  useEffect(() => {
    if (!isStarted) return;

    // Start progress bar increments
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const val = next > 100 ? 100 : next;
        
        // Update statuses
        if (val < 25) {
          setStatusText('Initializing Secure Terminal...');
        } else if (val < 55) {
          setStatusText('Onboarding Partner Distributions...');
        } else if (val < 80) {
          setStatusText('Sanitizing MIS Performance Metrics...');
        } else if (val < 99) {
          setStatusText('Optimizing Wealth Yield Vectors...');
        } else {
          setStatusText('Access Granted.');
        }
        
        return val;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isStarted]);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimeout = setTimeout(() => {
        setIsFading(true);
        const enterTimeout = setTimeout(() => {
          onEnter();
        }, 1000);
        return () => clearTimeout(enterTimeout);
      }, 1200);

      return () => clearTimeout(fadeTimeout);
    }
  }, [progress, onEnter]);

  return (
    <div className={`welcome-overlay ${isFading ? 'fade-out' : ''}`}>
      <div className="welcome-card glass-panel text-center">
        <div className={`welcome-logo-container ${progress === 100 ? 'access-granted pulse-gold' : isStarted ? 'loading-active' : ''}`}>
          {progress === 100 ? (
            <ShieldCheck className="welcome-logo-icon access" />
          ) : (
            <img src="/assets/logo.png" alt="Dilip Gupta Logo" className="welcome-rotating-logo" />
          )}
        </div>
        
        <h1 className="welcome-title">DILIP GUPTA</h1>
        <p className="welcome-subtitle">Wealth Strategist & Senior Corporate Manager</p>
        
        <div className="divider-line"></div>
        
        {!isStarted ? (
          <div className="launch-gate-panel">
            <p className="welcome-note">
              Explore advanced corporate distribution networks, mutual fund advisory, and premium protection models.
            </p>
            
            <button onClick={handleStart} className="btn btn-primary welcome-enter-btn">
              <span>Access Portfolio Terminal</span>
              <Play size={16} />
            </button>
            
            <span className="audio-helper-tag">
              <Radio size={12} className="live-icon" /> Audio experience enabled on click
            </span>
          </div>
        ) : (
          <div className="loading-container">
            <div className="loading-header-row">
              <span className="loading-status">{statusText}</span>
              <span className="loading-percentage">{progress}%</span>
            </div>
            
            <div className="loading-progress-track">
              <div className="loading-progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            
            <p className="welcome-note-small">
              Securing connection with Mumbai Regional Distribution Hub...
            </p>
          </div>
        )}
      </div>
      
      <div className="welcome-glow-blob bg-gold"></div>
      <div className="welcome-glow-blob bg-emerald"></div>
    </div>
  );
};

export default WelcomeScreen;
