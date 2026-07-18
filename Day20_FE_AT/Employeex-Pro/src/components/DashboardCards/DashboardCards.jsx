import {
  FaUsers,
  FaBuilding,
  FaTasks,
  FaUserCheck,
} from "react-icons/fa";

import "./DashboardCards.css";
import { useNavigate } from "react-router-dom";

function DashboardCards({
  employees,
  departments,
  tasks,
  attendance,
}) {
  const navigate = useNavigate();

  const cards = [
  {
    title: "Total Employees",
    value: 200,
    icon: <FaUsers />,
    color: "#2563EB",
    path: "/employees",
  },
  {
    title: "Departments",
    value: 9,
    icon: <FaBuilding />,
    color: "#14B8A6",
    path: "/departments",
  },
  {
    title: "Completed Tasks",
    value: 2,
    icon: <FaTasks />,
    color: "#22C55E",
    path: "/task-management",
  },
  {
    title: "Attendance",
    value: 200,
    icon: <FaUserCheck />,
    color: "#F59E0B",
    path: "/attendance-management",
  },
];

  return (
        <div className="dashboard-cards">

      {cards.map((card, index) => (
       <div
  className="dashboard-card"
  key={index}
  onClick={() => navigate(card.path)}
  style={{
    borderTop: `6px solid ${card.color}`,
    cursor: "pointer",
  }}
>
          <div
  className="card-icon"
  style={{
    color: "white",
    background: card.color
  }}
>
            {card.icon}
          </div>

          <h2>{card.value}</h2>

          <p>{card.title}</p>
        </div>
      ))}

    </div>

  );
}

export default DashboardCards;