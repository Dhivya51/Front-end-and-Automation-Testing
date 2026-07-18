import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployees } from "../services/api";
import "./EmployeeProfile.css";

function EmployeeProfile() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const loadEmployee = async () => {
      const response = await getEmployees();
      const emp = response.data.find((e) => e.id == id);
      setEmployee(emp);
    };

    loadEmployee();
  }, [id]);

  if (!employee) {
    return <h2 style={{ padding: "30px" }}>Loading...</h2>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">

        <img
  src={employee.image}
  alt={employee.name}
  className="profile-image"
/>
        <h2>{employee.name}</h2>
        <p>{employee.position}</p>

        <div className="profile-details">
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Date of Joining:</strong> {employee.doj}</p>
          <p><strong>Status:</strong> {employee.status}</p>
        </div>

        <Link to="/employees" className="back-btn">
          ← Back to Employees
        </Link>

      </div>
    </div>
  );
}

export default EmployeeProfile;