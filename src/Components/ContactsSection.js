import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время!');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacts" className="contacts-section">
      {/* Background */}
      <div className="contacts-background">
        <div className="contacts-blur-circle-1"></div>
        <div className="contacts-blur-circle-2"></div>
      </div>

      <div className="container">
        <div className="contacts-wrapper">
          {/* Title */}
          <div className="contacts-title">
            <h2 className="contacts-main-title">
              КОНТАКТЫ
            </h2>
            <p className="contacts-subtitle">
              Свяжитесь с нами любым удобным способом!
            </p>
          </div>

          <div className="contacts-content">
            {/* Contact Info */}
            <div className="contacts-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={28} />
                </div>
                <div className="contact-details">
                  <p className="contact-type">Телефон</p>
                  <a href="tel:+380123456789" className="contact-value">
                    +38 (012) 345-67-89
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={28} />
                </div>
                <div className="contact-details">
                  <p className="contact-type">Email</p>
                  <a href="mailto:info@r-shift.com" className="contact-value">
                    info@r-shift.com
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={28} />
                </div>
                <div className="contact-details">
                  <p className="contact-type">Адрес</p>
                  <p className="contact-value">
                    г. Харьков, ул. Не помню, 123
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contacts-form">
              <div className="form-header">
                <MessageCircle size={32} />
                <h3 className="form-title">Оставьте заявку</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Ваш телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <Textarea
                    name="message"
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="submit-button"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;