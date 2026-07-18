import { useState } from "react";
import "./Employees.css";
import Employees from "./pages/Employees";


function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "John David",
      department: "IT",
      position: "Frontend Developer",
      doj: "12-01-2025",
      email: "john@example.com",
      phone: "9876543210",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Priya Sharma",
      department: "HR",
      position: "HR Manager",
      doj: "05-03-2024",
      email: "priya@example.com",
      phone: "9876543211",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "Rahul Kumar",
      department: "Finance",
      position: "Accountant",
      doj: "15-07-2023",
      email: "rahul@example.com",
      phone: "9876543212",
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employees-page">
      <div className="employee-header">
        <h1>Employee Management</h1>

        <div className="header-actions">
          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="add-btn">
            + Add Employee
          </button>
        </div>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Date of Joining</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>{employee.doj}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
                <span
                  className={
                    employee.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {employee.status}
                </span>
              </td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;