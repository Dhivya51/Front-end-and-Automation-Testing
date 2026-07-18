import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import EmployeePage from "./pages/EmployeePage";
import DepartmentPage from "./pages/DepartmentPage";
import AttendancePage from "./pages/AttendancePage";
import PayrollPage from "./pages/PayrollPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import EmployeeProfile from "./pages/EmployeeProfile";
import { ToastContainer } from "react-toastify";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import MyProfile from "./pages/MyProfile";
import MyAttendance from "./pages/MyAttendance";
import MySalary from "./pages/MySalary";
import LeaveRequest from "./pages/LeaveRequest";
import DailyTasks from "./pages/DailyTasks";
import Notifications from "./pages/Notifications";
import EmployeeSettings from "./pages/EmployeeSettings";
import LeaveManagement from "./pages/LeaveManagement";
import TaskManagement from "./pages/TaskManagement";
import ProtectedRoute from "./components/ProtectedRoute";
import AttendanceManagement from "./pages/AttendanceManagement";
import PayrollManagement from "./pages/PayrollManagement";
import EmployeeDetails from "./pages/EmployeeDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       

        <Route path="/welcome" element={<Welcome />} />
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute role="admin">
      <Dashboard />
    </ProtectedRoute>
  }
/>
        <Route
  path="/employees"
  element={
    <ProtectedRoute role="admin">
      <EmployeePage />
    </ProtectedRoute>
  }
/>
        <Route path="/departments" element={    <ProtectedRoute role="admin">
<DepartmentPage /></ProtectedRoute>} />
        <Route path="/attendance" element={    <ProtectedRoute role="admin">
<AttendancePage /></ProtectedRoute>} />
        <Route path="/payroll" element={    <ProtectedRoute role="admin">
<PayrollPage /></ProtectedRoute>} />
        <Route path="/reports" element={    <ProtectedRoute role="admin">
<ReportsPage /></ProtectedRoute>} />
        <Route path="/settings" element={    <ProtectedRoute role="admin">
<SettingsPage /></ProtectedRoute>} />
        <Route path="/employee/:id" element={<EmployeeProfile />} />
        
<Route path="/admin-login" element={<AdminLogin />} />

<Route path="/employee-login" element={<EmployeeLogin />} />



<Route
  path="/employee-dashboard"
  element={
    <ProtectedRoute role="employee">
      <EmployeeDashboard />
    </ProtectedRoute>
  }
/>
<Route path="/my-profile" element={ <ProtectedRoute role="employee"><MyProfile /> </ProtectedRoute>} />
<Route path="/my-attendance" element={ <ProtectedRoute role="employee"><MyAttendance /> </ProtectedRoute>} />
<Route path="/my-salary" element={ <ProtectedRoute role="employee"><MySalary /> </ProtectedRoute>} />
<Route path="/daily-tasks" element={ <ProtectedRoute role="employee"><DailyTasks /> </ProtectedRoute>} /> 
<Route path="/notifications" element={ <ProtectedRoute role="employee"><Notifications /> </ProtectedRoute>} />
<Route path="/employee-settings" element={ <ProtectedRoute role="employee"><EmployeeSettings /> </ProtectedRoute>} />
<Route path="/leave-request" element={    <ProtectedRoute role="employee">
<LeaveRequest /></ProtectedRoute>} />
<Route path="/task-management" element={    <ProtectedRoute role="admin">
<TaskManagement /></ProtectedRoute>} />
<Route
  path="/leave-management"
  element={<ProtectedRoute role="admin"><LeaveManagement /></ProtectedRoute>}
/>
<Route
  path="/attendance-management"
  element={
    <ProtectedRoute role="admin">
      <AttendanceManagement />
    </ProtectedRoute>
  }
/>
<Route
  path="/payroll-management"
  element={
    <ProtectedRoute role="admin">
      <PayrollManagement />
    </ProtectedRoute>
  }
/>
<Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
       <ToastContainer
    position="top-right"
    autoClose={3000}
    theme="colored"
  />
    </BrowserRouter>
  );
}

export default App;