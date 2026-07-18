import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import "./DepartmentChart.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function DepartmentChart() {

  const data = {
    labels: [
      "IT",
      "HR",
      "Finance",
      "Marketing",
      "Sales"
    ],
    datasets: [
      {
        data: [40, 15, 20, 12, 13],
        backgroundColor: [
          "#2563EB",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6"
        ]
      }
    ]
  };

  return (
    <div className="department-chart">

      <h2>Department Distribution</h2>

      <Pie data={data} />

    </div>
  );
}

export default DepartmentChart;