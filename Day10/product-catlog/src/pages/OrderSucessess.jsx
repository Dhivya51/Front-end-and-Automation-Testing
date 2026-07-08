import "./OrderSuccess.css";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="success-container">
      <h1>🎉 Order Placed Successfully!</h1>

      <p>Thank you for shopping with LUXORA.</p>

      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default OrderSuccess;