import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, price, description, image, category } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <div className="image-placeholder">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className="placeholder-content">
              <span className="placeholder-icon">🍵</span>
              <span className="placeholder-text">{name}</span>
            </div>
          )}
        </div>
        {category && <span className="product-category">{category}</span>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">
          <span className="price">PHP {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
