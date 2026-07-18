import {
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaBuilding,
  FaDownload,
} from "react-icons/fa";
import "./ReportsPage.css";

function ReportsPage() {
  const reports = [
    {
      title: "Employee Report",
      total: "125 Employees",
      icon: <FaUsers />,
      color: "#2563EB",
    },
    {
      title: "Attendance Report",
      total: "92% Attendance",
      icon: <FaCalendarCheck />,
      color: "#22C55E",
    },
    {
      title: "Payroll Report",
      total: "₹82.5 Lakhs",
      icon: <FaMoneyBillWave />,
      color: "#F59E0B",
    },
    {
      title: "Department Report",
      total: "10 Departments",
      icon: <FaBuilding />,
      color: "#8B5CF6",
    },
  ];

  return (
    <div className="reports-page">

      <h1>Reports & Analytics</h1>

      <div className="report-grid">

        {reports.map((report, index) => (
          <div
            className="report-card"
            key={index}
            style={{ borderTop: `5px solid ${report.color}` }}
          >

            <div
              className="report-icon"
              style={{ color: report.color }}
            >
              {report.icon}
            </div>

            <h2>{report.title}</h2>

            <h3>{report.total}</h3>

            <button className="download-btn">
              <FaDownload />
              Download Report
            </button>

          </div>
        ))}

      </div>

      <div className="summary-table">

        <h2>Monthly Report Summary</h2>

        <table>

          <thead>

            <tr>
              <th>Month</th>
              <th>Employees</th>
              <th>Attendance</th>
              <th>Payroll</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>January</td>
              <td>105</td>
              <td>90%</td>
              <td>₹65,00,000</td>
            </tr>

            <tr>
              <td>February</td>
              <td>110</td>
              <td>91%</td>
              <td>₹68,50,000</td>
            </tr>

            <tr>
              <td>March</td>
              <td>115</td>
              <td>92%</td>
              <td>₹72,00,000</td>
            </tr>

            <tr>
              <td>April</td>
              <td>118</td>
              <td>91%</td>
              <td>₹75,50,000</td>
            </tr>

            <tr>
              <td>May</td>
              <td>122</td>
              <td>93%</td>
              <td>₹79,00,000</td>
            </tr>

            <tr>
              <td>June</td>
              <td>125</td>
              <td>92%</td>
              <td>₹82,50,000</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ReportsPage;