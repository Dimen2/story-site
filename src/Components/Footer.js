import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">R-SHIFT</h3>
            <p className="footer-description">
              Совершенные кухонные доски из камня. Насти материал и Андрея технология.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Быстрые ссылки</h4>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() => scrollToSection('advantages')}
                  className="footer-link"
                >
                  Преимущества
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="footer-link"
                >
                  Отзывы
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('prices')}
                  className="footer-link"
                >
                  Цены
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacts')}
                  className="footer-link"
                >
                  Контакты
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => scrollToSection('question')}
                  className="footer-link"
                >
                  Вопрос и ответ
                </button>
              </li> */}
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Контакты</h4>
            <ul className="footer-contacts">
              <li className="footer-contact-item">
                <Phone size={20} />
                <a href="tel:+380123456789" className="footer-contact-link">
                  +380 (55) 555-55-55
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail size={20} />
                <a href="mailto:info@r-shift.com" className="footer-contact-link">
                  info@r-shift.com
                </a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={20} />
                <span className="footer-contact-text">г. Харьков, ул. Не помню, 123</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2025 R-SHIFT. Все права защищены.
          </p>
          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
          >
            ↑ Наверх
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;