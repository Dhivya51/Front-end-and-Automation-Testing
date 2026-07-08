import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-container">

      <h1>LUXORA Admin Dashboard</h1>

      <div className="dashboard-grid">

        <div className="card">
          <h2>120</h2>
          <p>Total Products</p>
        </div>

        <div className="card">
          <h2>48</h2>
          <p>Total Orders</p>
        </div>

        <div className="card">
          <h2>25</h2>
          <p>Customers</p>
        </div>

        <div className="card">
          <h2>18</h2>
          <p>Wishlist Items</p>
        </div>

        <div className="card">
          <h2>₹45,890</h2>
          <p>Total Revenue</p>
        </div>

        <div className="card">
          <button>Add Product</button>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;