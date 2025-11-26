import React, { useState, useEffect } from 'react';

const Moblael = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setIsContactsOpen(false);
      setIsClicked(false);
    }
  };

  const toggleContacts = () => {
    if (!isClicked) {
      setIsClicked(true);
      setTimeout(() => {
        setIsContactsOpen(true);
      }, 300);
    } else {
      setIsContactsOpen(false);
      setTimeout(() => {
        setIsClicked(false);
      }, 300);
    }
  };

  const contacts = [
    {
      name: 'Telegram',
      icon: '📱',
      url: 'https://t.me/@Dirn4ik',
      color: '#0088cc'
    },
    {
      name: 'WhatsApp',
      icon: '💬', 
      url: 'https://wa.me/yournumber',
      color: '#25D366'
    },
    {
      name: 'Viber',
      icon: '📞',
      url: 'viber://chat?number=yournumber',
      color: '#7360F2'
    },
    {
      name: 'Phone',
      icon: '📲',
      url: 'tel:+1234567890',
      color: '#34C759'
    }
  ];

  const handleContactClick = (url) => {
    window.open(url, '_blank');
    setIsContactsOpen(false);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="moblael-container">
          {isContactsOpen && (
            <div className="contacts-popup">
              <div className="contacts-title">Свяжитесь с нами</div>
              <div className="contacts-list">
                {contacts.map((contact, index) => (
                  <button
                    key={index}
                    className="contact-item"
                    onClick={() => handleContactClick(contact.url)}
                    style={{ '--contact-color': contact.color }}
                  >
                    <span className="contact-icon">{contact.icon}</span>
                    <span className="contact-name">{contact.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <button 
            className={`moblael-to-top-button ${isClicked ? 'clicked' : ''}`} 
            onClick={toggleContacts}
          >
            {!isClicked ? (
              <svg className="moblael-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.757 15.757 0 006.59 6.59l2.5-2.5a1 1 0 011.05-.22c1.47.58 3.03.9 4.63.9a1 1 0 011 1v3.5a1 1 0 01-1 1A20 20 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.6.32 3.16.9 4.63a1 1 0 01-.22 1.05z" />
              </svg>
            ) : (
              <div className="close-icon">×</div>
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default Moblael;