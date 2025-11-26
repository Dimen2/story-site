import React from 'react';
import { Button } from './ui/button';
import photo from './photo2.png'; 

const HeroSection = () => {
  const heroFeatures = [
    "Преміальна якість матеріалу",
    "Ручне виготовлення.",
    "Надійність на роки.", 
    "Стильний подарунок на будь-якої нагоди!"
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-blur-circle hero-blur-circle-1"></div>
        <div className="hero-blur-circle hero-blur-circle-2"></div>

      </div>


      <div className="container">
        <div className="hero-content">
          
          <div className="hero-left">
            <div className="hero-badge">
              Корисний подарунок до Нового року
            </div>

            <h1 className="hero-title">
              <span className="hero-title-accent">R-SHIFT</span>
            </h1>

            <h2 className="hero-subtitle">
              Кухня починається з дошки. Оберіть ту, яка створена надихати
            </h2>

            <ul className="hero-features">
              {heroFeatures.map((feature, index) => (
                <li key={index}>
                  <span className="feature-bullet">-</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="hero-buttons">
              <Button
                onClick={() => scrollToSection('prices')}
                className="hero-btn-primary"
              >
                ХОЧУ ЗАМОВИТИ
              </Button>
              <Button
                onClick={() => scrollToSection('advantages')}
                variant="outline"
                className="hero-btn-outline" 
              >
                У ЧОМУ КАЙФ?
              </Button>
            </div>

            <p className="hero-note">
              *Эксклюзивное предложение распродажи. 40% скидка действует до 30.12
            </p>
          </div>

          {/* Right Image */}
          <div className="hero-right">
            <div className="discount-badge">
              -40%
            </div>
            
            <div className="hero-image-wrapper">
              <div className="hero-image-glow3"></div>
              <img
                src={photo} 
                alt="Каменная доска R-SHIFT"
                className="hero-image2"
              />
              <div className="feature-tag feature-tag-1">
                від 1450 грн
              </div>
              {/* <div className="feature-tag feature-tag-2">
                НЕ ТУПЯТ НОЖИ
              </div>
              <div className="feature-tag feature-tag-3">
                НЕ ВПИТЫВАЮТ ЗАПАХИ
              </div>
              <div className="feature-tag feature-tag-4">
                ГАРАНТИЯ 15 ЛЕТ
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;