import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

      const products = [
        // Drinks
        {
          id: "signature-matcha-latte",
          name: "Signature Matcha Latte",
          price: 210,
          description: "Premium ceremonial grade matcha with creamy milk and ice.",
          category: "drinks",
          image: "/assets/images/products/matcha-latter.jpg",
          sizes: {
            'Small': { label: 'Small', price: 168 },
            'Regular': { label: 'Regular', price: 210 },
            'Large': { label: 'Large', price: 273 }
          }
        },
        {
          id: "ichigo-matcha-latte",
          name: "Ichigo Matcha Latte",
          price: 230,
          description: "Sweet strawberry blended with zencha's strawberry matcha for a refreshing treat.",
          category: "drinks",
          image: "/assets/images/products/stawberry-matcha.jpg",
          sizes: {
            'Small': { label: 'Small', price: 184 },
            'Regular': { label: 'Regular', price: 230 },
            'Large': { label: 'Large', price: 299 }
          }
        },
        {
          id: "kinako-matcha-latte",
          name: "Kinako Matcha Latte",
          price: 230,
          description: "Stone ground matcha with kinako powder and oat milk.",
          category: "drinks",
          image: "/assets/images/products/matcha-latter.jpg",
          sizes: {
            'Small': { label: 'Small', price: 184 },
            'Regular': { label: 'Regular', price: 230 },
            'Large': { label: 'Large', price: 299 }
          }
        },
        {
          id: "yuzu-matcha-cooler",
          name: "Yuzu Matcha Cooler",
          price: 200,
          description: "Sparkling matcha with citrusy yuzu.",
          category: "drinks",
          image: "/assets/images/products/cc-matcha.jpg",
          sizes: {
            'Small': { label: 'Small', price: 160 },
            'Regular': { label: 'Regular', price: 200 },
            'Large': { label: 'Large', price: 260 }
          }
        },
        {
          id: "iced-vanilla-matcha",
          name: "Iced Vanilla Matcha",
          price: 200,
          description: "Cold-brewed matcha with a hint of vanilla and light sweetness.",
          category: "drinks",
          image: "/assets/images/products/matcha-latter.jpg",
          sizes: {
            'Small': { label: 'Small', price: 160 },
            'Regular': { label: 'Regular', price: 200 },
            'Large': { label: 'Large', price: 260 }
          }
        },
        {
          id: "coconut-cloud-matcha",
          name: "Coconut Cloud Matcha",
          price: 230,
          description: "Matcha cream top with refreshing coconut water.",
          category: "drinks",
          image: "/assets/images/products/cc-matcha.jpg",
          sizes: {
            'Small': { label: 'Small', price: 184 },
            'Regular': { label: 'Regular', price: 230 },
            'Large': { label: 'Large', price: 299 }
          }
        },
        
        // Matcha Powder Tins
        {
          id: "ceremonial-grade-matcha-30g",
          name: "Ceremonial Grade Matcha",
          price: 450,
          description: "Premium ceremonial grade matcha powder in an elegant tin. Perfect for traditional preparation.",
          category: "powder",
          image: "/assets/images/products/matcha-1.jpg",
          sizes: {
            '30g': { label: '30g', price: 270 },
            '50g': { label: '50g', price: 450 },
            '100g': { label: '100g', price: 810 }
          }
        },
        {
          id: "premium-matcha-50g",
          name: "Premium Matcha",
          price: 650,
          description: "High-quality matcha powder suitable for both drinking and cooking.",
          category: "powder",
          image: "/assets/images/products/matcha-2.jpg",
          sizes: {
            '30g': { label: '30g', price: 390 },
            '50g': { label: '50g', price: 650 },
            '100g': { label: '100g', price: 1170 }
          }
        },
        {
          id: "culinary-grade-matcha-100g",
          name: "Culinary Grade Matcha",
          price: 800,
          description: "Perfect for baking, smoothies, and cooking. Great value for regular use.",
          category: "powder",
          image: "/assets/images/products/matcha-3.jpg",
          sizes: {
            '30g': { label: '30g', price: 480 },
            '50g': { label: '50g', price: 800 },
            '100g': { label: '100g', price: 1440 }
          }
        },
        {
          id: "matcha-starter-kit",
          name: "Matcha Starter Kit",
          price: 1200,
          description: "Complete kit with matcha powder, bamboo whisk, and traditional bowl.",
          category: "kit",
          image: "/assets/images/products/matcha-starter-kit.jpg"
        }
      ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'powder', name: 'Matcha Powder' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="products">
      <div className="container">
        {/* Header */}
        <section className="products-header">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
            Discover our carefully curated selection of matcha drinks and premium powder
          </p>
        </section>

        {/* Category Filter */}
        <section className="category-filter">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-section">
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Product Info Section */}
        <section className="product-info">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <p>
                All our matcha products are sourced from trusted suppliers and 
                tested for quality and authenticity.
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <p>
                We ensure all products are delivered fresh and properly packaged 
                to maintain their quality and flavor.
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p>
                Need a specific quantity or have special requirements? 
                Contact us for custom orders and bulk pricing.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
