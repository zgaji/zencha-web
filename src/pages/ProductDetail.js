import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('Regular');
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock product data - in real app, this would come from an API
  const products = [
    // Drinks
    {
      id: 'signature-matcha-latte',
      name: "Signature Matcha Latte",
      price: 210,
      description: "Premium ceremonial grade matcha with creamy milk and ice. Our signature drink features the perfect balance of earthy matcha and smooth dairy, creating a refreshing and energizing experience.",
      category: "drinks",
      image: "/assets/images/products/matcha-latter.jpg",
      ingredients: ["Ceremonial Grade Matcha", "Oat Milk", "Ice", "Vanilla Extract"],
      nutrition: {
        calories: 120,
        caffeine: "80mg",
        sugar: "8g"
      },
      sizes: {
        'Small': { label: 'Small (12oz)', price: 168 },
        'Regular': { label: 'Regular (16oz)', price: 210 },
        'Large': { label: 'Large (20oz)', price: 273 }
      }
    },
    {
      id: 'ichigo-matcha-latte',
      name: "Ichigo Matcha Latte",
      price: 230,
      description: "Sweet strawberry blended with zencha's strawberry matcha for a refreshing treat. This delightful combination brings together the earthiness of matcha with the natural sweetness of fresh strawberries.",
      category: "drinks",
      image: "/assets/images/products/stawberry-matcha.jpg",
      ingredients: ["Strawberry Matcha", "Oat Milk", "Fresh Strawberries", "Ice"],
      nutrition: {
        calories: 140,
        caffeine: "75mg",
        sugar: "12g"
      },
      sizes: {
        'Small': { label: 'Small (12oz)', price: 184 },
        'Regular': { label: 'Regular (16oz)', price: 230 },
        'Large': { label: 'Large (20oz)', price: 299 }
      }
    },
    {
      id: 'kinako-matcha-latte',
      name: "Kinako Matcha Latte",
      price: 230,
      description: "Stone ground matcha with kinako powder and oat milk. A unique blend offering a nutty, roasted flavor profile that complements the matcha beautifully.",
      category: "drinks",
      image: "/assets/images/products/matcha-latter.jpg",
      ingredients: ["Ceremonial Grade Matcha", "Kinako Powder", "Oat Milk", "Ice"],
      nutrition: {
        calories: 130,
        caffeine: "70mg",
        sugar: "6g"
      },
      sizes: {
        'Small': { label: 'Small (12oz)', price: 184 },
        'Regular': { label: 'Regular (16oz)', price: 230 },
        'Large': { label: 'Large (20oz)', price: 299 }
      }
    },
    {
      id: 'yuzu-matcha-cooler',
      name: "Yuzu Matcha Cooler",
      price: 200,
      description: "Sparkling matcha with citrusy yuzu. A vibrant and refreshing cooler, perfect for a hot day, offering a zesty twist to traditional matcha.",
      category: "drinks",
      image: "/assets/images/products/cc-matcha.jpg",
      ingredients: ["Ceremonial Grade Matcha", "Yuzu Juice", "Sparkling Water", "Ice"],
      nutrition: {
        calories: 80,
        caffeine: "60mg",
        sugar: "10g"
      },
      sizes: {
        'Small': { label: 'Small (12oz)', price: 160 },
        'Regular': { label: 'Regular (16oz)', price: 200 },
        'Large': { label: 'Large (20oz)', price: 260 }
      }
    },
    {
      id: 'iced-vanilla-matcha',
      name: "Iced Vanilla Matcha",
      price: 200,
      description: "Cold-brewed matcha with a hint of vanilla and light sweetness. A smooth and mellow matcha experience, subtly enhanced with vanilla.",
      category: "drinks",
      image: "/assets/images/products/matcha-latter.jpg",
      ingredients: ["Ceremonial Grade Matcha", "Water", "Vanilla Extract", "Ice"],
      nutrition: {
        calories: 90,
        caffeine: "65mg",
        sugar: "7g"
      },
      sizes: {
        'Small': { label: 'Small (12oz)', price: 160 },
        'Regular': { label: 'Regular (16oz)', price: 200 },
        'Large': { label: 'Large (20oz)', price: 260 }
      }
    },
    {
      id: 'coconut-cloud-matcha',
      name: "Coconut Cloud Matcha",
      price: 230,
      description: "Matcha cream top with refreshing coconut water. Experience the tropical twist on traditional matcha with our signature coconut cloud foam that adds a creamy, dreamy texture.",
      category: "drinks",
      image: "/assets/images/products/cc-matcha.jpg",
      ingredients: ["Ceremonial Grade Matcha", "Coconut Water", "Coconut Cream", "Ice"],
      nutrition: {
        calories: 110,
        caffeine: "70mg",
        sugar: "6g"
      },
      sizes: {
        'Small': { label: 'Small (12oz)', price: 184 },
        'Regular': { label: 'Regular (16oz)', price: 230 },
        'Large': { label: 'Large (20oz)', price: 299 }
      }
    },
    
    // Matcha Powders
    {
      id: 'ceremonial-grade-matcha-30g',
      name: "Ceremonial Grade Matcha",
      price: 450,
      description: "Premium ceremonial grade matcha powder in an elegant tin. Perfect for traditional preparation, this high-quality matcha offers a smooth, umami-rich flavor that's perfect for both drinking and cooking.",
      category: "powder",
      image: "/assets/images/products/matcha-1.jpg",
      ingredients: ["100% Ceremonial Grade Matcha"],
      nutrition: {
        calories: "5 per serving",
        caffeine: "70mg per serving",
        sugar: "0g"
      },
      sizes: {
        '30g': { label: '30g', price: 270 },
        '50g': { label: '50g', price: 450 },
        '100g': { label: '100g', price: 810 }
      }
    },
    {
      id: 'premium-matcha-50g',
      name: "Premium Matcha",
      price: 650,
      description: "High-quality matcha powder suitable for both drinking and cooking. This versatile matcha offers excellent flavor and can be used in lattes, smoothies, baking, and traditional tea preparation.",
      category: "powder",
      image: "/assets/images/products/matcha-2.jpg",
      ingredients: ["100% Premium Grade Matcha"],
      nutrition: {
        calories: "3 per serving",
        caffeine: "65mg per serving",
        sugar: "0g"
      },
      sizes: {
        '30g': { label: '30g', price: 390 },
        '50g': { label: '50g', price: 650 },
        '100g': { label: '100g', price: 1170 }
      }
    },
    {
      id: 'culinary-grade-matcha-100g',
      name: "Culinary Grade Matcha",
      price: 800,
      description: "Perfect for baking, smoothies, and cooking. Great value for regular use, this culinary grade matcha provides excellent flavor and color for all your culinary creations.",
      category: "powder",
      image: "/assets/images/products/matcha-3.jpg",
      ingredients: ["100% Culinary Grade Matcha"],
      nutrition: {
        calories: "2 per serving",
        caffeine: "60mg per serving",
        sugar: "0g"
      },
      sizes: {
        '30g': { label: '30g', price: 480 },
        '50g': { label: '50g', price: 800 },
        '100g': { label: '100g', price: 1440 }
      }
    },
    {
      id: 'matcha-starter-kit',
      name: "Matcha Starter Kit",
      price: 1200,
      description: "Complete kit with matcha powder, bamboo whisk, and traditional bowl. Everything you need to start your matcha journey at home, including premium ceremonial grade matcha and authentic Japanese tools.",
      category: "powder",
      image: "/assets/images/products/matcha-starter-kit.jpg",
      ingredients: ["Ceremonial Grade Matcha (30g)", "Bamboo Whisk (Chasen)", "Matcha Bowl (Chawan)", "Measuring Spoon", "Instructions"],
      nutrition: {
        calories: "5 per serving",
        caffeine: "70mg per serving",
        sugar: "0g"
      },
      sizes: null // No size options for starter kit
    }
  ];

  useEffect(() => {
    // Find product by ID
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      // Set default size based on category
      if (foundProduct.category === 'drinks') {
        setSelectedSize('Regular');
      } else if (foundProduct.category === 'powder' && foundProduct.sizes) {
        setSelectedSize('50g');
      }
    }
    setLoading(false);
  }, [id, products]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    const currentPrice = product.sizes ? product.sizes[selectedSize]?.price : product.price;
    
    const productData = {
      id: product.id,
      name: product.name,
      price: currentPrice,
      image: product.image,
      sizes: product.sizes
    };
    
    addToCart(productData, selectedSize, quantity);
  };


  if (loading) {
    return (
      <div className="product-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-error">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/products')} className="back-button">
          Back to Products
        </button>
      </div>
    );
  }

  const currentPrice = product.sizes ? product.sizes[selectedSize]?.price : product.price;

  return (
    <div className="product-detail">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <button onClick={() => navigate('/products')} className="breadcrumb-link">
            Products
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        <div className="product-detail-content">
          {/* Product Image */}
          <div className="product-image-section">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <button 
                className={`like-button ${isLiked ? 'liked' : ''}`}
                onClick={() => setIsLiked(!isLiked)}
                aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-price">PHP {currentPrice}</div>
            </div>

            <div className="reviews-section">
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <span>20 reviews</span>
            </div>

            <hr className="section-divider" />
            <h3 className="section-header">Description</h3>
            <p className="product-description">{product.description}</p>

            {/* Size Options */}
            {product.sizes && (
              <div className="size-section">
                <h3>Size</h3>
                <div className="size-options">
                  {Object.entries(product.sizes).map(([sizeKey, sizeData]) => (
                    <button
                      key={sizeKey}
                      className={`size-option ${selectedSize === sizeKey ? 'selected' : ''}`}
                      onClick={() => handleSizeSelect(sizeKey)}
                    >
                      {sizeData.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <hr className="section-divider" />
            <div className="quantity-section">
              <h3>QTY:</h3>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                Add to Cart
              </button>
              <div className="action-icons">
                <button className="action-icon" title="Add to Wishlist">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
                <button className="action-icon" title="Share">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="product-details">
              <div className="detail-section">
                <h3>Ingredients</h3>
                <ul className="ingredients-list">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3>Nutrition Information</h3>
                <div className="nutrition-grid">
                  {Object.entries(product.nutrition).map(([key, value]) => (
                    <div key={key} className="nutrition-item">
                      <span className="nutrition-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      <span className="nutrition-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
