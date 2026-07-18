import { useEffect, useState } from "react";
import axios from "axios";
import "./MyProfile.css";

function MyProfile() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/employees/1")
      .then((res) => {
        console.log("Employee:", res.data);
        setEmployee(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (employee === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
  src={employee.image}
  alt={employee.name}
/>

        <h1>{employee.name}</h1>

        <p>{employee.position}</p>

        <hr />

        <div className="profile-details">
          <p><b>Employee ID:</b> {employee.id}</p>
          <p><b>Department:</b> {employee.department}</p>
          <p><b>Email:</b> {employee.email}</p>
          <p><b>Phone:</b> {employee.phone}</p>
          <p><b>Date of Joining:</b> {employee.doj}</p>
          <p><b>Salary:</b> ₹{employee.salary}</p>
          <p><b>Manager:</b> {employee.manager}</p>
          <p><b>Address:</b> {employee.address}</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;