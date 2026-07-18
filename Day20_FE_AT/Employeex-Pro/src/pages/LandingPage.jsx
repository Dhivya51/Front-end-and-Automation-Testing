import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <h1>Employeex Pro</h1>

          <h2>Smart Employee Management System</h2>

          <p>
            Manage Employees, Attendance, Payroll, Departments,
            Reports and Leave Requests from one modern platform.
          </p>

          <div className="hero-buttons">
            <button
              className="admin-btn"
              onClick={() => navigate("/admin-login")}
            >
              Admin Login
            </button>

            <button
              className="employee-btn"
              onClick={() => navigate("/employee-login")}
            >
              Employee Login
            </button>
          </div>
        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>Our Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>👨‍💼 Employee Management</h3>
            <p>Add, Update and Manage Employees.</p>
          </div>

          <div className="feature-card">
            <h3>📅 Attendance</h3>
            <p>Track daily attendance easily.</p>
          </div>

          <div className="feature-card">
            <h3>💰 Payroll</h3>
            <p>Generate employee salary details.</p>
          </div>

          <div className="feature-card">
            <h3>📝 Leave Management</h3>
            <p>Employees can request leave online.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Reports</h3>
            <p>Visual reports and analytics.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure Access</h3>
            <p>Separate Admin and Employee Portal.</p>
          </div>

        </div>

      </section>

      {/* About */}

      <section className="about">

        <h2>About Employeex Pro</h2>

        <p>
          Employeex Pro is a modern Human Resource Management System
          designed to simplify employee management, payroll,
          attendance tracking and leave approval.
        </p>

      </section>

      {/* Footer */}

      <footer>
        © 2026 Employeex Pro | Employee Management System
      </footer>

    </div>
  );
}

export default LandingPage;