function EmployeeList({
    employees,onDelete,onEdit
}){
    return(
        <div>
        <h2>Employee Lists</h2>
        <table border ="1" cellPadding="10">
        <thead>
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Date of Joining</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((employee) => (
                <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.dateofjoining}</td>
                    <td>
                        <button onClick={() => onEdit(emp)}>Edit</button>
                        <button onClick={() => onDelete(emp.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
        </div>
    );
}
export default EmployeeList;