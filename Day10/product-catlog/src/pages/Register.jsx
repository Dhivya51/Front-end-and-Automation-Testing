import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-page">

      <div className="register-card">

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button>
          Register
        </button>

        <p>

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;