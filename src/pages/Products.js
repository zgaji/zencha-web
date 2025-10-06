import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    // Drinks
    {
      name: "Dokuji Matcha Latte Ice",
      price: "210",
      description: "Premium ceremonial grade matcha with creamy milk and ice. Perfect for hot days.",
      category: "drinks",
      image: null
    },
    {
      name: "Strawberry Matcha Latte Ice",
      price: "230",
      description: "Sweet strawberry flavor blended with authentic matcha for a refreshing treat.",
      category: "drinks",
      image: null
    },
    {
      name: "Classic Matcha Tea",
      price: "150",
      description: "Pure matcha tea prepared the traditional way. No milk, no sugar, just pure matcha.",
      category: "drinks",
      image: null
    },
    {
      name: "Matcha Frappé",
      price: "200",
      description: "Blended matcha with ice for a smooth, creamy texture.",
      category: "drinks",
      image: null
    },
    {
      name: "Iced Matcha Lemonade",
      price: "180",
      description: "Refreshing combination of matcha and fresh lemonade.",
      category: "drinks",
      image: null
    },
    {
      name: "Hot Matcha Latte",
      price: "190",
      description: "Warm and comforting matcha latte perfect for cool weather.",
      category: "drinks",
      image: null
    },
    
    // Matcha Powder Tins
    {
      name: "Ceremonial Grade Matcha (30g)",
      price: "450",
      description: "Premium ceremonial grade matcha powder in an elegant tin. Perfect for traditional preparation.",
      category: "powder",
      image: null
    },
    {
      name: "Premium Matcha (50g)",
      price: "650",
      description: "High-quality matcha powder suitable for both drinking and cooking.",
      category: "powder",
      image: null
    },
    {
      name: "Culinary Grade Matcha (100g)",
      price: "800",
      description: "Perfect for baking, smoothies, and cooking. Great value for regular use.",
      category: "powder",
      image: null
    },
    {
      name: "Matcha Starter Kit",
      price: "1200",
      description: "Complete kit with matcha powder, bamboo whisk, and traditional bowl.",
      category: "powder",
      image: null
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
              <h3>Quality Guarantee</h3>
              <p>
                All our matcha products are sourced from trusted suppliers and 
                tested for quality and authenticity.
              </p>
            </div>
            <div className="info-card">
              <h3>Fresh Delivery</h3>
              <p>
                We ensure all products are delivered fresh and properly packaged 
                to maintain their quality and flavor.
              </p>
            </div>
            <div className="info-card">
              <h3>Custom Orders</h3>
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
