import "./Categories.css";
import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  return (
    <section className="categories">

      <h2 className="category-title">Shop by Category</h2>

      <div className="category-container">

        <Link to="/candles" className="category-link">
  <div className="category-card">
    <div className="icon">🕯️</div>
    <h3>Luxury Candles</h3>
    <p>20 Premium Products</p>
  </div>
</Link>
        <Link to="/diffusers" className="category-link">
  <div className="category-card">
    <div className="icon">🌿</div>
    <h3>Reed Diffusers</h3>
    <p>20 Premium Products</p>
  </div>
</Link>

       <Link to="/essential-oils" className="category-link">
  <div className="category-card">
    <div className="icon">💧</div>
    <h3>Essential Oils</h3>
    <p>20 Premium Products</p>
  </div>
</Link>

        <Link to="/room-sprays" className="category-link">
  <div className="category-card">
    <div className="icon">🌸</div>
    <h3>Room Sprays</h3>
    <p>20 Premium Products</p>
  </div>
</Link>

       <Link to="/wax-melts" className="category-link">
  <div className="category-card">
    <div className="icon">🧊</div>
    <h3>Wax Melts</h3>
    <p>20 Premium Products</p>
  </div>
</Link>

        <Link to="/gift-sets" className="category-link">
  <div className="category-card">
    <div className="icon">🎁</div>
    <h3>Gift Sets</h3>
    <p>20 Premium Products</p>
  </div>
</Link>

      </div>

    </section>
  );
}

export default Categories;