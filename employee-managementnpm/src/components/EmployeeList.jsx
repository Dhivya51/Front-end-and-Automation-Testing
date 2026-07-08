import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, deleteEmployee, editEmployee }) {
  if (employees.length === 0) {
    return <h3>No Employees Found</h3>;
  }

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
          editEmployee={editEmployee}
        />
      ))}
    </div>
  );
}

export default EmployeeList;