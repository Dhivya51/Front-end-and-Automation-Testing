import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie, Line } from "react-chartjs-2";

import "./DashboardCharts.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function DashboardCharts() {

  const employeeGrowth = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [{
      label: "Employees",
      data: [120,130,145,160,175,200],
      borderColor:"#2563EB",
      backgroundColor:"rgba(37,99,235,.2)",
      fill:true,
      tension:.4
    }]
  };

  const attendanceData = {
    labels:["Present","Leave","Absent"],
    datasets:[{
      data:[88,7,5],
      backgroundColor:[
        "#10B981",
        "#F59E0B",
        "#EF4444"
      ]
    }]
  };

  const departmentData = {
    labels:["IT","HR","Finance","Marketing"],
    datasets:[{
      label:"Employees",
      data:[80,30,45,45],
      backgroundColor:"#4F46E5"
    }]
  };

  return (

    <div className="chart-grid">

      <div className="chart-card">
        <h2>Employee Growth</h2>
        <Line data={employeeGrowth}/>
      </div>

      <div className="chart-card">
        <h2>Attendance</h2>
        <Pie data={attendanceData}/>
      </div>

      <div className="chart-card full-width">
        <h2>Department Distribution</h2>
        <Bar data={departmentData}/>
      </div>

    </div>

  );

}

export default DashboardCharts;