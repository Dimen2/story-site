import React from 'react';
import { Button } from './ui/button';
import photo from './photo6.png'; 
import photo1 from './photo7.png'; 
import photo2 from './photo8.png'; 
import photo3 from './photo9.png'; 
import photo4 from './photo10.png'; 
import photo5 from './photo11.png'; 

const PricesSection = () => {
  const products = [
    {
      id: 1,
      name: "Цвет 'Белый'",
      color: "white",
      discount: 40,
      image: photo, // <--- заменено
      sizes: [],
      setPrice: { old: "2855", new: "1499" }
    },
    {
      id: 2,
      name: "Цвет 'Красный'", 
      color: "blanch",
      discount: 40,
      image: photo1,
      sizes: [
        // { size: "20x30 см", oldPrice: "999", newPrice: "699" },
        // { size: "24x36 см", oldPrice: "1666", newPrice: "999" }
      ],
      setPrice: { old: "2855", new: "1699" }
    },
    {
      id: 3,
      name: "Цвет 'Жолтый'",
      color: "pomnt", 
      discount: 40,
      image: photo2,
      sizes: [
        // { size: "20x30 см", oldPrice: "999", newPrice: "699" },
        // { size: "24x36 см", oldPrice: "1666", newPrice: "999" }
      ],
      setPrice: { old: "2855", new: "1699" }
    },
    {
      id: 3,
      name: "Цвет 'Жолтый'",
      color: "pomnt", 
      discount: 40,
      image: photo3,
      sizes: [
        // { size: "20x30 см", oldPrice: "999", newPrice: "699" },
        // { size: "24x36 см", oldPrice: "1666", newPrice: "999" }
      ],
      setPrice: { old: "2855", new: "1699" }
    },
    {
      id: 3,
      name: "Цвет 'Жолтый'",
      color: "pomnt", 
      discount: 40,
      image: photo4,
      sizes: [
        // { size: "20x30 см", oldPrice: "999", newPrice: "699" },
        // { size: "24x36 см", oldPrice: "1666", newPrice: "999" }
      ],
      setPrice: { old: "2855", new: "1699" }
    },
    {
      id: 3,
      name: "Цвет 'Жолтый'",
      color: "pomnt", 
      discount: 40,
      image: photo5,
      sizes: [
        // { size: "20x30 см", oldPrice: "999", newPrice: "699" },
        // { size: "24x36 см", oldPrice: "1666", newPrice: "999" }
      ],
      setPrice: { old: "2855", new: "1699" }
    }
  ];

  const handleOrder = (productName) => {
    alert(`Заказ оформлен для: ${productName}`);
  };

  return (
    <section id="prices" className="prices-section">
      <div className="prices-background">
        <div className="prices-blur-circle-1"></div>
        <div className="prices-blur-circle-2"></div>
      </div>
        <div className="advantages-title">
          <h2 className="advantages-main-title">
            КАТАЛОГ <span className="advantages-highlight">НАШОЇ </span> ПРОДУКЦИЇ
          </h2>
        </div>
      <div className="container">
        <div className="prices-grid">
          {products.map((product) => (
            <div key={product.id} className="price-card">
              {/* Discount Badge */}
              <div className="discount-badge-price">
                -{product.discount}%
              </div>

              {/* Product Image */}
              <div className="price-card-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              {/* Product Info */}
              <div className="price-card-content">
                <h3 className="product-name">{product.name}</h3>

                <div className="price-info">
                  <p className="discount-text">ЦЕНА СО СКИДКОЙ {product.discount}%</p>
                  
                  {product.sizes.map((size, index) => (
                    <div key={index} className="size-price">
                      <p>
                        Доска {size.size}: <span className="old-price">{size.oldPrice} грн.</span>{' '}
                        <span className="new-price">{size.newPrice} грн.</span>
                      </p>
                    </div>
                  ))}

                  <div className="set-price">
                    <p>
                      Комплект: <span className="old-price">{product.setPrice.old} грн.</span>{' '}
                      <span className="new-price-large">{product.setPrice.new} грн.</span>
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => handleOrder(product.name)}
                  className="order-button"
                >
                  ЗАКАЗАТЬ {product.color === 'white' ? 'БЕЛЫЙ' : product.color === 'blanch' ? 'БЛАНШ' : 'ПОМНТ'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricesSection;