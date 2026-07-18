import { useEffect, useState } from "react";
import axios from "axios";
import "./PayrollManagement.css";
import SalarySlipPDF from "../components/SalarySlipPDF";

function PayrollManagement() {
  const [payroll, setPayroll] = useState([]);

  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [month, setMonth] = useState("");
  const [basicSalary, setBasicSalary] = useState("");
  const [hra, setHra] = useState("");
  const [bonus, setBonus] = useState("");
  const [deduction, setDeduction] = useState("");

  const [editPayroll, setEditPayroll] = useState(null);

  useEffect(() => {
    loadPayroll();
  }, []);

  const loadPayroll = async () => {
    const res = await axios.get("http://localhost:3002/payroll");
    setPayroll(res.data);
  };

  const savePayroll = async () => {

    const netSalary =
      Number(basicSalary) +
      Number(hra) +
      Number(bonus) -
      Number(deduction);

    const data = {
      employeeId,
      employeeName,
      
      basicSalary,
      hra,
      bonus,
      deduction,
      netSalary,
    };

    if (editPayroll) {
      await axios.put(
        `http://localhost:3002/payroll/${editPayroll.id}`,
        data
      );

      setEditPayroll(null);

    } else {

      await axios.post(
        "http://localhost:3002/payroll",
        data
      );

    }

    loadPayroll();

    setEmployeeId("");
    setEmployeeName("");
   
    setBasicSalary("");
    setHra("");
    setBonus("");
    setDeduction("");
  };

  const deletePayroll = async (id) => {
    await axios.delete(
      `http://localhost:3002/payroll/${id}`
    );

    loadPayroll();
  };

  return (
    <div className="payroll-page">

      <h1>Payroll Management</h1>

      <div className="payroll-form">

        <input
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e)=>setEmployeeId(e.target.value)}
        />

        <input
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e)=>setEmployeeName(e.target.value)}
        />

        

        <input
          type="number"
          placeholder="Basic Salary"
          value={basicSalary}
          onChange={(e)=>setBasicSalary(e.target.value)}
        />

        <input
          type="number"
          placeholder="HRA"
          value={hra}
          onChange={(e)=>setHra(e.target.value)}
        />

        <input
          type="number"
          placeholder="Bonus"
          value={bonus}
          onChange={(e)=>setBonus(e.target.value)}
        />

        <input
          type="number"
          placeholder="Deduction"
          value={deduction}
          onChange={(e)=>setDeduction(e.target.value)}
        />

        <button onClick={savePayroll}>
          {editPayroll ? "Update Payroll" : "Add Payroll"}
        </button>

      </div>

      <table>

        <thead>

          <tr>

            <th>Name</th>
           
            <th>Net Salary</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {payroll.map((item)=>(

            <tr key={item.id}>

              <td>{item.employeeName}</td>

              

              <td>₹{item.netSalary}</td>

              <td>

                <button
                  onClick={()=>{

                    setEditPayroll(item);

                    setEmployeeId(item.employeeId);
                    setEmployeeName(item.employeeName);
                    
                    setBasicSalary(item.basicSalary);
                    setHra(item.hra);
                    setBonus(item.bonus);
                    setDeduction(item.deduction);

                  }}
                >
                  Edit
                </button>

                <button
                  onClick={()=>deletePayroll(item.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default PayrollManagement;