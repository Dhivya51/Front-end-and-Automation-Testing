import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", "admin");

  alert("Admin Login Successful");
  navigate("/dashboard");

}
else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">

        <h1>Admin Login</h1>

        <p>Employeex Pro Administration Portal</p>

        <form onSubmit={handleLogin}>

          <input
          id="username"
            type="text"
            name="username"
            placeholder="Admin Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
          id="password"
            type="password"
            name="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
    id="loginBtn"
    type="submit"
>
    Login
</button>
        </form>

      </div>
    </div>
  );
}

export default AdminLogin;