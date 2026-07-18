import {
  FaUserPlus,
  FaBuilding,
  FaCalendarCheck,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import "./QuickActions.css";

function QuickActions() {
  const actions = [
  {
    icon: <FaUserPlus />,
    title: "Add Employee",
    color: "#2563EB",
  },
  {
    icon: <FaBuilding />,
    title: "Departments",
    color: "#14B8A6",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Attendance",
    color: "#F59E0B",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Payroll",
    color: "#7C3AED",
  },
];

  return (
    <div className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="action-grid">

        {actions.map((action, index) => (

          <div className="action-card" key={index}>

            <div
  className="action-icon"
  style={{
    background: action.color,
  }}
>
  {action.icon}
</div>

            <h3>{action.title}</h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;