import "./Navbar.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button
  className="menu-btn"
  onClick={() => setIsOpen(true)}
>
  ☰ Menu
</button>

<Sidebar
  isOpen={isOpen}
  closeMenu={() => setIsOpen(false)}
/>

      <div className="logo">
        ✨ LUXORA
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/candles">Candles</Link></li>
        <li><Link to="/diffusers">Diffusers</Link></li>
        <li><Link to="/essential-oils">Essential Oils</Link></li>
        <li><Link to="/room-sprays">Room Sprays</Link></li>
      </ul>

      <div className="nav-icons">

        <Link to="/wishlist" className="icon">
          <FaHeart />
          <span>{wishlist.length}</span>
        </Link>

        <Link to="/cart" className="icon">
          <FaShoppingCart />
          <span>{cart.length}</span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;