import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="welcome-box">
        <h1>🌿 Welcome to LUXORA</h1>

        <h2>Luxury Home Fragrance Collection</h2>

        <p>
          Elevate your home with premium scented candles,
          reed diffusers, essential oils, and elegant gift sets.
        </p>

        <button className="shop-btn">
          Shop Now
        </button>
      </div>

      <div className="offers">

        <div className="offer-card">
          <h3>🕯️ 20% OFF</h3>
          <p>Luxury Candles</p>
        </div>

        <div className="offer-card">
          <h3>🌿 Buy 2 Get 1</h3>
          <p>Reed Diffusers</p>
        </div>

        <div className="offer-card">
          <h3>💧 ₹300 OFF</h3>
          <p>Essential Oils</p>
        </div>

        <div className="offer-card">
          <h3>🎁 Free Delivery</h3>
          <p>Gift Sets</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;