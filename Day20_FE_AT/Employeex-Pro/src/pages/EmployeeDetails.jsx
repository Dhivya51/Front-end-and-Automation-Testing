import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./EmployeeDetails.css";

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/employees/${id}`)
      .then((res) => setEmployee(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!employee) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="employee-details">
      <div className="details-card">
        <img
          src={employee.image}
          alt={employee.name}
          className="profile-image"
        />

        <h2>{employee.name}</h2>

        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Date of Joining:</strong> {employee.doj}</p>
        <p><strong>Status:</strong> {employee.status}</p>

        <Link to="/employees">
          <button className="back-btn">← Back</button>
        </Link>
      </div>
    </div>
  );
}

export default EmployeeDetails;