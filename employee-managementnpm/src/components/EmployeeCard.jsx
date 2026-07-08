function EmployeeCard({ employee, deleteEmployee, editEmployee }) {
  return (
    <div className="employee-card">
      <h2>{employee.name}</h2>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Designation:</strong> {employee.designation}
      </p>

      <p>
        <strong>Salary:</strong> ₹{employee.salary}
      </p>

      <div className="button-group">
        <button
          className="edit-btn"
          onClick={() => editEmployee(employee)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteEmployee(employee.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;