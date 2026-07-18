import { useState, useEffect } from "react";
import "./EmployeeForm.css";

function EmployeeForm({ onClose, onSave, editEmployee, updateEmployee }) {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
    position: "",
    email: "",
    phone: "",
    doj: "",
    status: "Active",
  });
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editEmployee) {
      setEmployee(editEmployee);
    }
  }, [editEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editEmployee) {
      updateEmployee(employee);
      alert("Employee Updated Successfully!");
    } else {
      onSave(employee);
      alert("Employee Added Successfully!");
    }

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="employee-modal">

        <h2>
          {editEmployee ? "Edit Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
              id="empName"
            type="text"
            name="name"
            placeholder="Employee Name"
            value={employee.name}
            onChange={handleChange}
            required
          />

          <select
              id="empDepartment"

            name="department"
            value={employee.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>

          <input
           id="empPosition"
            type="text"
            name="position"
            placeholder="Position"
            value={employee.position}
            onChange={handleChange}
            required
          />

          <input
           id="empEmail"
            type="email"
            name="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
            required
          />

          <input
          id="empPhone"
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={employee.phone}
            onChange={handleChange}
            required
          />
          <div className="form-group">
  <label>Profile Image URL</label>


  <input
  id="empImage"
  type="text"
  name="image"
  placeholder="Paste Image URL"
  value={employee.image}
  onChange={(e) =>
    setEmployee({
      ...employee,
      image: e.target.value,
    })
  }
/>
</div>

          <input
           id="empDOJ"
            type="date"
            name="doj"
            value={employee.doj}
            onChange={handleChange}
            required
          />

          <select
          id="empStatus"
            name="status"
            value={employee.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div className="buttons">
            <button 
             id="saveEmployeeBtn"
            type="submit">
              {editEmployee ? "Update" : "Save"}
            </button>

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default EmployeeForm;