import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, description, image, category } = product;
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(category === 'drinks' ? 'Regular' : '50g');
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Use product sizes if available, otherwise fallback to generated sizes
  const drinkSizes = {
    'Small': { label: 'Small', price: Math.round(price * 0.8) },
    'Regular': { label: 'Regular', price: price },
    'Large': { label: 'Large', price: Math.round(price * 1.3) }
  };

  const powderSizes = {
    '30g': { label: '30g', price: Math.round(price * 0.6) },
    '50g': { label: '50g', price: price },
    '100g': { label: '100g', price: Math.round(price * 1.8) }
  };

  // Check if product is matcha starter kit (no size options)
  const isStarterKit = name.toLowerCase().includes('starter kit') || category === 'kit';
  
  const sizeOptions = isStarterKit ? null : (product.sizes || (category === 'drinks' ? drinkSizes : powderSizes));
  const currentPrice = isStarterKit ? price : (sizeOptions?.[selectedSize]?.price || price);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const productData = {
      id: id,
      name: name,
      price: currentPrice,
      image: image,
      sizes: sizeOptions
    };
    
    addToCart(productData, selectedSize, 1);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
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
        <button 
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
          aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        
        {/* Size Options - Only show if not starter kit */}
        {!isStarterKit && sizeOptions && (
          <div className="size-options">
            {Object.entries(sizeOptions).map(([sizeKey, sizeData]) => (
              <button
                key={sizeKey}
                className={`size-option ${selectedSize === sizeKey ? 'selected' : ''}`}
                onClick={() => handleSizeSelect(sizeKey)}
              >
                {sizeData.label}
              </button>
            ))}
          </div>
        )}
        
        <p className="product-description">{description}</p>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="price">PHP {currentPrice}</span>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
