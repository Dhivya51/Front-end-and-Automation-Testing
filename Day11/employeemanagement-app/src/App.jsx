import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { getEmployees,addEmployee,updateEmployee,deleteEmployee } from "./services/employeeService";


function App(){

  const[employees,setEmployees]=useState([]);//Store the emp list
 //store selected emp
  const[editEmployee,setEditEmployee]=useState(null);
  //load the details of employee--GET
 
  const storedEmployee=()=>{
    getEmployees().then((response)=>{
      setEmployees(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });
  };

  useEffect(()=>{
    storedEmployee();
  },[]);

  const insertEmployee=(employee)=>{
    addEmployee(employee).then(()=>{storedEmployee();
  });
};
const editCurrentEmployee = (employee) => {
  updateEmployee(employee.id, employee)
    .then(() => {
      storedEmployee();
      setEditEmployee(null);
    });
};
const removeEmployee = (id) => {
    deleteEmployee(id).then(() => {
        storedEmployee();
    });
};

return(
<div>
  <h1>Employee Management</h1>

  <EmployeeForm
  addEmployee={insertEmployee}
  editEmployee={editEmployee}
  updateEmployee={editCurrentEmployee}
/>
  <EmployeeList
  employees={employees}
  onDelete={removeEmployee}
  onEdit={setEditEmployee}
/>
</div>

)



};
export default App;
