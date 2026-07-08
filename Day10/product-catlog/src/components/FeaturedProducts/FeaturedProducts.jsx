import "./FeaturedProducts.css";

function FeaturedProducts() {
  return (
    <section className="featured">

      <h2>⭐ Best Sellers</h2>

      <div className="featured-grid">

        <div className="featured-card">
          <h3>Lavender Bliss Candle</h3>
          <p>₹899</p>
        </div>

        <div className="featured-card">
          <h3>Vanilla Reed Diffuser</h3>
          <p>₹1299</p>
        </div>

        <div className="featured-card">
          <h3>Rose Room Spray</h3>
          <p>₹699</p>
        </div>

        <div className="featured-card">
          <h3>Luxury Gift Set</h3>
          <p>₹2499</p>
        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;