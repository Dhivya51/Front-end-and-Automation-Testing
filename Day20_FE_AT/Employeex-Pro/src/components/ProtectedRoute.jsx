import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userRole = localStorage.getItem("role");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (role && userRole !== role) {
    if (userRole === "admin") {
      return <Navigate to="/dashboard" replace />;
    }

    if (userRole === "employee") {
      return <Navigate to="/employee-dashboard" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;