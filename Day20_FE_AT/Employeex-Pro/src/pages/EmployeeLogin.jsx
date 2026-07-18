import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./EmployeeLogin.css";

function EmployeeLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3002/users");

      const users = response.data;

console.log("Users:", users);
console.log("Entered Username:", username);
console.log("Entered Password:", password);
     const user = users.find((u) => {
  console.log("Checking:", u.username, u.password);

  return (
    u.username.trim() === username.trim() &&
    u.password.trim() === password.trim()
  );
});
      if (!user) {
        alert("Invalid Username or Password");
        return;
      }

     if (user.role === "admin") {

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", "admin");

  alert("Welcome Admin");
  navigate("/dashboard");

} else if (user.role === "employee") {

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", "employee");

  alert("Welcome Employee");
  navigate("/employee-dashboard");

}

    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="employee-login-page">
      <div className="employee-login-card">
        <h1>Employee Login</h1>

        <p>Welcome to Employeex Pro</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Employee Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Employee Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeLogin;