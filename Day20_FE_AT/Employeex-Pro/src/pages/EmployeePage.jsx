import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { useState, useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import "./EmployeePage.css";
import {
  getEmployees,
  addEmployeeApi,
  updateEmployeeApi,
  deleteEmployeeApi,
} from "../services/api";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
function EmployeePage() {
  const [employees, setEmployees] = useState([]);
const [departmentFilter, setDepartmentFilter] = useState("All");

  

  const [showForm, setShowForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const loadEmployees = async () => {
  try {
    const response = await getEmployees();
    setEmployees(response.data);
  } catch (error) {
    console.error("Error loading employees:", error);
  }
};

useEffect(() => {
  loadEmployees();
}, []);

  
 



const addEmployee = async (employee) => {
  try {
    await addEmployeeApi(employee);
    toast.success("Employee added successfully!");
    loadEmployees();
    setShowForm(false);
  } catch (error) {
    console.error("Error adding employee:", error);
  }
};

  const updateEmployee = async (updatedEmployee) => {
  try {
    await updateEmployeeApi(updatedEmployee.id, updatedEmployee);
    toast.success("Employee updated successfully!");
    loadEmployees();
    setEditEmployee(null);
    setShowForm(false);
  } catch (error) {
    console.error(error);
  }
};

  const deleteEmployee = async (id) => {
  try {
    await deleteEmployeeApi(id);
    toast.success("Employee deleted successfully!");
    loadEmployees();
  } catch (error) {
    console.error(error);
  }
};
const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(employees);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Employees"
  );

  XLSX.writeFile(workbook, "Employeex_Employees.xlsx");
};
const exportToPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Employeex Pro - Employee Report", 14, 20);

  autoTable(doc, {
    startY: 30,
    head: [[
      "Name",
      "Department",
      "Position",
      "Email",
      "Phone",
      "Status"
    ]],
    body: employees.map((emp) => [
      emp.name,
      emp.department,
      emp.position,
      emp.email,
      emp.phone,
      emp.status,
    ]),
  });

  doc.save("Employeex_Employees.pdf");
};
const filteredEmployees = employees.filter((employee) => {

  const matchName =
    employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchDepartment =
    departmentFilter === "All" ||
    employee.department === departmentFilter;

  return matchName && matchDepartment;
});
  return (
    <div className="employee-page">
     <div className="employee-header">
  <h1>Employee Management</h1>

  <div className="header-buttons">
   <button
  id="exportExcelBtn"
  className="export-btn primary-btn"
  onClick={exportToExcel}
>
      📊 Export Excel
    </button>
 <button
    id="exportPdfBtn"
    className="pdf-btn primary-btn" onClick={exportToPDF}>
  📄 Export PDF
</button>
    <button
  id="addEmployeeBtn"
  className="add-btn primary-btn"
  onClick={() => {
    setEditEmployee(null);
    setShowForm(true);
  }}
>
  + Add Employee
</button>
  </div>
</div>

      
      <div className="search-container">

  <input
  id="searchEmployee"
  type="text"
  placeholder="Search Employee..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
  <select
    value={departmentFilter}
    onChange={(e) =>
      setDepartmentFilter(e.target.value)
    }
  >
    <option>All</option>
    <option>IT</option>
    <option>HR</option>
    <option>Finance</option>
    <option>Marketing</option>
  </select>

</div>

      <div className="table-container">
  <table className="employee-table">

        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Joining</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>
  <img
    src={emp.image}
    alt={emp.name}
    width="50"
    height="50"
    style={{
      borderRadius: "50%",
      objectFit: "cover",
    }}
  />
</td>
             <td>
  <Link
    to={`/employee/${emp.id}`}
    style={{
      textDecoration: "none",
      color: "#2563eb",
      fontWeight: "bold"
    }}
  >
    {emp.name}
  </Link>
</td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.doj}</td>
              <td>{emp.status}</td>

              <td>
  <button
   
    className="edit-btn"
    onClick={() => {
      setEditEmployee(emp);
      setShowForm(true);
    }}
  >
    Edit
  </button>

 <button
  id="deleteEmployeeBtn"
  className="delete-btn"
  onClick={() => deleteEmployee(emp.id)}
>
  Delete
</button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {showForm && (
        <EmployeeForm
          onClose={() => setShowForm(false)}
          onSave={addEmployee}
          editEmployee={editEmployee}
          updateEmployee={updateEmployee}
        />
      )}
    </div>
  );
}

export default EmployeePage;