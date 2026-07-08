import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, closeMenu }) {
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>

      <button className="close-btn" onClick={closeMenu}>
        ✖
      </button>

      <h2>Menu</h2>

      <h3>Trending</h3>

<Link to="/best-sellers">
Top Selling Products
</Link>

<h3>Shop by Category</h3>

<Link to="/candles">
Candles
</Link>

<Link to="/diffusers">
Diffusers
</Link>

<Link to="/essential-oils">
Essential Oils
</Link>

<Link to="/room-sprays">
Room Sprays
</Link>

<Link to="/gift-sets">
Gift Sets
</Link>

<h3>Help & Settings</h3>

<Link to="/account">
Your Account
</Link>

<Link to="/customer-service">
Customer Service
</Link>

<Link to="/login">
Sign In
</Link>

    </div>
  );
}

export default Sidebar;