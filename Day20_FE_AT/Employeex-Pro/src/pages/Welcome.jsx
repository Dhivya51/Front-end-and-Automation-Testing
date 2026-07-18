import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaChartLine,
  FaBullhorn,
  FaBirthdayCake,
  FaArrowRight,
} from "react-icons/fa";

import "./Welcome.css";


function Welcome() {
  const navigate = useNavigate();
  const logout = () => {
  navigate("/");
};

  const today = new Date().toLocaleDateString();
  

  return (
    <div className="welcome-container">
      <div className="logout-container">
  <button
    id="logoutBtn"
    className="logout-btn"
    onClick={logout}
  >
    <FaSignOutAlt /> Logout
  </button>
</div>

      <div className="hero">

        <div className="hero-text">
          <h1>Welcome to Employeex Pro </h1>

          <p>
            Smart Employee Management System for managing employees,
            attendance, payroll and reports efficiently.
          </p>

          <button onClick={() => navigate("/dashboard")}>
            Go to Dashboard
            <FaArrowRight />
          </button>
        </div>
        
        <div className="hero-card">
          <h2>Today's Information</h2>

          <p><strong>Date :</strong> {today}</p>

          <p><strong>Role :</strong> Administrator</p>

          <p><strong>Status :</strong> Online 🟢</p>
        </div>

      </div>

      <div className="stats">

       <div className="card" onClick={() => navigate("/employees")}>
  <FaUsers />
  <h2>125</h2>
  <p>Employees</p>
</div>
        <div className="card" onClick={() => navigate("/departments")}>
  <FaBuilding />
  <h2>10</h2>
  <p>Departments</p>
</div>
        <div className="card" onClick={() => navigate("/payroll")}>
  <FaMoneyBillWave />
  <h2>₹82.5L</h2>
  <p>Payroll</p>
</div>

        <div className="card" onClick={() => navigate("/attendance")}>
  <FaChartLine />
  <h2>92%</h2>
  <p>Attendance</p>
</div>
      </div>

      <div className="bottom-section">

        <div className="announcement">

          <h2><FaBullhorn /> Company Announcement</h2>

          <p>
            📢 Quarterly performance review meeting will be conducted on
            Friday at 10:00 AM.
          </p>

        </div>

        <div className="birthday">

          <h2><FaBirthdayCake /> Birthday Wishes</h2>

          <p>🎉 Happy Birthday Rahul!</p>

          <p>Have a wonderful year ahead.</p>

        </div>

      </div>

    </div>
  );
}

export default Welcome;
