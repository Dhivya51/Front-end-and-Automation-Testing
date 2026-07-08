import "./Checkout.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Checkout() {
  return (
    <>
      <Navbar />

      <div className="checkout-container">

        <h1>Checkout</h1>

        <form className="checkout-form">

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            required
          />

          <textarea
            placeholder="Delivery Address"
            rows="4"
            required
          ></textarea>

          <input
            type="text"
            placeholder="City"
            required
          />

          <input
            type="text"
            placeholder="State"
            required
          />

          <input
            type="text"
            placeholder="PIN Code"
            required
          />

          <select required>
            <option value="">Select Payment Method</option>
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
          </select>

          <button type="submit">
            Place Order
          </button>

        </form>

      </div>

      <Footer />
    </>
  );
}

export default Checkout;