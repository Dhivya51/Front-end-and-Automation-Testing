import { useState, useEffect } from "react";

function EmployeeForm({ addEmployee, editingEmployee, updateEmployee }) {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    designation: "",
    salary: "",
  });

  useEffect(() => {
    if (editingEmployee) {
      setEmployee(editingEmployee);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingEmployee) {
      updateEmployee(employee);
    } else {
      addEmployee(employee);
    }

    setEmployee({
      name: "",
      department: "",
      designation: "",
      salary: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />

      <input
        type="text"
        name="designation"
        placeholder="Designation"
        value={employee.designation}
        onChange={handleChange}
      />

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleChange}
      />

      <button type="submit">
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;