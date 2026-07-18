import Navbar from "../components/Navbar/Navbar";
import DashboardCards from "../components/DashboardCards/DashboardCards";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Charts from "../components/Charts/Charts";
import EmployeeChart from "../components/EmployeeChart/EmployeeChart";


function Dashboard() {
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("role");
  navigate("/admin-login");
};

  const adminName = "Dhivya";
  const [employees, setEmployees] = useState([]);
const [departments, setDepartments] = useState([]);
const [leaves, setLeaves] = useState([]);
const [tasks, setTasks] = useState([]);
const [attendance, setAttendance] = useState([]);
useEffect(() => {
  loadDashboard();
}, []);

const loadDashboard = async () => {
  try {
    const [
      employeeRes,
      departmentRes,
      leaveRes,
      taskRes,
      attendanceRes,
    ] = await Promise.all([
      axios.get("http://localhost:3002/employees"),
      axios.get("http://localhost:3002/departments"),
      axios.get("http://localhost:3002/leaves"),
      axios.get("http://localhost:3002/tasks"),
      axios.get("http://localhost:3002/attendance"),
    ]);

    setEmployees(employeeRes.data);
    setDepartments(departmentRes.data);
    setLeaves(leaveRes.data);
    setTasks(taskRes.data);
    setAttendance(attendanceRes.data);
  } catch (error) {
    console.error("Dashboard Load Error:", error);
  }
};

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Employeex Pro</h2>

        <nav>
          <ul>
            <li><Link to="/employees">👥 Employees</Link></li>
            <li><Link to="/departments">🏢 Departments</Link></li>
            <li>
  <Link to="/attendance-management">
    📅 Attendance Management
  </Link>
</li>
            <li>
  <Link to="/payroll-management">
    💰 Payroll Management
  </Link>
</li>
            <li><Link to="/reports">📊 Reports</Link></li>
            <li> <Link id="leaveManagement" to="/leave-management">📝 Leave Management</Link></li>
            <li><Link to="/settings">⚙ Settings</Link></li>
            <li><Link to="/task-management">
📋 Task Management
</Link></li>
          </ul>
          <button
  id="logoutBtn"
  className="logout-btn"
  onClick={handleLogout}
>
  🚪 Logout
</button>
        </nav>
      </aside>

      <div className="main-content">
        <Navbar />

        <div className="dashboard-content">

  <div className="welcome-banner">

    <div>

      <h1>Welcome Back, {adminName} 👋</h1>

      <p>
        Manage your employees efficiently with Employeex Pro.
      </p>

    </div>

    <button className="welcome-btn">
      View Reports
    </button>

  </div>

  <DashboardCards
  employees={employees}
  departments={departments}
  tasks={tasks}
  attendance={attendance}
/>
<EmployeeChart />

<Charts /> 

 

</div>
      </div>
    </div>
  );
}

export default Dashboard;