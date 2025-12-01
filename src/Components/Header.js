import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logo from './logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="hero-image-glow2"></div>

        {/* Logo with image */}
        <div className="logoHeader"> 
          <img 
            src={logo} 
            alt="Logo" 
            style={{ height: '100px', width: '100px', objectFit: 'contain' }} 
          />
          <h1>
            <span className="logo-accent">Stone Studio Store</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <button onClick={() => scrollToSection('prices')}>КАТАЛОГ</button>
          <button onClick={() => scrollToSection('advantages')}>ПЕРЕВАГИ</button>
          <button onClick={() => scrollToSection('reviews')}>ВІДГУКИ</button>
          <button onClick={() => scrollToSection('contacts')}>КОНТАКТ</button>
        </nav>

        {/* Call Button */}
        <div className="call-button-desktop">
          <Button onClick={() => scrollToSection('contacts')}>
            Подзвонити
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu open">
          <button onClick={() => scrollToSection('advantages')}>Перевага</button>
          <button onClick={() => scrollToSection('reviews')}>Відгуки</button>
          <button onClick={() => scrollToSection('prices')}>Вартість</button>
          <button onClick={() => scrollToSection('contacts')}>Контакти</button>
          <Button onClick={() => scrollToSection('contacts')} className="header-call-button">
            Подзвонити
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;