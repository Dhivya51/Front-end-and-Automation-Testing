import React from "react";
import "./Home.css";
import candle1 from "./images/candle1.jpg";
import diffuser1 from "./images/diffuser1.jpg";
import oil1 from "./images/oil1.jpg";
import giftset1 from "./images/giftset1.jpg"

function Home() {
  const categories = [
    { icon: "🕯️", name: "Luxury Candles", products: "20 Premium Products" },
    { icon: "🌿", name: "Reed Diffusers", products: "20 Premium Products" },
    { icon: "💧", name: "Essential Oils", products: "20 Premium Products" },
    { icon: "🌸", name: "Room Sprays", products: "20 Premium Products" },
    { icon: "🧊", name: "Wax Melts", products: "20 Premium Products" },
    { icon: "🎁", name: "Gift Sets", products: "20 Premium Products" },
  ];

  const products = [
  {
    image: candle1,
    name: "Lavender Bliss Candle",
    price: "₹899",
  },
  {
    image: diffuser1,
    name: "Vanilla Reed Diffuser",
    price: "₹1299",
  },
  {
    image: oil1,
    name: "Rose Room Spray",
    price: "₹699",
  },
  {
    image: giftset1,
    name: "Luxury Gift Set",
    price: "₹2499",
  },
];
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">LUXORA</h2>

        <ul>
          <li>Home</li>
          <li>Candles</li>
          <li>Diffusers</li>
          <li>Essential Oils</li>
          <li>Room Sprays</li>
        </ul>

        <div className="icons">
          🛒 0 &nbsp;&nbsp; ❤ 0
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>🌿 Welcome to LUXORA</h1>
        <h2>Luxury Home Fragrance Collection</h2>

        <p>
          Elevate your home with premium scented candles, reed diffusers,
          essential oils and elegant gift sets.
        </p>

        <button>Shop Now</button>
      </section>

      {/* Offers */}
      <section className="offers">

        <div className="offer">
          <h3>🕯️ 20% OFF</h3>
          <p>Luxury Candles</p>
        </div>

        <div className="offer">
          <h3>🌿 Buy 2 Get 1</h3>
          <p>Reed Diffusers</p>
        </div>

        <div className="offer">
          <h3>💧 ₹300 OFF</h3>
          <p>Essential Oils</p>
        </div>

        <div className="offer">
          <h3>🎁 Free Delivery</h3>
          <p>Gift Sets</p>
        </div>

      </section>

      {/* Categories */}
      <section className="categories">

        <h2>Shop by Category</h2>

        <div className="category-grid">

          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <h1>{item.icon}</h1>
              <h3>{item.name}</h3>
              <p>{item.products}</p>
            </div>
          ))}

        </div>

      </section>

      {/* Best Sellers */}

      <section className="products">

        <h2>⭐ Best Sellers</h2>

        <div className="product-grid">

          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="image">
  <img
    src={item.image}
    alt={item.name}
    className="product-image"
  />
</div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="footer">

        <h2>LUXORA</h2>

        <p>Luxury Home Fragrance</p>

        <p>© 2026 LUXORA. All Rights Reserved.</p>

      </footer>

    </div>
  );
}

export default Home;