import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import "./EmployeeChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function EmployeeChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Employees Joined",
        data: [12, 18, 25, 30, 36, 45, 52, 60],
        backgroundColor: [
          "#2563EB",
          "#3B82F6",
          "#60A5FA",
          "#2563EB",
          "#3B82F6",
          "#60A5FA",
          "#2563EB",
          "#3B82F6",
        ],
        borderRadius: 8,
      },
    ],
  };

 const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
  

 return (
  <div className="chart-card">
    <h2>Employee Growth</h2>

    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  </div>
);
}

export default EmployeeChart;