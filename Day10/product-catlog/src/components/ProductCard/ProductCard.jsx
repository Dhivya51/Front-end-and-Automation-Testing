import "./ProductCard.css";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="product-card">
<div className="product-image-container">

  <img
    src={product.image}
    alt={product.name}
    className="product-image"
  />

  <button
    className="wishlist-icon"
    onClick={() => addToWishlist(product)}
  >
    <FaHeart />
  </button>

</div>
      

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p className="rating">
        ⭐ {product.rating}
      </p>

      <h2 className="price">
        ₹ {product.price}
      </h2>
<div className="button-group">

  <button
    className="view-btn"
    onClick={() =>
      navigate("/product-details", {
        state: { product },
      })
    }
  >
    👁 View Details
  </button>

  <button
    className="cart-btn"
    onClick={() => addToCart(product)}
  >
    🛒 Add to Cart
  </button>

</div>
      


      </div>

  );
}

export default ProductCard;