import React, { useState } from 'react';
import { Button } from './ui/button';
import './QuestionAndAnswer.css';
import photoFAQ from './photo3.png';
import photoHero from './photo5.png';

export default function MainPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'Чи можна різати на дошці мясо та рибу',
      answer: 'Так! Акриловий камінь - непористий матеріал. Він не вбирає запахи і не пропускає вологу, тому ідеально підходить для будь-яких продуктів.'
    },
    {
      question: 'Як доглядати за дошкою',
      answer: 'Дуже просто: промити під теплою водою або протерти вологою серветкою. Не потребує спеціальних засобів чи просушивання.'
    },
    {
      question: 'Чи можна ставити дошку в посудомийку',
      answer: 'Так, дошки витримують миття в посудомийній машини, але ручне миття продовжує їх первинний вигляд довше.'
    },
    {
      question: 'Чи не ковзає дошка на столі',
      answer: 'Ні, завдяки вазі та текстурі акрилового камню дошка стоїть душе стабільно.'
    },
    {
      question: 'Для рекомендується великий розмір дошки',
      answer: 'Для всього! Стейки, піца, нарізки, випічка, тісто, сервірування. Велика площа робить її універсальною для будь-яких кихоних задач.'
    },
    {
      question: 'Чи можна використовувати дошку як підставку для гарячого',
      answer: 'Так, акриловий камінь витримує високу температуру, але краще не ставити розпечений посуд відразу з плити - це збереже поверхню ідеальною надовго.'
    },
    {
      question: 'Чи можна на дошці робити відбивні',
      answer: 'Так, акрилова дошка створена для цього. Вона витримує удари металевим молотком.'
    }
  ];

  const heroFeatures = [
    "Насти материал и Андрея технология.",
    "Более 800+ восторженных отзывов.",
    "Защита от удара об голову.",
    "Крутой подарок на мою ДР!"
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-blur-circle hero-blur-circle-1"></div>
          <div className="hero-blur-circle hero-blur-circle-2"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-badge">СТИЛЬНЫЙ ПОДАРОК НА НОВЫЙ ГОД</div>
              <h1 className="hero-title">
                <span className="hero-title-accent">R-SHIFT</span>
              </h1>
              <h2 className="hero-subtitle">Совершенные кухонные доски из камня</h2>

              <ul className="hero-features">
                {heroFeatures.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-bullet">-</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="hero-buttons">
                <Button onClick={() => scrollToSection('question')} className="hero-btn-primary">
                  ХОЧУ ЗАКАЗАТЬ
                </Button>
                <Button onClick={() => scrollToSection('question')} variant="outline" className="hero-btn-outline">
                  В ЧЁМ КАЙФ?
                </Button>
              </div>

              <p className="hero-note">
                *Эксклюзивное предложение распродажи. 40% скидка действует до 30.12
              </p>
            </div>

            <div className="hero-right">
              <div className="hero-image-wrapper">
                <img src={photoHero} alt="Каменная доска R-SHIFT" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="question" className="qa-page-wrapper">
        <img src={photoFAQ} alt="Каменная доска R-SHIFT" className="photo_QuestionAndAnswer" />

        <div className="faq-container">
          <h2 className="span_name">ПИТАННЯ ВІДПОВІДІ</h2>

          {faqData.map((item, index) => (
            <div key={index}>
              <button className="faq-question" onClick={() => toggleAnswer(index)}>
                {item.question}
                <span className={`arrow ${openIndex === index ? 'open' : ''}`}>X</span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}

              <div className="faq-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
