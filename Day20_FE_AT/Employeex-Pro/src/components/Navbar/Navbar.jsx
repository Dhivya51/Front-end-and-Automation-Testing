import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Employeex Pro</h2>

      <div className="search-box">
        <FaSearch />
        <input
          type="text"
          placeholder="Search employees..."
        />
      </div>

      <div className="right-menu">

        <FaBell className="icon" />

        <div className="profile">
          <FaUserCircle className="profile-icon" />
          <span>Admin</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;