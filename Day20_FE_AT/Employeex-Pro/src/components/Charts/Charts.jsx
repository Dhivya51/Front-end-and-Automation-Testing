import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Pie } from "react-chartjs-2";
import "./Charts.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend
);

function Charts() {

  const employeeGrowth = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Employee Growth",
        data: [10, 25, 35, 45, 60, 75, 90],
        borderColor: "#2563EB",
        backgroundColor: "rgba(37,99,235,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const departmentData = {
    labels: ["IT", "HR", "Finance", "Marketing"],
    datasets: [
      {
        data: [40, 20, 25, 15],
        backgroundColor: [
          "#2563EB",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="charts-container">

      <div className="chart-box">
        <h2>Employee Growth</h2>
        <div className="chart-wrapper">
          <Line data={employeeGrowth} options={options} />
        </div>
      </div>

      <div className="chart-box">
        <h2>Department Distribution</h2>
        <div className="chart-wrapper">
          <Pie data={departmentData} options={options} />
        </div>
      </div>

    </div>
  );
}

export default Charts;