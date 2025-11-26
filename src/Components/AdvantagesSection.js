import React from 'react';

const AdvantagesSection = () => {
  const advantages = [
    {
      id: 1,
      number: "01",
      title: "НЕ БОЇТЬСЯ УДАРІВ",
      // description: "Наши доски выдерживают нагрузки до 10000 кг и не деформируются со временем"
    },
    {
      id: 2, 
      number: "02",
      title: "НЕ ДРУЖИТЬ ІЗ МІКРОБАМИ",
      description: ""
    },
    {
      id: 3,
      number: "03", 
      title: "ІГНОРУЄ ВОДУ ТА ЗАПАХИ",
      description: ""
    },
    {
      id: 4,
      number: "04",
      title: "ЗАВЖДИ ТРИМАЄ ФОРМУ",
      description: ""
    },
    {
      id: 5,
      number: "05",
      title: "ГЛАДЕНЬКА, ХОЛОДНА, ПРИЄМНА НА ДОТИК ПОВЕРХНЯ",
      description: ""
    },
    {
      id: 6,
      number: "06", 
      title: "ІДЕАЛЬНИЙ ДЛЯ ТОЧНИХ РУХІВ НОЖА ТА СТИЛЬНИХ ПОДАЧ СТРАВ",
      description: ""
    }
  ];

  return (
    <section id="advantages" className="advantages-section">
      {/* Background */}
      <div className="advantages-background">
        <div className="advantages-blur-circle-1"></div>
        <div className="advantages-blur-circle-2"></div>
      </div>

      <div className="container">
        {/* Title */}
        <div className="advantages-title">
          <h2 className="advantages-main-title">
            ЧОМУ НАС <span className="advantages-highlight">ОБРАЛИ 500 </span> КЛІЄНТІВ?
          </h2>
          <p className="advantages-subtitle">
            Тому що акрил поводиться як справжній супергерой!
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="advantages-grid">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="advantage-card">
              {/* Number Circle */}
              <div className="advantage-number">
                <span>{advantage.number}</span>
              </div>

              <div className="advantage-content">
                <h3 className="advantage-title">
                  {advantage.title}
                </h3>
                <p className="advantage-description">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;