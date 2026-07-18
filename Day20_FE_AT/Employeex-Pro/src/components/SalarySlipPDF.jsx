import jsPDF from "jspdf";

function SalarySlipPDF({ payroll }) {

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Employeex Pro", 70, 20);

    doc.setFontSize(14);
    doc.text("Salary Slip", 80, 30);

    doc.line(20, 35, 190, 35);

    doc.text(`Employee ID : ${payroll.employeeId}`, 20, 50);
    doc.text(`Employee Name : ${payroll.employeeName}`, 20, 60);
    doc.text(`Month : ${payroll.month}`, 20, 70);

    doc.text(`Basic Salary : ₹${payroll.basicSalary}`, 20, 90);
    doc.text(`HRA : ₹${payroll.hra}`, 20, 100);
    doc.text(`Bonus : ₹${payroll.bonus}`, 20, 110);
    doc.text(`Deduction : ₹${payroll.deduction}`, 20, 120);

    doc.line(20,130,190,130);

    doc.setFontSize(16);

    doc.text(
      `Net Salary : ₹${payroll.netSalary}`,
      20,
      145
    );

    doc.save(`${payroll.employeeName}_SalarySlip.pdf`);

  };

  return (
    <button onClick={downloadPDF}>
      📄 Download Salary Slip
    </button>
  );
}

export default SalarySlipPDF;