import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1>🛒 Shopping Cart</h1>

        {cart.length === 0 ? (
          <h2>Your cart is empty.</h2>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h2>{item.name}</h2>
                  <p>₹ {item.price}</p>

                  <div className="qty-buttons">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="total-section">
              <h2>Total : ₹ {total}</h2>

              <Link to="/checkout">
  <button className="checkout-btn">
    Proceed to Checkout
  </button>
</Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;