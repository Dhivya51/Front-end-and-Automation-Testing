import { useState } from "react";
import "./PayrollPage.css";

function PayrollPage() {

  const [payroll] = useState([
    {
      id: 1,
      name: "Dhivya",
      department: "IT",
      basic: 50000,
      hra: 10000,
      pf: 2500,
      tax: 3000,
    },
    {
      id: 2,
      name: "Rahul",
      department: "HR",
      basic: 45000,
      hra: 9000,
      pf: 2200,
      tax: 2800,
    },
    {
      id: 3,
      name: "Priya",
      department: "Finance",
      basic: 55000,
      hra: 12000,
      pf: 2700,
      tax: 3500,
    },
    {
      id: 4,
      name: "Arun",
      department: "Marketing",
      basic: 48000,
      hra: 9500,
      pf: 2300,
      tax: 2900,
    },
    {
      id: 5,
      name: "Karthik",
      department: "Sales",
      basic: 52000,
      hra: 11000,
      pf: 2600,
      tax: 3300,
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredPayroll = payroll.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="payroll-page">

      <h1>Payroll Management</h1>

      <input
        type="text"
        className="search-box"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="payroll-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Basic</th>
            <th>HRA</th>
            <th>PF</th>
            <th>Tax</th>
            <th>Net Salary</th>
          </tr>
        </thead>

        <tbody>

          {filteredPayroll.map((emp) => {

            const netSalary =
              emp.basic + emp.hra - emp.pf - emp.tax;

            return (
              <tr key={emp.id}>

                <td>{emp.name}</td>

                <td>{emp.department}</td>

                <td>₹{emp.basic}</td>

                <td>₹{emp.hra}</td>

                <td>₹{emp.pf}</td>

                <td>₹{emp.tax}</td>

                <td>
                  <strong>₹{netSalary}</strong>
                </td>

              </tr>
            );

          })}

        </tbody>

      </table>

    </div>
  );
}

export default PayrollPage;