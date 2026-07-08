import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./ProductDetails.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);

const { addToWishlist } = useContext(WishlistContext);

  const { state } = useLocation();

  const product = state?.product;

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="details-container">

        <img
          src={product.image}
          alt={product.name}
          className="details-image"
        />

        <div className="details-content">

          <h1>{product.name}</h1>

          <h2>{product.price}</h2>

          <p>{product.rating}</p>

          <button
  className="cart-btn"
  onClick={() => addToCart(product)}
>
  🛒 Add to Cart
</button>
<button
  className="wish-btn"
  onClick={() => addToWishlist(product)}
>
  ❤️ Add to Wishlist
</button>

          <br /><br />

          <Link to="/">
            ← Back
          </Link>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;