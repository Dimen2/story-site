import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

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

        {/* Logo */}
        <div className="logo">
          <h1>КУХОННІ ДОШКИ <span className="logo-accent">R-SHIFT</span></h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <button onClick={() => scrollToSection('prices')}>
             КАТАЛОГ
          </button>
          <button onClick={() => scrollToSection('advantages')}>
            ПЕРЕВАГИ
          </button>
          <button onClick={() => scrollToSection('reviews')}>
            ВІДГУКИ
          </button>
          {/* <button onClick={() => scrollToSection('question')}>
            Питання та відповіді
          </button> */}
          <button onClick={() => scrollToSection('contacts')}>
            КОНТАКТ
          </button>
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
          <button onClick={() => scrollToSection('advantages')}>
            Перевага
          </button>
          <button onClick={() => scrollToSection('reviews')}>
            Відгуки
          </button>
          <button onClick={() => scrollToSection('prices')}>
            Вартість
          </button>
          {/* <button onClick={() => scrollToSection('question')}>
            Питання та відповіді
          </button> */}
          <button onClick={() => scrollToSection('contacts')}>
           Контакти
          </button>
          <Button
  onClick={() => scrollToSection('contacts')}
  className="header-call-button"
>
  Подзвонити
</Button>
        </div>
      )}
    </header>
  );
};

export default Header;