import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      navigate("/welcome");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">
        <div className="left-content">
          <h1>Employeex Pro</h1>

          <p>
            Smart Employee Management System for HR, Payroll,
            Attendance and Reports.
          </p>

          <ul>
            <li>✔ Employee Management</li>
            <li>✔ Attendance Tracking</li>
            <li>✔ Payroll Management</li>
            <li>✔ Reports & Analytics</li>
          </ul>
        </div>
      </div>

      <div className="login-right">

        <form className="login-card" onSubmit={login}>

          <h2>Welcome Back</h2>

          <p>Sign in to continue</p>

          <div className="input-group">
            <label>Username</label>

            <input
             id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
            id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button id="loginBtn" className="login-btn">
            Login
          </button>

          <div  className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;