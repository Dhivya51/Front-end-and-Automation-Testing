import { useEffect, useState } from "react";
import axios from "axios";
import "./MySalary.css";
import jsPDF from "jspdf";

function MySalary() {

  const [salary, setSalary] = useState(null);

  useEffect(() => {
    loadSalary();
  }, []);

  const loadSalary = async () => {
    const res = await axios.get("http://localhost:3002/salary");
    setSalary(res.data[0]);
  };

  if (!salary) return <h2>Loading...</h2>;
  const downloadPayslip = () => {

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Employeex Pro", 20, 20);

  doc.setFontSize(14);
  doc.text("Employee Salary Slip", 20, 35);

  doc.line(20, 40, 190, 40);

  doc.text(`Employee ID : ${salary.employeeId}`, 20, 55);
  doc.text(`Month : ${salary.month}`, 20, 65);

  doc.text(`Basic Salary : ₹${salary.basic}`, 20, 80);
  doc.text(`HRA : ₹${salary.hra}`, 20, 90);
  doc.text(`Allowance : ₹${salary.allowance}`, 20, 100);
  doc.text(`Deduction : ₹${salary.deduction}`, 20, 110);

  doc.line(20, 120, 190, 120);

  doc.setFontSize(16);
  doc.text(`Net Salary : ₹${salary.netSalary}`, 20, 135);

  doc.text(`Status : ${salary.status}`, 20, 150);

  doc.save("SalarySlip.pdf");
};

  return (
    <div className="salary-page">

      <div className="salary-card">

        <h1>Salary Details</h1>

        <p><b>Month:</b> {salary.month}</p>
        <p><b>Basic Salary:</b> ₹{salary.basic}</p>
        <p><b>HRA:</b> ₹{salary.hra}</p>
        <p><b>Allowance:</b> ₹{salary.allowance}</p>
        <p><b>Deduction:</b> ₹{salary.deduction}</p>

        <hr />

        <h2>Net Salary: ₹{salary.netSalary}</h2>

        <p>Status: {salary.status}</p>
        <button
  className="download-btn"
  onClick={downloadPayslip}
>
  Download Payslip
</button>

      </div>

    </div>
  );
}

export default MySalary;