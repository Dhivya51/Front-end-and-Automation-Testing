import {useState,useEffect} from "react";


function EmployeeForm({
    addEmployee,editEmployee,updateEmployee
}){
    const [employee,setEmployee]=useState({
        name: "",
        department: "",
        dateofjoining: "",
    });

useEffect(() => {
    if (editEmployee) {
        setEmployee(editEmployee);
    }
}, [editEmployee]);
//handles the typing
const handleChange=(event)=>{
    setEmployee({
        ...employee, //existing will remain same
        [event.target.name]: event.target.value 
    });
};

const handleSubmit=(event)=>{
    event.preventDefault();
    if (editEmployee) {
        updateEmployee(employee);
    } else {
        addEmployee(employee);
    }
    setEmployee({
        name:"",
        department:"",
        dateofjoining:""
    });
};
return(
    <div>
        <h2>{editEmployee ? "Update Employee" : "Add Employee"}</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" placeholder="Enter your name"
                    value={employee.name}
                    onChange={handleChange}
                />
            </div>
            <br />
            <div>
                <label>Department:</label>
                <input
                    type="text"
                    name="department"
                    placeholder="Enter your department"
                    value={employee.department}
                    onChange={handleChange}
                />
            </div>
            <br />
            <div>
                <label>Date of Joining:</label>
                <input
                    type="date"
                    name="dateofjoining"
                    placeholder="Enter your date of joining"
                    value={employee.dateofjoining}
                    onChange={handleChange}
                />
            </div>
            <br />
            <button type="submit">{editEmployee ? "Update" : "Add"} Employee</button>
        </form>
    </div>

);
}
export default EmployeeForm;