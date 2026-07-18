import { Link } from "react-router-dom";
import "./EmployeeDashboard.css";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const navigate = useNavigate();
  return (
    <div className="employee-dashboard">

      <div className="employee-sidebar">
        <h2>Employeex Pro</h2>

        <Link to="/employee-dashboard">🏠 Dashboard</Link>

        <Link to="/my-profile">👤 My Profile</Link>

        <Link to="/my-attendance">📅 My Attendance</Link>

        <Link to="/my-salary">💰 My Salary</Link>

        <Link to="/leave-request">📝 Leave Request</Link>

        <Link to="/daily-tasks">📋 Daily Tasks</Link>

        <Link to="/notifications">🔔 Notifications</Link>

        <Link to="/employee-settings">⚙️ Settings</Link>

        <Link to="/">🚪 Logout</Link>
      </div>

      <div className="employee-content">

        <h1>Welcome Employee 👋</h1>

        <p>
          Manage your profile, attendance, salary,
          leave requests, tasks and notifications.
        </p>

       <div className="dashboard-cards">

  <div className="card" onClick={() => navigate("/my-attendance")}>
  <h3>Attendance</h3>
 <h2>96%</h2>
  <p>View Attendance</p>
</div>

<div className="card" onClick={() => navigate("/daily-tasks")}>
  <h3>Pending Tasks</h3>
  <h2>5</h2>
  <p>View Tasks</p>
</div>

<div className="card" onClick={() => navigate("/leave-request")}>
  <h3>Leave Balance</h3>
 <h2>12 Days</h2> 
  <p>Apply Leave</p>
</div>

<div className="card" onClick={() => navigate("/my-salary")}>
  <h3>Salary</h3>
 <h2>₹45,000</h2>
  <p>View Salary</p>
</div>

</div>
      </div>

    </div>
  );
}

export default EmployeeDashboard;