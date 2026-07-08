import "./Account.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Account() {
  return (
    <>
      <Navbar />

      <div className="account-page">

        <div className="profile-card">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
          />

          <h2>Welcome, Dhivya</h2>
          <p>dhivya@gmail.com</p>

        </div>

        <div className="account-options">

          <div className="option-card">
            <h3>📦 My Orders</h3>
            <p>View all your recent orders.</p>
          </div>

          <div className="option-card">
            <h3>❤️ Wishlist</h3>
            <p>Products saved for later.</p>
          </div>

          <div className="option-card">
            <h3>📍 Saved Address</h3>
            <p>Manage your delivery address.</p>
          </div>

          <div className="option-card">
            <h3>💳 Payment Methods</h3>
            <p>Manage cards and payment options.</p>
          </div>

          <div className="option-card">
            <h3>🔒 Change Password</h3>
            <p>Update your password securely.</p>
          </div>

          <div className="option-card">
            <h3>🚪 Logout</h3>
            <p>Sign out from your account.</p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Account;