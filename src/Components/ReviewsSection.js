import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
      author: 'Дима Г.',
      text: 'Потрясающее качество! Я несколько раз прыгнул и нечего не случилось'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
      author: 'Лёша Г.',
      text: 'Лучший подарок для меня! Лёша в восторге'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
      author: 'Яна К.',
      text: 'Пользуюсь уже полгода, как новая!'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
      author: 'Сергей З.',
      text: 'Стильно смотрится, качество на высоте'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="reviews-section">
      {/* Background */}
      <div className="reviews-background">
        <div className="reviews-blur-circle-1"></div>
        <div className="reviews-blur-circle-2"></div>
      </div>

      <div className="container">
        {/* Title */}
        <div className="reviews-title">
          <h2 className="reviews-main-title">
            ФОТО <span className="reviews-highlight">ДОСТОЧЕК</span> ВЖИВУЮ
          </h2>
          <p className="reviews-subtitle">
            Счастливые клиенты прислали нам фото своих досточек!
          </p>
        </div>

        {/* Carousel */}
        <div className="reviews-carousel">
          {/* Main Image */}
          <div className="review-image-container">
            <img
              src={reviews[currentIndex].image}
              alt={`Отзыв ${reviews[currentIndex].author}`}
              className="review-image"
            />
            
            {/* Review Info Overlay */}
            <div className="review-info">
              <p className="review-author">{reviews[currentIndex].author}</p>
              <p className="review-text">{reviews[currentIndex].text}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="review-nav-btn review-prev-btn"
          >
            <ChevronLeft size={32} />
          </Button>
          <Button
            onClick={nextSlide}
            className="review-nav-btn review-next-btn"
          >
            <ChevronRight size={32} />
          </Button>

          {/* Dots Indicator */}
          <div className="reviews-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`review-dot ${index === currentIndex ? 'review-dot-active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;