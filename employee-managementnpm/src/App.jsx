import { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
 
  const [employees, setEmployees] = useState([
  {
    id: 1,
    name: "Rahul Sharma",
    department: "Information Technology",
    designation: "Software Engineer",
    salary: 55000,
  },
  {
    id: 2,
    name: "Priya Nair",
    department: "Human Resources",
    designation: "HR Manager",
    salary: 65000,
  },
  {
    id: 3,
    name: "Arjun Kumar",
    department: "Finance",
    designation: "Accountant",
    salary: 48000,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    department: "Marketing",
    designation: "Marketing Executive",
    salary: 45000,
  },
  {
    id: 5,
    name: "Karthik Raj",
    department: "Sales",
    designation: "Sales Executive",
    salary: 40000,
  },
  {
  id: 16,
  name: "Priyanka Das",
  department: "Cyber Security",
  designation: "Security Analyst",
  salary: 82000,
},
{
  id: 17,
  name: "Ajay Singh",
  department: "Cloud Computing",
  designation: "Cloud Engineer",
  salary: 88000,
},
{
  id: 18,
  name: "Shalini Ravi",
  department: "Data Science",
  designation: "Data Analyst",
  salary: 76000,
},
{
  id: 19,
  name: "Kiran Kumar",
  department: "Business Analysis",
  designation: "Business Analyst",
  salary: 69000,
},
{
  id: 20,
  name: "Sneha Kapoor",
  department: "Network",
  designation: "Network Engineer",
  salary: 67000,
},
{
  id: 21,
  name: "Aravind R",
  department: "Information Technology",
  designation: "Backend Developer",
  salary: 70000,
},
{
  id: 22,
  name: "Pooja Sharma",
  department: "Information Technology",
  designation: "Frontend Developer",
  salary: 66000,
},
{
  id: 23,
  name: "Manoj Kumar",
  department: "Testing",
  designation: "Automation Tester",
  salary: 64000,
},
{
  id: 24,
  name: "Lakshmi Priya",
  department: "Product Management",
  designation: "Product Manager",
  salary: 95000,
},
{
  id: 25,
  name: "Gokul Krishna",
  department: "Research & Development",
  designation: "Research Engineer",
  salary: 85000,
},
]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [search, setSearch] = useState("");

  // Add Employee
  const addEmployee = (employee) => {
    employee.id = Date.now();
    setEmployees([...employees, employee]);
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // Edit Employee
  const editEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  // Update Employee
  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setEditingEmployee(null);
  };

  // Search Employee
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <input
        type="text"
        className="search"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <EmployeeForm
        addEmployee={addEmployee}
        editingEmployee={editingEmployee}
        updateEmployee={updateEmployee}
      />

      <EmployeeList
        employees={filteredEmployees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
      />
    </div>
  );
}

export default App;