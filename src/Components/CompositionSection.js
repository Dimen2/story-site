import React, { useState, useEffect } from 'react';

const CompositionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Перевірка на існування window для безпечного рендерингу (наприклад, SSR)
    if (typeof window !== 'undefined' && window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <svg 
            className="arrow-icon" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            {/* ВИПРАВЛЕНИЙ ШЛЯХ: тільки стрілка без кола */}
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
          </svg>
        </button>
      )}
    </>
  );
};

export default CompositionSection;











// import React from 'react';
// import { Button } from './ui/button';
// import photo from './photo5.png'; 

// const CompositionSection = () => {
//   const heroFeatures = [
//     "Насти материал и Андрея технология.",
//     "Более 800+ восторженных отзывов.",
//     "Защита от удара об голову.", 
//     "Крутой подарок на мою ДР!"
//   ];

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="hero-section">
//       {/* Animated Background */}
//       <div className="hero-background">
//         <div className="hero-blur-circle hero-blur-circle-1"></div>
//         <div className="hero-blur-circle hero-blur-circle-2"></div>
//       </div>

//       <div className="container">
//         <div className="hero-content">
//           {/* Left Content */}
//           <div className="hero-left">
//             <div className="hero-badge">
//               СТИЛЬНЫЙ ПОДАРОК НА НОВЫЙ ГОД
//             </div>

//             <h1 className="hero-title">
//               <span className="hero-title-accent">R-SHIFT</span>
//             </h1>

//             <h2 className="hero-subtitle">
//               Совершенные кухонные доски из камня
//             </h2>

//             <ul className="hero-features">
//               {heroFeatures.map((feature, index) => (
//                 <li key={index}>
//                   <span className="feature-bullet">-</span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="hero-buttons">
//               <Button
//                 onClick={() => scrollToSection('prices')}
//                 className="hero-btn-primary"
//               >
//                 ХОЧУ ЗАКАЗАТЬ
//               </Button>
//               <Button
//                 onClick={() => scrollToSection('advantages')}
//                 variant="outline"
//                 className="hero-btn-outline" 
//               >
//                 В ЧЁМ КАЙФ?
//               </Button>
//             </div>

//             <p className="hero-note">
//               *Эксклюзивное предложение распродажи. 40% скидка действует до 30.12
//             </p>
//           </div>

//           {/* Right Image */}
//           <div className="hero-right">
            
//             <div className="hero-image-wrapper">
//               <img
//                 src={photo}
//                 alt="Каменная доска R-SHIFT"
//                 className="hero-image"
//               />
//               {/* <div className="feature-tag feature-tag-2">
//                 НЕ ТУПЯТ НОЖИ
//               </div>
//               <div className="feature-tag feature-tag-3">
//                 НЕ ВПИТЫВАЮТ ЗАПАХИ
//               </div>
//               <div className="feature-tag feature-tag-4">
//                 ГАРАНТИЯ 15 ЛЕТ
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompositionSection;